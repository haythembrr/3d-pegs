<?php
namespace Pegboard3D;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Product_3D_Integration class.
 * Adds 3D configuration meta boxes to WooCommerce products.
 */
class Product_3D_Integration {

	/**
	 * Constructor.
	 */
	public function __construct() {
		add_action( 'add_meta_boxes', array( $this, 'register_meta_box' ) );
		add_action( 'save_post', array( $this, 'save_meta_data' ) );
	}

	/**
	 * Register the meta box.
	 */
	public function register_meta_box() {
		add_meta_box(
			'pegboard_3d_config',
			__( 'Configuration 3D', '3d-pegs' ),
			array( $this, 'render_meta_box' ),
			'product',
			'normal',
			'high'
		);
	}

	/**
	 * Render the meta box content.
	 *
	 * @param \WP_Post $post The post object.
	 */
	public function render_meta_box( $post ) {
		// Verify security
		wp_nonce_field( 'save_pegboard_3d_meta', 'pegboard_3d_nonce' );

		// Retrieve existing values
		$type = get_post_meta( $post->ID, '_pegboard_3d_type', true );
		$glb_url = get_post_meta( $post->ID, '_pegboard_3d_glb_url', true );
		$panel_width = get_post_meta( $post->ID, '_pegboard_3d_panel_width_cm', true );
		$panel_height = get_post_meta( $post->ID, '_pegboard_3d_panel_height_cm', true );
        $peg_count = get_post_meta( $post->ID, '_pegboard_3d_peg_count', true );
        $snap_mode = get_post_meta( $post->ID, '_pegboard_3d_snap_mode', true );
        $color_variants = get_post_meta( $post->ID, '_pegboard_3d_color_variants', true );
        if ( empty( $color_variants ) ) {
            $color_variants = '';
        }
        
		// HTML Output
		?>
		<div class="pegboard-3d-meta-box">
			<p>
				<label for="pegboard_3d_type"><?php _e( 'Type 3D:', '3d-pegs' ); ?></label>
				<select name="pegboard_3d_type" id="pegboard_3d_type">
					<option value="none" <?php selected( $type, 'none' ); ?>><?php _e( 'Aucun', '3d-pegs' ); ?></option>
					<option value="pegboard" <?php selected( $type, 'pegboard' ); ?>><?php _e( 'Pegboard', '3d-pegs' ); ?></option>
					<option value="accessory" <?php selected( $type, 'accessory' ); ?>><?php _e( 'Accessoire', '3d-pegs' ); ?></option>
				</select>
			</p>

			<p>
				<label for="pegboard_3d_glb_url"><?php _e( 'URL fichier GLB:', '3d-pegs' ); ?></label>
				<input type="text" name="pegboard_3d_glb_url" id="pegboard_3d_glb_url" value="<?php echo esc_url( $glb_url ); ?>" class="widefat">
			</p>

			<p>
				<label for="pegboard_3d_color_variants"><?php _e( 'Variantes de couleur (hex, séparées par virgule):', '3d-pegs' ); ?></label>
				<input type="text" name="pegboard_3d_color_variants" id="pegboard_3d_color_variants" value="<?php echo esc_attr( $color_variants ); ?>" class="widefat" placeholder="#1a1a2e, #16213e, #0f3460, #e94560">
				<span class="description"><?php _e( 'Ex: #1a1a2e, #16213e, #0f3460 - La première couleur est la couleur par défaut', '3d-pegs' ); ?></span>
			</p>
            
            <div id="pegboard-3d-preview-area">
                <?php if ( $glb_url ) : ?>
                    <button type="button" class="button" id="pegboard-3d-preview-btn"><?php _e( 'Prévisualisation 3D', '3d-pegs' ); ?></button>
                <?php endif; ?>
            </div>

			<div id="pegboard-specific-fields" style="<?php echo ( 'pegboard' === $type ) ? '' : 'display:none;'; ?>">
				<p>
					<label for="pegboard_3d_panel_width_cm"><?php _e( 'Largeur (cm):', '3d-pegs' ); ?></label>
					<input type="number" step="0.1" name="pegboard_3d_panel_width_cm" id="pegboard_3d_panel_width_cm" value="<?php echo esc_attr( $panel_width ); ?>">
				</p>
				<p>
					<label for="pegboard_3d_panel_height_cm"><?php _e( 'Hauteur (cm):', '3d-pegs' ); ?></label>
					<input type="number" step="0.1" name="pegboard_3d_panel_height_cm" id="pegboard_3d_panel_height_cm" value="<?php echo esc_attr( $panel_height ); ?>">
				</p>
			</div>

			<div id="accessory-specific-fields" style="<?php echo ( 'accessory' === $type ) ? '' : 'display:none;'; ?>">
                <p>
					<label for="pegboard_3d_snap_mode"><?php _e( 'Mode de Snapping:', '3d-pegs' ); ?></label>
					<select name="pegboard_3d_snap_mode" id="pegboard_3d_snap_mode">
                        <option value="single_slot" <?php selected( $snap_mode, 'single_slot' ); ?>>Single Slot</option>
                        <option value="dual_slot" <?php selected( $snap_mode, 'dual_slot' ); ?>>Dual Slot</option>
                        <option value="rail" <?php selected( $snap_mode, 'rail' ); ?>>Rail</option>
                    </select>
				</p>
                <p>
					<label for="pegboard_3d_peg_count"><?php _e( 'Nombre de points d\'ancrage:', '3d-pegs' ); ?></label>
					<input type="number" name="pegboard_3d_peg_count" id="pegboard_3d_peg_count" value="<?php echo esc_attr( $peg_count ); ?>">
				</p>
			</div>
            
            <script>
                // Simple conditional display logic
                document.getElementById('pegboard_3d_type').addEventListener('change', function(e) {
                    var type = e.target.value;
                    document.getElementById('pegboard-specific-fields').style.display = (type === 'pegboard') ? 'block' : 'none';
                    document.getElementById('accessory-specific-fields').style.display = (type === 'accessory') ? 'block' : 'none';
                });
            </script>
		</div>
		<?php
	}

