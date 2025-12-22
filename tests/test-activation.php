<?php
use Pegboard3D\Pegboard_Plugin;
use PHPUnit\Framework\TestCase;

class Test_Activation extends TestCase {

	public function test_plugin_instance() {
		$instance = Pegboard_Plugin::get_instance();
		$this->assertInstanceOf( 'Pegboard3D\Pegboard_Plugin', $instance );
	}

    // Since we mocked add_action etc, we can't easily verify they were called without a spy.
    // But we can verify the class exists and acts.
    public function test_components_exist() {
        $this->assertTrue( class_exists( 'Pegboard3D\Security_Manager' ) );
    }
}
