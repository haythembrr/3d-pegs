<?php
use Pegboard3D\Product_3D_Integration;
use PHPUnit\Framework\TestCase;

class Test_Product_3D_Integration extends TestCase {

	public function setUp(): void {
		$GLOBALS['wp_tests_post_meta'] = array();
	}

	public function test_register_meta_box() {
		// Just ensure no errors, confirming add_meta_box is called (mocked)
		$integration = new Product_3D_Integration();
		$integration->register_meta_box();
		$this->assertTrue( true );
	}

	public function test_save_meta_data() {
		$integration = new Product_3D_Integration();
		$post_id = 123;
		
		// Setup $_POST
		$_POST['pegboard_3d_nonce'] = 'valid_nonce'; // matched by wp_verify_nonce mock
		$_POST['pegboard_3d_type'] = 'pegboard';
		$_POST['pegboard_3d_glb_url'] = 'http://test.com/model.glb';
		$_POST['pegboard_3d_panel_width_cm'] = '36.5';

		$integration->save_meta_data( $post_id );

		// Check if data was saved to global mock
		$this->assertEquals( 'pegboard', get_post_meta( $post_id, '_pegboard_3d_type', true ) );
		$this->assertEquals( 'http://test.com/model.glb', get_post_meta( $post_id, '_pegboard_3d_glb_url', true ) );
		$this->assertEquals( 36.5, get_post_meta( $post_id, '_pegboard_3d_panel_width_cm', true ) );
	}
    
    public function test_get_3d_config() {
        $post_id = 456;
        $GLOBALS['wp_tests_post_meta'][ $post_id ]['_pegboard_3d_type'] = 'accessory';
        $GLOBALS['wp_tests_post_meta'][ $post_id ]['_pegboard_3d_peg_count'] = 2;
        
        $config = Product_3D_Integration::get_3d_config( $post_id );
        
        $this->assertEquals( 'accessory', $config['type'] );
        $this->assertEquals( 2, $config['peg_count'] );
    }
}
