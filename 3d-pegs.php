<?php
/**
 * Plugin Name: 3D Pegboard Composer
 * Plugin URI:  https://example.com/3d-pegboard-composer
 * Description: Un configurateur 3D pour pegboards SKÅDIS avec intégration WooCommerce.
 * Version:     1.0.0
 * Author:      Your Name
 * Author URI:  https://example.com
 * Text Domain: 3d-pegs
 * Domain Path: /languages
 * License:     GPL-2.0+
 */

namespace Pegboard3D;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Define Plugin Constants
define( 'PEGBOARD3D_VERSION', '1.0.0' );
define( 'PEGBOARD3D_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'PEGBOARD3D_PLUGIN_URL', plugin_dir_url( __FILE__ ) );

// Autoloader
// Autoloader
if ( file_exists( PEGBOARD3D_PLUGIN_DIR . 'vendor/autoload.php' ) ) {
	require_once PEGBOARD3D_PLUGIN_DIR . 'vendor/autoload.php';
} else {
	add_action( 'admin_notices', function() {
		?>
		<div class="notice notice-error">
			<p><?php _e( '3D Pegboard Composer: Missing Composer dependencies. Please run <code>composer install</code> in the plugin directory.', '3d-pegs' ); ?></p>
		</div>
		<?php
	} );
	return;
}

/**
 * Main Plugin Class
 */
class Pegboard_Plugin {

	/**
	 * Instance of this class.
	 *
	 * @var Pegboard_Plugin
	 */
	protected static $instance = null;

	/**
	 * Return an instance of this class.
	 *
	 * @return Pegboard_Plugin A single instance of this class.
	 */
	public static function get_instance() {
		if ( null === self::$instance ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Constructor.
	 */
	private function __construct() {
		$this->init_hooks();
	}

	/**
	 * Hook into actions and filters.
	 */
	private function init_hooks() {
		register_activation_hook( __FILE__, array( $this, 'activate' ) );
		register_deactivation_hook( __FILE__, array( $this, 'deactivate' ) );

		add_action( 'plugins_loaded', array( $this, 'on_plugins_loaded' ) );
	}

	/**
	 * Activation hook.
	 */
	public function activate() {
		// Flush rewrite rules if custom post types are registered here
		flush_rewrite_rules();
	}

	/**
	 * Deactivation hook.
	 */
	public function deactivate() {
		flush_rewrite_rules();
	}

	/**
	 * Plugins loaded action.
	 */
	public function on_plugins_loaded() {
		// Initialize components
		new Product_3D_Integration();
		new REST_Controller();
		
		if ( is_admin() ) {
			new Asset_Dashboard();
		}
		
		new Shortcode_Handler();
		
		// Register AJAX handlers for cart operations
		add_action( 'wp_ajax_pegboard_add_to_cart', array( $this, 'ajax_add_to_cart' ) );
		add_action( 'wp_ajax_nopriv_pegboard_add_to_cart', array( $this, 'ajax_add_to_cart' ) );
	}
	
	/**
	 * AJAX handler for adding items to cart.
	 * Works with both simple and variable products.
	 */
	public function ajax_add_to_cart() {
		// Verify this is a valid request
		if ( ! function_exists( 'WC' ) || ! WC()->cart ) {
			wp_send_json_error( array( 'message' => 'WooCommerce not available' ) );
			return;
		}
		
		$product_id   = isset( $_POST['product_id'] ) ? absint( $_POST['product_id'] ) : 0;
		$quantity     = isset( $_POST['quantity'] ) ? absint( $_POST['quantity'] ) : 1;
		$variation_id = isset( $_POST['variation_id'] ) ? absint( $_POST['variation_id'] ) : 0;
		
		if ( ! $product_id ) {
			wp_send_json_error( array( 'message' => 'Invalid product ID' ) );
			return;
		}
		
		// Get variation attributes if this is a variable product
		$variation = array();
		if ( $variation_id > 0 ) {
			// Get attributes from POST data
			foreach ( $_POST as $key => $value ) {
				if ( strpos( $key, 'attribute_' ) === 0 ) {
					$variation[ sanitize_text_field( $key ) ] = sanitize_text_field( $value );
				}
			}
			
			// If no attributes in POST, try to get them from the variation
			if ( empty( $variation ) ) {
				$variation_obj = wc_get_product( $variation_id );
				if ( $variation_obj && $variation_obj->is_type( 'variation' ) ) {
					$variation = $variation_obj->get_variation_attributes();
				}
			}
		}
		
		// Validate the product exists
		$product = wc_get_product( $variation_id > 0 ? $variation_id : $product_id );
		if ( ! $product ) {
			wp_send_json_error( array( 'message' => 'Product not found' ) );
			return;
		}
		
		// Check if product is purchasable
		if ( ! $product->is_purchasable() ) {
			wp_send_json_error( array( 'message' => 'Product cannot be purchased' ) );
			return;
		}
		
		// Check stock
		if ( ! $product->is_in_stock() ) {
			wp_send_json_error( array( 'message' => 'Product is out of stock' ) );
			return;
		}
		
		try {
			// Add to cart
			$cart_item_key = WC()->cart->add_to_cart( 
				$product_id, 
				$quantity, 
				$variation_id, 
				$variation 
			);
			
			if ( $cart_item_key ) {
				// Success
				do_action( 'woocommerce_ajax_added_to_cart', $product_id );
				
				wp_send_json_success( array(
					'message'       => 'Product added to cart',
					'cart_item_key' => $cart_item_key,
					'product_id'    => $product_id,
					'variation_id'  => $variation_id,
					'quantity'      => $quantity,
					'cart_total'    => WC()->cart->get_cart_contents_count()
				) );
			} else {
				// Failed to add
				$error_message = 'Failed to add product to cart';
				
				// Try to get WooCommerce notices for more details
				$notices = wc_get_notices( 'error' );
				if ( ! empty( $notices ) ) {
					$error_message = wp_strip_all_tags( $notices[0]['notice'] ?? $notices[0] );
					wc_clear_notices();
				}
				
				wp_send_json_error( array( 'message' => $error_message ) );
			}
		} catch ( \Exception $e ) {
			wp_send_json_error( array( 'message' => $e->getMessage() ) );
		}
	}
}

// Initialize the plugin
Pegboard_Plugin::get_instance();
