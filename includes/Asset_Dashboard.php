<?php
namespace Pegboard3D;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Asset_Dashboard class.
 * Handles the admin dashboard for 3D Assets.
 */
class Asset_Dashboard {

	/**
	 * Constructor.
	 */
	public function __construct() {
		add_action( 'admin_menu', array( $this, 'register_admin_menu' ) );
	}

	/**
	 * Register admin menu and submenus.
	 */
	public function register_admin_menu() {
		add_menu_page(
			__( 'Pegboard 3D', '3d-pegs' ),
			__( 'Pegboard 3D', '3d-pegs' ),
			'manage_options',
			'pegboard-3d',
			array( $this, 'render_dashboard' ),
			'dashicons-layout',
			56
		);

		add_submenu_page(
			'pegboard-3d',
			__( 'Tableau de bord', '3d-pegs' ),
			__( 'Tableau de bord', '3d-pegs' ),
			'manage_options',
			'pegboard-3d', // Same slug for first submenu
			array( $this, 'render_dashboard' )
		);

		add_submenu_page(
			'pegboard-3d',
			__( 'Pegboards', '3d-pegs' ),
			__( 'Pegboards', '3d-pegs' ),
			'manage_options',
			'pegboard-3d-boards',
			array( $this, 'render_pegboards_list' )
		);

		add_submenu_page(
			'pegboard-3d',
			__( 'Accessoires', '3d-pegs' ),
			__( 'Accessoires', '3d-pegs' ),
			'manage_options',
			'pegboard-3d-accessories',
			array( $this, 'render_accessories_list' )
		);
	}

	/**
	 * Render the main dashboard.
	 */
	public function render_dashboard() {
		$stats = $this->get_statistics();
		?>
		<div class="wrap">
			<h1><?php _e( 'Pegboard 3D - Tableau de bord', '3d-pegs' ); ?></h1>
            
            <div class="card-container" style="display: flex; gap: 20px; margin-top: 20px;">
                <div class="card" style="max-width: 300px; padding: 20px;">
                    <h2><?php _e( 'Pegboards', '3d-pegs' ); ?></h2>
                    <p class="text-4xl" style="font-size: 2rem; font-weight: bold;"><?php echo intval( $stats['pegboards'] ); ?></p>
                </div>
                
                <div class="card" style="max-width: 300px; padding: 20px;">
                    <h2><?php _e( 'Accessoires', '3d-pegs' ); ?></h2>
                    <p class="text-4xl" style="font-size: 2rem; font-weight: bold;"><?php echo intval( $stats['accessories'] ); ?></p>
                </div>
                
                <div class="card" style="max-width: 300px; padding: 20px;">
                    <h2><?php _e( 'Produits sans 3D', '3d-pegs' ); ?></h2>
                    <p class="text-4xl" style="font-size: 2rem; font-weight: bold;"><?php echo intval( $stats['no_3d'] ); ?></p>
                </div>
            </div>
		</div>
		<?php
	}

	/**
	 * Render Pegboards list.
	 * Simple table implementation for now.
	 */
	public function render_pegboards_list() {
        $pegboards = $this->query_products_by_3d_type( 'pegboard' );
		?>
		<div class="wrap">
			<h1 class="wp-heading-inline"><?php _e( 'Pegboards', '3d-pegs' ); ?></h1>
            
            <table class="wp-list-table widefat fixed striped">
                <thead>
                    <tr>
                        <th><?php _e( 'Produit', '3d-pegs' ); ?></th>
                        <th><?php _e( 'Dimensions (cm)', '3d-pegs' ); ?></th>
                        <th><?php _e( 'URL GLB', '3d-pegs' ); ?></th>
                        <th><?php _e( 'Actions', '3d-pegs' ); ?></th>
                    </tr>
                </thead>
                <tbody>
                    <?php if ( empty( $pegboards ) ) : ?>
                        <tr><td colspan="4"><?php _e( 'Aucun pegboard trouvé.', '3d-pegs' ); ?></td></tr>
                    <?php else : ?>
                        <?php foreach ( $pegboards as $p ) : 
                            $width = get_post_meta( $p->ID, '_pegboard_3d_panel_width_cm', true );
                            $height = get_post_meta( $p->ID, '_pegboard_3d_panel_height_cm', true );
                            $glb = get_post_meta( $p->ID, '_pegboard_3d_glb_url', true );
                        ?>
                        <tr>
                            <td>
                                <strong><a href="<?php echo get_edit_post_link( $p->ID ); ?>"><?php echo esc_html( $p->post_title ); ?></a></strong>
                            </td>
                            <td><?php echo esc_html( $width . ' x ' . $height ); ?></td>
                            <td><?php echo esc_html( basename( $glb ) ); ?></td>
                            <td>
                                <a href="<?php echo get_edit_post_link( $p->ID ); ?>" class="button button-small"><?php _e( 'Éditer', '3d-pegs' ); ?></a>
                            </td>
                        </tr>
                        <?php endforeach; ?>
                    <?php endif; ?>
                </tbody>
            </table>
		</div>
		<?php
	}

