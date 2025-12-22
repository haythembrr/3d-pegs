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
	/**
	 * Plugins loaded action.
	 */
	public function on_plugins_loaded() {
		// Initialize components
		// We instantiate these directly to ensure they are loaded.
		// If the classes are missing, it will cause a fatal error, which is better than silent failure
		// during development so we know what's wrong.
		
		new Product_3D_Integration();
		new REST_Controller();
		
		if ( is_admin() ) {
			new Asset_Dashboard();
		}
		
		new Shortcode_Handler();
	}
}

// Initialize the plugin
Pegboard_Plugin::get_instance();
