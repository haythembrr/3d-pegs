<?php
namespace Pegboard3D;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * REST_Controller class.
 * Exposes 3D data via WP REST API.
 */
class REST_Controller {

	/**
	 * Constructor.
	 */
	public function __construct() {
		add_action( 'rest_api_init', array( $this, 'register_routes' ) );
	}

	/**
	 * Register routes.
	 */
	public function register_routes() {
		$namespace = 'pegboard-3d/v1';

		register_rest_route( $namespace, '/pegboards', array(
			'methods'             => 'GET',
			'callback'            => array( $this, 'get_pegboards' ),
			'permission_callback' => '__return_true', // Public
		) );

		register_rest_route( $namespace, '/accessories', array(
			'methods'             => 'GET',
			'callback'            => array( $this, 'get_accessories' ),
			'permission_callback' => '__return_true', // Public
		) );

		register_rest_route( $namespace, '/product/(?P<id>\d+)', array(
			'methods'             => 'GET',
			'callback'            => array( $this, 'get_product_3d_data' ),
			'permission_callback' => '__return_true',
            'args'                => array(
                'id' => array(
                    'validate_callback' => function($param, $request, $key) {
                        return is_numeric($param);
                    }
                ),
            ),
		) );
	}

	/**
	 * Get all pegboard products.
     * 
     * @param \WP_REST_Request $request
     * @return \WP_REST_Response
	 */
	public function get_pegboards( $request ) {
        // Query products with _pegboard_3d_type = 'pegboard'
        // Mocking WP_Query usage for simple implementation start
        $args = array(
            'post_type'  => 'product',
            'meta_key'   => '_pegboard_3d_type',
            'meta_value' => 'pegboard',
            'posts_per_page' => -1,
        );
        
        $posts = get_posts( $args );
        $data = array();
        
        foreach ( $posts as $post ) {
            $data[] = $this->prepare_item_for_response( $post->ID );
        }
        
		return new \WP_REST_Response( $data, 200 );
	}

	/**
	 * Get all accessory products.
     * 
     * @param \WP_REST_Request $request
     * @return \WP_REST_Response
	 */
	public function get_accessories( $request ) {
		$args = array(
            'post_type'  => 'product',
            'meta_key'   => '_pegboard_3d_type',
            'meta_value' => 'accessory',
            'posts_per_page' => -1,
        );
        
        $posts = get_posts( $args );
        $data = array();
        
        foreach ( $posts as $post ) {
            $data[] = $this->prepare_item_for_response( $post->ID );
        }
        
		return new \WP_REST_Response( $data, 200 );
	}

	/**
	 * Get 3D data for a single product.
     * 
     * @param \WP_REST_Request $request
     * @return \WP_REST_Response
	 */
	public function get_product_3d_data( $request ) {
        $id = $request->get_param( 'id' );
        $data = $this->prepare_item_for_response( $id );
        
        if ( empty( $data ) ) {
            return new \WP_Error( 'not_found', 'Product not found or not 3D configured', array( 'status' => 404 ) );
        }

		return new \WP_REST_Response( $data, 200 );
	}
    
    /**
     * Prepare item data.
     * 
     * @param int $product_id
     * @return array
     */
    private function prepare_item_for_response( $product_id ) {
        if ( ! class_exists( 'Pegboard3D\Product_3D_Integration' ) ) {
            return array();
        }
        
        $config = Product_3D_Integration::get_3d_config( $product_id );
        
        // Basic Product Data
        $product_title = get_the_title( $product_id );
        // $price = ... would get from WC_Product normally
        
        return array_merge( 
            array( 'id' => $product_id, 'name' => $product_title ), 
            $config 
        );
    }
}
