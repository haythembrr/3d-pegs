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

		// Render container
		ob_start();
		?>
		<div id="pegboard-configurator-wrapper" 
			 style="height: <?php echo esc_attr( $atts['height'] ); ?>;"
			 data-theme="<?php echo esc_attr( $atts['theme'] ); ?>"
			 data-default-panel="<?php echo esc_attr( $atts['default_panel'] ); ?>">
			
			<!-- 3D Scene Area -->
			<div class="pegboard-scene-wrapper">
				<!-- Camera controls overlay (left) -->
				<div class="pegboard-scene-controls">
					<div class="pegboard-camera-controls" id="pegboard-camera-controls">
						<button class="pegboard-camera-btn" data-preset="front" title="<?php esc_attr_e( 'Vue de face', '3d-pegs' ); ?>">Face</button>
						<button class="pegboard-camera-btn" data-preset="side" title="<?php esc_attr_e( 'Vue de côté', '3d-pegs' ); ?>">Côté</button>
						<button class="pegboard-camera-btn" data-preset="top" title="<?php esc_attr_e( 'Vue de haut', '3d-pegs' ); ?>">Haut</button>
					</div>
					<button class="pegboard-reset-btn" id="pegboard-reset" title="<?php esc_attr_e( 'Réinitialiser', '3d-pegs' ); ?>">
						↺ Reset
					</button>
				</div>

				<!-- Action controls overlay (right) -->
				<div class="pegboard-action-controls">
					<button class="pegboard-action-btn pegboard-delete-btn hidden" id="pegboard-delete-selected" title="<?php esc_attr_e( 'Supprimer la sélection', '3d-pegs' ); ?>">
						🗑️
					</button>
					<div class="pegboard-help-btn-wrapper">
						<button class="pegboard-action-btn pegboard-help-btn" id="pegboard-help-btn" title="<?php esc_attr_e( 'Aide', '3d-pegs' ); ?>">
							💡
						</button>
						<div class="pegboard-help-tooltip">
							<p><?php _e( 'Cliquez sur un produit pour l\'ajouter à la scène', '3d-pegs' ); ?></p>
							<p><?php _e( 'Cliquez sur un objet pour le sélectionner, puis glissez pour le déplacer', '3d-pegs' ); ?></p>
						</div>
					</div>
				</div>
				
				<!-- 3D Canvas -->
				<div id="pegboard-3d-container" class="pegboard-3d-container"></div>
			</div>
			
			<!-- Sidebar -->
			<div id="pegboard-sidebar" class="pegboard-sidebar">
				<div class="pegboard-sidebar-content">
					<div class="pegboard-sidebar-header">
						<h3><?php _e( 'Configuration', '3d-pegs' ); ?></h3>
					</div>

					<div id="pegboard-product-library" class="pegboard-library">
						<!-- Populated by JS -->
					</div>
					
					<div id="pegboard-price-display" class="pegboard-price">
						<span class="label"><?php _e( 'Total', '3d-pegs' ); ?></span>
						<span class="amount">0.00 €</span>
					</div>

					<div id="pegboard-summary" class="pegboard-summary"></div>

					<div class="pegboard-cart-section">
						<button id="pegboard-add-to-cart" class="button button-primary">
							<?php _e( 'Ajouter au panier', '3d-pegs' ); ?>
						</button>
						<div id="pegboard-cart-spinner" class="spinner hidden"></div>
					</div>
				</div>
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
				'color_variants' => $config['color_variants'],
				'color_variation_map' => $config['color_variation_map'],
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
				'color_variants' => $config['color_variants'],
				'color_variation_map' => $config['color_variation_map'],
				'metadata' => $config
			);
		}

		return $products_data;
	}
}