	/**
	 * Save meta data.
	 *
	 * @param int $post_id The post ID.
	 */
	public function save_meta_data( $post_id ) {
        // 1. Check nonce
		if ( ! isset( $_POST['pegboard_3d_nonce'] ) || ! wp_verify_nonce( $_POST['pegboard_3d_nonce'], 'save_pegboard_3d_meta' ) ) {
			return;
		}

        // 2. Check autosave
		if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
			return;
		}

        // 3. Check permissions
		if ( ! current_user_can( 'edit_post', $post_id ) ) {
			return;
		}

		// Save fields
		if ( isset( $_POST['pegboard_3d_type'] ) ) {
			update_post_meta( $post_id, '_pegboard_3d_type', sanitize_text_field( $_POST['pegboard_3d_type'] ) );
		}

		if ( isset( $_POST['pegboard_3d_glb_url'] ) ) {
			// Using our Security_Manager would be best, but utilizing WP core for now as passing dependency is tricky in simple setup
            // or we use valid static call
            $url = esc_url_raw( $_POST['pegboard_3d_glb_url'] );
			update_post_meta( $post_id, '_pegboard_3d_glb_url', $url );
		}

		if ( isset( $_POST['pegboard_3d_panel_width_cm'] ) ) {
			update_post_meta( $post_id, '_pegboard_3d_panel_width_cm', floatval( $_POST['pegboard_3d_panel_width_cm'] ) );
		}
        
        if ( isset( $_POST['pegboard_3d_panel_height_cm'] ) ) {
			update_post_meta( $post_id, '_pegboard_3d_panel_height_cm', floatval( $_POST['pegboard_3d_panel_height_cm'] ) );
		}
        
        if ( isset( $_POST['pegboard_3d_peg_count'] ) ) {
			update_post_meta( $post_id, '_pegboard_3d_peg_count', intval( $_POST['pegboard_3d_peg_count'] ) );
		}
        
        if ( isset( $_POST['pegboard_3d_snap_mode'] ) ) {
			update_post_meta( $post_id, '_pegboard_3d_snap_mode', sanitize_text_field( $_POST['pegboard_3d_snap_mode'] ) );
		}
        
        if ( isset( $_POST['pegboard_3d_color_variants'] ) ) {
			update_post_meta( $post_id, '_pegboard_3d_color_variants', sanitize_text_field( $_POST['pegboard_3d_color_variants'] ) );
		}
	}
    
    /**
     * Get 3D config for a product.
     * Helper for REST API.
     * 
     * @param int $product_id
     * @return array
     */
    public static function get_3d_config( $product_id ) {
        $color_variants_raw = get_post_meta( $product_id, '_pegboard_3d_color_variants', true );
        $color_variants = array();
        if ( ! empty( $color_variants_raw ) ) {
            $colors = explode( ',', $color_variants_raw );
            foreach ( $colors as $color ) {
                $color = trim( $color );
                if ( ! empty( $color ) ) {
                    $color_variants[] = $color;
                }
            }
        }
        
        return array(
            'type'            => get_post_meta( $product_id, '_pegboard_3d_type', true ),
            'glb_url'         => get_post_meta( $product_id, '_pegboard_3d_glb_url', true ),
            'panel_width_cm'  => get_post_meta( $product_id, '_pegboard_3d_panel_width_cm', true ),
            'panel_height_cm' => get_post_meta( $product_id, '_pegboard_3d_panel_height_cm', true ),
            'peg_count'       => get_post_meta( $product_id, '_pegboard_3d_peg_count', true ),
            'snap_mode'       => get_post_meta( $product_id, '_pegboard_3d_snap_mode', true ),
            'color_variants'  => $color_variants,
        );
    }
}
