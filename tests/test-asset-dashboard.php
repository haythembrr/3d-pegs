<?php
use Pegboard3D\Asset_Dashboard;
use PHPUnit\Framework\TestCase;

class Test_Asset_Dashboard extends TestCase {

	public function test_register_admin_menu() {
		$dashboard = new Asset_Dashboard();
		$dashboard->register_admin_menu();
        // Just verify no crashes with mocks
		$this->assertTrue( true );
	}
    
    public function test_render_methods() {
        $dashboard = new Asset_Dashboard();
        
        // Use output buffering to capture HTML output
        ob_start();
        $dashboard->render_dashboard();
        $output = ob_get_clean();
        $this->assertStringContainsString( 'Pegboard 3D - Tableau de bord', $output );
        
        ob_start();
        $dashboard->render_pegboards_list();
        $output = ob_get_clean();
        $this->assertStringContainsString( 'Produit', $output ); // Table header
        
        ob_start();
        $dashboard->render_accessories_list();
        $output = ob_get_clean();
        $this->assertStringContainsString( 'Points d\'ancrage', $output ); // Table header
    }
}
