<?php
use Pegboard3D\REST_Controller;
use PHPUnit\Framework\TestCase;

class Test_REST_Controller extends TestCase {

	public function test_register_routes() {
		$controller = new REST_Controller();
		$controller->register_routes();
        // If no error, we assume route registration mock worked.
		$this->assertTrue( true );
	}
    
    // Testing endpoints directly is hard without WP REST Server mocks.
    // We can at least instantiate and call methods to ensure no PHP errors.
    
    public function test_endpoint_method_existence() {
        $controller = new REST_Controller();
        $this->assertTrue( method_exists( $controller, 'get_pegboards' ) );
        $this->assertTrue( method_exists( $controller, 'get_accessories' ) );
        $this->assertTrue( method_exists( $controller, 'get_product_3d_data' ) );
    }
}
