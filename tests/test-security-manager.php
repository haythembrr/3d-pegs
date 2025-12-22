<?php
use Pegboard3D\Security_Manager;
use PHPUnit\Framework\TestCase;

class Test_Security_Manager extends TestCase {

	public function test_nonce_verification() {
		$valid = Security_Manager::verify_nonce( 'valid_nonce', 'action' );
		$this->assertTrue( $valid );

		$invalid = Security_Manager::verify_nonce( 'invalid_nonce', 'action' );
		$this->assertFalse( $invalid );
	}

	public function test_sanitize_text_fuzzing() {
		// Mock property-based testing by iterating random strings
		$inputs = [
			'<script>alert(1)</script>String' => 'alert(1)String', // filter_var w/ FILTER_SANITIZE_STRING strips tags
			'Normal String' => 'Normal String',
			'String with "quotes"' => 'String with "quotes"', // filter_var handles this dependent on flags, here default
		];
		
		foreach ( $inputs as $input => $expected_partial ) {
			$sanitized = Security_Manager::sanitize_text( $input );
			// Check if tags are stripped (basic check)
			$this->assertStringNotContainsString( '<script>', $sanitized );
		}
	}

	public function test_validate_glb_file_upload() {
		$valid_file = [ 'name' => 'model.glb' ];
		$this->assertTrue( Security_Manager::validate_glb_file_upload( $valid_file ) );

		$invalid_file = [ 'name' => 'image.png' ];
		$this->assertFalse( Security_Manager::validate_glb_file_upload( $invalid_file ) );
	}

    public function test_validate_glb_magic_bytes() {
        // Create temporary valid GLB file
        $file = tempnam( sys_get_temp_dir(), 'test_glb' );
        file_put_contents( $file, 'glTF' . '....' );
        
        $this->assertTrue( Security_Manager::validate_glb_magic_bytes( $file ) );
        
        // Invalid file
        file_put_contents( $file, 'PNG' . '....' );
        $this->assertFalse( Security_Manager::validate_glb_magic_bytes( $file ) );
        
        unlink( $file );
    }
}
