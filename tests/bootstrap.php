<?php
require_once dirname( __DIR__ ) . '/vendor/autoload.php';

// Mock WordPress functions if not available
if ( ! function_exists( 'sanitize_text_field' ) ) {
	function sanitize_text_field( $str ) {
		return filter_var( $str, FILTER_SANITIZE_STRING ); // Simple mock
	}
}
if ( ! function_exists( 'esc_url_raw' ) ) {
	function esc_url_raw( $url ) {
		return filter_var( $url, FILTER_SANITIZE_URL ); // Simple mock
	}
}
if ( ! function_exists( 'wp_verify_nonce' ) ) {
	function wp_verify_nonce( $nonce, $action ) {
		return $nonce === 'valid_nonce'; // Mock validation
	}
}
if ( ! function_exists( 'wp_create_nonce' ) ) {
	function wp_create_nonce( $action ) {
		return 'valid_nonce';
	}
}
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', '/tmp/' ); // Mock ABSPATH
}
if ( ! function_exists( 'register_activation_hook' ) ) { function register_activation_hook( $file, $callback ) {} }
if ( ! function_exists( 'register_deactivation_hook' ) ) { function register_deactivation_hook( $file, $callback ) {} }
if ( ! function_exists( 'add_action' ) ) { function add_action( $tag, $callback ) {} }
if ( ! function_exists( 'plugin_dir_path' ) ) { function plugin_dir_path( $file ) { return dirname( $file ) . '/'; } }
if ( ! function_exists( 'plugin_dir_url' ) ) { function plugin_dir_url( $file ) { return 'http://example.com/plugin/'; } }
if ( ! function_exists( 'flush_rewrite_rules' ) ) { function flush_rewrite_rules() {} }

// Additional Mocks for Phase 2
if ( ! function_exists( 'add_meta_box' ) ) { function add_meta_box( $id, $title, $callback, $screen, $context, $priority ) {} }
if ( ! function_exists( 'wp_nonce_field' ) ) { function wp_nonce_field( $action, $name ) { echo '<input type="hidden" name="' . $name . '" value="valid_nonce">'; } }
if ( ! function_exists( 'get_post_meta' ) ) { 
    function get_post_meta( $post_id, $key, $single ) { 
        return isset( $GLOBALS['wp_tests_post_meta'][ $post_id ][ $key ] ) ? $GLOBALS['wp_tests_post_meta'][ $post_id ][ $key ] : ''; 
    } 
}
if ( ! function_exists( 'update_post_meta' ) ) { 
    function update_post_meta( $post_id, $key, $value ) { 
        $GLOBALS['wp_tests_post_meta'][ $post_id ][ $key ] = $value; 
    } 
}
if ( ! function_exists( 'selected' ) ) { function selected( $a, $b ) { if ( $a === $b ) echo 'selected'; } }
if ( ! function_exists( 'esc_attr' ) ) { function esc_attr( $s ) { return $s; } }
if ( ! function_exists( 'esc_url' ) ) { function esc_url( $s ) { return $s; } } // basic mock
if ( ! function_exists( '_e' ) ) { function _e( $text, $domain ) { echo $text; } }
if ( ! function_exists( '__' ) ) { function __( $text, $domain ) { return $text; } }
if ( ! function_exists( 'current_user_can' ) ) { function current_user_can( $cap, $id ) { return true; } }
if ( ! function_exists( 'register_rest_route' ) ) { function register_rest_route( $ns, $route, $args ) {} }
if ( ! function_exists( 'get_posts' ) ) { function get_posts( $args ) { return array(); } } // Empty for now
if ( ! function_exists( 'get_the_title' ) ) { function get_the_title( $id ) { return 'Product Title'; } }

// Mock for Asset_Dashboard
if ( ! function_exists( 'add_menu_page' ) ) { function add_menu_page( $page_title, $menu_title, $capability, $menu_slug, $function, $icon_url, $position ) {} }
if ( ! function_exists( 'add_submenu_page' ) ) { function add_submenu_page( $parent_slug, $page_title, $menu_title, $capability, $menu_slug, $function ) {} }
if ( ! function_exists( 'is_admin' ) ) { function is_admin() { return true; } }
if ( ! function_exists( 'wp_count_posts' ) ) { 
    function wp_count_posts( $type ) { 
         $obj = new stdClass();
         $obj->publish = 10;
         return $obj;
    } 
}
if ( ! function_exists( 'get_edit_post_link' ) ) { function get_edit_post_link( $id ) { return 'http://example.com/wp-admin/post.php?post=' . $id . '&action=edit'; } }

// Define globals for mocks
$GLOBALS['wp_tests_post_meta'] = array();

// Load the main class file manually if needed, or rely on autoloader for includes
// The main plugin file is not in includes/ so autoloader won't catch it unless main plugin class is in includes/ (Reviewing code: It's in 3d-pegs.php which is root).
// But autoloader maps 'Pegboard3D\\' to 'includes/'.
// 'Pegboard_Plugin' is in '3d-pegs.php'.
// Ideally, the class should be in 'includes/class-pegboard-plugin.php'.
// But for now task 1.1 said "Create main plugin file".
// I'll leave the main class there but I can't autoload it.
// I'll require it in bootstrap if I want to test it.
require_once dirname( __DIR__ ) . '/3d-pegs.php';
