<?php
namespace Pegboard3D;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Shortcode_Handler class.
 * Handles the [pegboard_configurator] shortcode.
 */
class Shortcode_Handler {

	/**
	 * Constructor.
	 */
	public function __construct() {
		error_log( 'Shortcode_Handler initialized' );
		add_shortcode( 'pegboard_configurator', array( $this, 'render_configurator' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'maybe_enqueue_scripts' ) );
		add_filter( 'script_loader_tag', array( $this, 'add_type_attribute' ), 10, 3 );
	}

	/**
	 * Render the configurator shortcode.
	 *
	 * @param array $atts Shortcode attributes.
	 * @return string HTML output.
	 */
	public function render_configurator( $atts ) {
		error_log( 'render_configurator called' );
		// Parse attributes
		$atts = shortcode_atts( array(
			'default_panel' => '',
			'theme' => 'light',
			'height' => '600px'
		), $atts, 'pegboard_configurator' );

		// Mark that we need to enqueue scripts
		// add_filter( 'pegboard_3d_enqueue_scripts', '__return_true' );
		// The enqueue logic is now handled in maybe_enqueue_scripts by parsing post content
		
		// Note: We moved wp_localize_script to maybe_enqueue_scripts to ensure it runs.
		// If you need unique config per shortcode, consider using data attributes on the container.

		// Render container
		ob_start();
		?>
		<div id="pegboard-configurator-wrapper" 
			 style="height: <?php echo esc_attr( $atts['height'] ); ?>;"
			 data-theme="<?php echo esc_attr( $atts['theme'] ); ?>"
			 data-default-panel="<?php echo esc_attr( $atts['default_panel'] ); ?>"
			 >
			<div id="pegboard-3d-container" class="pegboard-3d-container"></div>
			
			<div id="pegboard-sidebar" class="pegboard-sidebar">
				<h3><?php _e( 'Configuration', '3d-pegs' ); ?></h3>

				<div id="pegboard-product-library" class="pegboard-library">
					<!-- Populated by JS -->
				</div>
				
				<div id="pegboard-price-display" class="pegboard-price">
					<span class="label"><?php _e( 'Total:', '3d-pegs' ); ?></span>
					<span class="amount">0 €</span>
				</div>

				<div id="pegboard-item-list" class="pegboard-items"></div>

				<button id="pegboard-add-to-cart" class="button button-primary">
					<?php _e( 'Ajouter au panier', '3d-pegs' ); ?>
				</button>

				<div id="pegboard-cart-spinner" class="spinner hidden"></div>
			</div>

			<div id="pegboard-messages" class="pegboard-messages"></div>
		</div>
		<?php
		return ob_get_clean();
	}

	/**
	 * Maybe enqueue scripts (only on pages with shortcode).
	 */
	/**
	 * Maybe enqueue scripts (only on pages with shortcode).
	 */
	public function maybe_enqueue_scripts() {
		global $post;

		$enqueue = false;

		// Check if we are on a singular post/page and it contains the shortcode
		if ( is_a( $post, 'WP_Post' ) && has_shortcode( $post->post_content, 'pegboard_configurator' ) ) {
			$enqueue = true;
		}

		// Also allow manual filtering to force enqueue
		if ( apply_filters( 'pegboard_3d_enqueue_scripts', $enqueue ) ) {
			
			// Check if bundle exists
			$bundle_url = PEGBOARD3D_PLUGIN_URL . 'assets/bundle/pegboard-3d.es.js';
			
			// Pass configuration to JavaScript
			// Note: We need to do this here because we might not be in the loop context yet,
			// but we need the localized script data available when the script loads.
			
			// Enqueue main bundle
			// Note: We do NOT rely on external threejs since it's bundled in the es module (unless configured otherwise).
			// If we wanted to share threejs, we would need to shim it or use import maps.
			// For now, simpler to use the bundled version.
			wp_enqueue_script(
				'pegboard-3d-main',
				$bundle_url,
				array(), // No external dependencies (Three.js is bundled)
				PEGBOARD3D_VERSION,
				true
			);
			
			// Re-fetch default products data for localization
			$data = $this->get_products_data();
			
			// Get WooCommerce Store API nonce
			$store_api_nonce = '';
			if ( function_exists( 'wp_create_nonce' ) ) {
				$store_api_nonce = wp_create_nonce( 'wc_store_api' );
			}
			
			// Get WooCommerce cart page URL
			$cart_url = function_exists( 'wc_get_cart_url' ) ? wc_get_cart_url() : '/cart';
			
			wp_localize_script( 'pegboard-3d-main', 'Pegboard3DConfig', array(
				'defaultPanel' => '', 
				'theme' => 'light',
				'apiUrl' => rest_url( 'pegboard-3d/v1' ),
				'cartApiUrl' => rest_url( 'wc/store/v1/cart/add-item' ),
				'cartPageUrl' => $cart_url,
				'storeApiNonce' => $store_api_nonce,
				'products' => $data
			) );

			// Enqueue styles
			wp_enqueue_style(
				'pegboard-3d-styles',
				PEGBOARD3D_PLUGIN_URL . 'assets/css/configurator.css',
				array(),
				PEGBOARD3D_VERSION
			);
		}
	}
	
	/**
	 * Add type="module" to the script tag.
	 * 
	 * @param string $tag    The script tag.
	 * @param string $handle The script handle.
	 * @param string $src    The script src.
	 * @return string Modified script tag.
	 */
	public function add_type_attribute( $tag, $handle, $src ) {
		if ( 'pegboard-3d-main' !== $handle ) {
			return $tag;
		}
		// Change the script tag to use type="module"
		$tag = '<script type="module" src="' . esc_url( $src ) . '" id="pegboard-3d-main-js"></script>';
		return $tag;
	}

	/**
	 * Get products data for JavaScript.
	 *
	 * @return array Products data.
	 */
	private function get_products_data() {
		$products_data = array();

		// Get pegboards
		$pegboards = get_posts( array(
			'post_type' => 'product',
			'posts_per_page' => -1,
			'meta_key' => '_pegboard_3d_type',
			'meta_value' => 'pegboard'
		) );

		foreach ( $pegboards as $post ) {
			$config = Product_3D_Integration::get_3d_config( $post->ID );
			
			// Get WooCommerce price if available
			$product = wc_get_product( $post->ID );
			$price = $product ? floatval( $product->get_price() ) : 0;

			$products_data[] = array(
				'id' => $post->ID,
				'name' => $post->post_title,
				'type' => 'pegboard',
				'price' => $price,
				'glb_url' => $config['glb_url'],
				'metadata' => $config
			);
		}

		// Get accessories
		$accessories = get_posts( array(
			'post_type' => 'product',
			'posts_per_page' => -1,
			'meta_key' => '_pegboard_3d_type',
			'meta_value' => 'accessory'
		) );

		foreach ( $accessories as $post ) {
			$config = Product_3D_Integration::get_3d_config( $post->ID );
			
			$product = wc_get_product( $post->ID );
			$price = $product ? floatval( $product->get_price() ) : 0;

			$products_data[] = array(
				'id' => $post->ID,
				'name' => $post->post_title,
				'type' => 'accessory',
				'price' => $price,
				'glb_url' => $config['glb_url'],
				'metadata' => $config
			);
		}

		return $products_data;
	}
}