	/**
	 * Render Accessories list.
	 */
	public function render_accessories_list() {
        $accessories = $this->query_products_by_3d_type( 'accessory' );
		?>
		<div class="wrap">
			<h1 class="wp-heading-inline"><?php _e( 'Accessoires', '3d-pegs' ); ?></h1>
            
            <table class="wp-list-table widefat fixed striped">
                <thead>
                    <tr>
                        <th><?php _e( 'Produit', '3d-pegs' ); ?></th>
                        <th><?php _e( 'Points d\'ancrage', '3d-pegs' ); ?></th>
                        <th><?php _e( 'Mode Snap', '3d-pegs' ); ?></th>
                         <th><?php _e( 'URL GLB', '3d-pegs' ); ?></th>
                        <th><?php _e( 'Actions', '3d-pegs' ); ?></th>
                    </tr>
                </thead>
                <tbody>
                    <?php if ( empty( $accessories ) ) : ?>
                        <tr><td colspan="5"><?php _e( 'Aucun accessoire trouvé.', '3d-pegs' ); ?></td></tr>
                    <?php else : ?>
                        <?php foreach ( $accessories as $p ) : 
                            $count = get_post_meta( $p->ID, '_pegboard_3d_peg_count', true );
                            $mode = get_post_meta( $p->ID, '_pegboard_3d_snap_mode', true );
                             $glb = get_post_meta( $p->ID, '_pegboard_3d_glb_url', true );
                        ?>
                        <tr>
                            <td>
                                <strong><a href="<?php echo get_edit_post_link( $p->ID ); ?>"><?php echo esc_html( $p->post_title ); ?></a></strong>
                            </td>
                            <td><?php echo esc_html( $count ); ?></td>
                            <td><?php echo esc_html( $mode ); ?></td>
                            <td><?php echo esc_html( basename( $glb ) ); ?></td>
                            <td>
                                <a href="<?php echo get_edit_post_link( $p->ID ); ?>" class="button button-small"><?php _e( 'Éditer', '3d-pegs' ); ?></a>
                            </td>
                        </tr>
                        <?php endforeach; ?>
                    <?php endif; ?>
                </tbody>
            </table>
		</div>
		<?php
	}

    /**
     * Helper to get stats.
     * 
     * @return array
     */
    private function get_statistics() {
        // In a real scenario, optimize these queries (maybe count_posts or custom SQL)
        // For MVP/Demo:
        $pegboards = count( $this->query_products_by_3d_type( 'pegboard' ) );
        $accessories = count( $this->query_products_by_3d_type( 'accessory' ) );
        
        $total_products = wp_count_posts( 'product' )->publish;
        $no_3d = max( 0, $total_products - $pegboards - $accessories );
        
        return array(
            'pegboards' => $pegboards,
            'accessories' => $accessories,
            'no_3d' => $no_3d
        );
    }

    /**
     * Query products helper.
     * 
     * @param string $type
     * @return array WP_Post[]
     */
    private function query_products_by_3d_type( $type ) {
        return get_posts( array(
            'post_type' => 'product',
            'posts_per_page' => -1,
            'meta_key' => '_pegboard_3d_type',
            'meta_value' => $type
        ) );
    }
}
