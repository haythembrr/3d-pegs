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
					<button class="pegboard-action-btn pegboard-theme-btn" id="pegboard-theme-toggle" title="<?php esc_attr_e( 'Mode nuit', '3d-pegs' ); ?>">☀️</button>
					<button class="pegboard-action-btn pegboard-delete-btn hidden" id="pegboard-delete-selected" title="<?php esc_attr_e( 'Supprimer la sélection', '3d-pegs' ); ?>">✕</button>
					<div class="pegboard-help-btn-wrapper">
						<button class="pegboard-action-btn pegboard-help-btn" id="pegboard-help-btn" title="<?php esc_attr_e( 'Aide', '3d-pegs' ); ?>">?</button>
						<div class="pegboard-help-tooltip">
							<p><?php _e( 'Cliquez sur un produit pour l\'ajouter à la scène', '3d-pegs' ); ?></p>
							<p><?php _e( 'Cliquez sur un objet pour le sélectionner, puis glissez pour le déplacer', '3d-pegs' ); ?></p>
						</div>
					</div>
					
					<!-- Zoom control with pop-down on mobile -->
					<div class="pegboard-zoom-wrapper" id="pegboard-zoom-wrapper">
						<button class="pegboard-action-btn pegboard-zoom-btn" id="pegboard-zoom-btn" title="<?php esc_attr_e( 'Zoom', '3d-pegs' ); ?>">🔍</button>
						<div class="pegboard-zoom-control" id="pegboard-zoom-control">
							<span class="zoom-icon zoom-in" title="<?php esc_attr_e( 'Zoom avant', '3d-pegs' ); ?>">+</span>
							<div class="zoom-slider-track">
								<input type="range" 
									   id="pegboard-zoom-slider" 
									   class="zoom-slider" 
									   min="0" 
									   max="100" 
									   value="50"
									   orient="vertical"
									   title="<?php esc_attr_e( 'Zoom', '3d-pegs' ); ?>">
								<div class="zoom-slider-fill" id="pegboard-zoom-fill"></div>
							</div>
							<span class="zoom-icon zoom-out" title="<?php esc_attr_e( 'Zoom arrière', '3d-pegs' ); ?>">−</span>
						</div>
					</div>
				</div>
				
				<!-- Contextual hint popup -->
				<div id="pegboard-context-hint" class="pegboard-context-hint hidden">
					<span class="hint-icon"></span>
					<span class="hint-text"></span>
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
			
			// Ensure WooCommerce scripts are loaded for Store API nonce
			if ( function_exists( 'WC' ) ) {
				// Enqueue WooCommerce cart fragments for mini-cart updates
				wp_enqueue_script( 'wc-cart-fragments' );
			}
			
			wp_enqueue_script(
				'pegboard-3d-main',
				$bundle_url,
				array( 'wp-api-fetch' ), // Depend on wp-api-fetch for nonce handling
				PEGBOARD3D_VERSION,
				true
			);
			
			// Re-fetch default products data for localization
			$data = $this->get_products_data();
			
			// Get WooCommerce Store API nonce using robust method
			$store_api_nonce = $this->get_store_api_nonce();
			
			// Get WooCommerce cart page URL
			$cart_url = function_exists( 'wc_get_cart_url' ) ? wc_get_cart_url() : '/cart';
			
			// Get WooCommerce currency settings
			$currency_settings = $this->get_currency_settings();
			
			// Build config with debug info
			$config = array(
				'defaultPanel'   => '', 
				'theme'          => 'light',
				'apiUrl'         => rest_url( 'pegboard-3d/v1' ),
				'ajaxUrl'        => admin_url( 'admin-ajax.php' ),
				'cartApiUrl'     => rest_url( 'wc/store/v1/cart/add-item' ),
				'cartPageUrl'    => $cart_url,
				'storeApiNonce'  => $store_api_nonce,
				'products'       => $data,
				'currency'       => $currency_settings,
				'debug'          => array(
					'pluginVersion'    => PEGBOARD3D_VERSION,
					'wcVersion'        => defined( 'WC_VERSION' ) ? WC_VERSION : 'N/A',
					'wpVersion'        => get_bloginfo( 'version' ),
					'nonceMethod'      => $this->last_nonce_method,
					'productCount'     => count( $data ),
					'timestamp'        => current_time( 'mysql' ),
				),
			);
			
			wp_localize_script( 'pegboard-3d-main', 'Pegboard3DConfig', $config );

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
	 * Track which nonce method was used (for debugging)
	 */
	private $last_nonce_method = 'none';
	
	/**
	 * Get WooCommerce Store API nonce with multiple fallback methods.
	 * This is robust across different WooCommerce versions.
	 *
	 * @return string The nonce string
	 */
	private function get_store_api_nonce() {
		$nonce = '';
		
		// Method 1: Try WooCommerce Blocks StoreApi (WC 6.9+)
		// Use method_exists to check if the method is available
		if ( class_exists( '\Automattic\WooCommerce\StoreApi\StoreApi' ) ) {
			try {
				$container = \Automattic\WooCommerce\StoreApi\StoreApi::container();
				if ( $container && class_exists( '\Automattic\WooCommerce\StoreApi\Authentication' ) ) {
					$auth = $container->get( \Automattic\WooCommerce\StoreApi\Authentication::class );
					// Check if get_nonce method exists before calling
					if ( $auth && method_exists( $auth, 'get_nonce' ) ) {
						$nonce = $auth->get_nonce();
						if ( ! empty( $nonce ) ) {
							$this->last_nonce_method = 'StoreApi::Authentication::get_nonce';
							return $nonce;
						}
					}
				}
			} catch ( \Exception $e ) {
				// Log error and continue to fallback
				$this->log_debug( 'StoreApi nonce method failed: ' . $e->getMessage() );
			} catch ( \Error $e ) {
				// Catch PHP errors too (like undefined method)
				$this->log_debug( 'StoreApi nonce method error: ' . $e->getMessage() );
			}
		}
		
		// Method 2: Try to get nonce from WooCommerce Blocks settings
		if ( empty( $nonce ) && function_exists( 'wp_create_nonce' ) ) {
			// The Store API accepts 'wc_store_api' nonce
			$nonce = wp_create_nonce( 'wc_store_api' );
			if ( ! empty( $nonce ) ) {
				$this->last_nonce_method = 'wp_create_nonce(wc_store_api)';
				return $nonce;
			}
		}
		
		// Method 3: Fallback to WordPress REST API nonce
		if ( empty( $nonce ) && function_exists( 'wp_create_nonce' ) ) {
			$nonce = wp_create_nonce( 'wp_rest' );
			$this->last_nonce_method = 'wp_create_nonce(wp_rest)';
			return $nonce;
		}
		
		$this->last_nonce_method = 'none_available';
		return '';
	}
	
	/**
	 * Log debug information (only when WP_DEBUG is enabled)
	 *
	 * @param string $message The message to log
	 */
	private function log_debug( $message ) {
		if ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
			error_log( '[Pegboard3D] ' . $message );
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
			
			// Get WooCommerce product and stock info
			$product = wc_get_product( $post->ID );
			$price = $product ? floatval( $product->get_price() ) : 0;
			$stock_info = $this->get_product_stock_info( $product, $config );

			$products_data[] = array(
				'id' => $post->ID,
				'name' => $post->post_title,
				'type' => 'pegboard',
				'price' => $price,
				'glb_url' => $config['glb_url'],
				'color_variants' => $config['color_variants'],
				'color_variation_map' => $config['color_variation_map'],
				'metadata' => $config,
				'in_stock' => $stock_info['in_stock'],
				'stock_by_color' => $stock_info['stock_by_color']
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
			
			// Get WooCommerce product and stock info
			$product = wc_get_product( $post->ID );
			$price = $product ? floatval( $product->get_price() ) : 0;
			$stock_info = $this->get_product_stock_info( $product, $config );

			$products_data[] = array(
				'id' => $post->ID,
				'name' => $post->post_title,
				'type' => 'accessory',
				'price' => $price,
				'glb_url' => $config['glb_url'],
				'color_variants' => $config['color_variants'],
				'color_variation_map' => $config['color_variation_map'],
				'metadata' => $config,
				'in_stock' => $stock_info['in_stock'],
				'stock_by_color' => $stock_info['stock_by_color']
			);
		}

		return $products_data;
	}
	
	/**
	 * Get stock information for a product and its color variations.
	 *
	 * @param WC_Product|null $product The WooCommerce product.
	 * @param array $config The 3D config with color_variation_map.
	 * @return array Stock info with 'in_stock' (bool) and 'stock_by_color' (array).
	 */
	private function get_product_stock_info( $product, $config ) {
		$result = array(
			'in_stock' => true,
			'stock_by_color' => array()
		);
		
		if ( ! $product ) {
			return $result;
		}
		
		// Check if it's a variable product
		if ( $product->is_type( 'variable' ) ) {
			$has_any_in_stock = false;
			
			// Check stock for each color variation
			if ( ! empty( $config['color_variation_map'] ) ) {
				foreach ( $config['color_variation_map'] as $color => $variation_data ) {
					$variation_id = is_array( $variation_data ) ? $variation_data['id'] : $variation_data;
					$variation = wc_get_product( $variation_id );
					
					if ( $variation ) {
						$is_in_stock = $variation->is_in_stock();
						$result['stock_by_color'][ $color ] = $is_in_stock;
						
						if ( $is_in_stock ) {
							$has_any_in_stock = true;
						}
					} else {
						// Variation not found, assume out of stock
						$result['stock_by_color'][ $color ] = false;
					}
				}
			}
			
			// Product is in stock if at least one variation is in stock
			$result['in_stock'] = $has_any_in_stock;
			
		} else {
			// Simple product - just check the main product stock
			$result['in_stock'] = $product->is_in_stock();
			
			// For simple products, all colors have the same stock status
			if ( ! empty( $config['color_variants'] ) ) {
				foreach ( $config['color_variants'] as $color ) {
					$result['stock_by_color'][ $color ] = $result['in_stock'];
				}
			}
		}
		
		return $result;
	}
	
	/**
	 * Get WooCommerce currency settings for JavaScript.
	 *
	 * @return array Currency settings.
	 */
	private function get_currency_settings() {
		// Default settings (fallback if WooCommerce is not available)
		$settings = array(
			'code' => 'EUR',
			'symbol' => '€',
			'position' => 'right_space', // left, right, left_space, right_space
			'decimals' => 2,
			'decimal_separator' => ',',
			'thousand_separator' => ' '
		);
		
		// Get WooCommerce settings if available
		if ( function_exists( 'get_woocommerce_currency' ) ) {
			$settings['code'] = get_woocommerce_currency();
		}
		
		if ( function_exists( 'get_woocommerce_currency_symbol' ) ) {
			$settings['symbol'] = get_woocommerce_currency_symbol();
		}
		
		if ( function_exists( 'get_option' ) ) {
			$position = get_option( 'woocommerce_currency_pos', 'left' );
			$settings['position'] = $position;
			
			$settings['decimals'] = absint( get_option( 'woocommerce_price_num_decimals', 2 ) );
			$settings['decimal_separator'] = get_option( 'woocommerce_price_decimal_sep', '.' );
			$settings['thousand_separator'] = get_option( 'woocommerce_price_thousand_sep', ',' );
		}
		
		return $settings;
	}
}
