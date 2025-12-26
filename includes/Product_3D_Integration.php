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

	public function __construct() {
		add_action( 'add_meta_boxes', array( $this, 'register_meta_box' ) );
		add_action( 'save_post', array( $this, 'save_meta_data' ) );
	}

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

	private function get_product_variations( $product_id ) {
		$variations = array();
		
		// Make sure WooCommerce is loaded
		if ( ! function_exists( 'wc_get_product' ) ) {
			return $variations;
		}
		
		$product = wc_get_product( $product_id );
		
		if ( ! $product ) {
			return $variations;
		}
		
		// Check if it's a variable product
		if ( ! $product->is_type( 'variable' ) ) {
			return $variations;
		}
		
		$variation_ids = $product->get_children();
		
		foreach ( $variation_ids as $variation_id ) {
			$variation = wc_get_product( $variation_id );
			if ( ! $variation ) continue;
			
			$attrs = $variation->get_variation_attributes();
			$name_parts = array();
			$attributes_for_api = array();
			
			foreach ( $attrs as $attr_name => $attr_value ) {
				if ( ! empty( $attr_value ) ) {
					$name_parts[] = $attr_value;
					// Format attribute name for WooCommerce Store API
					// Remove 'attribute_' prefix if present
					$clean_attr_name = str_replace( 'attribute_', '', $attr_name );
					$attributes_for_api[] = array(
						'attribute' => $clean_attr_name,
						'value'     => $attr_value,
					);
				}
			}
			$name = ! empty( $name_parts ) ? implode( ' / ', $name_parts ) : "Variation #{$variation_id}";
			$price = $variation->get_price() ?: '0';
			
			$variations[] = array(
				'id'         => $variation_id,
				'name'       => $name,
				'price'      => $price,
				'attributes' => $attributes_for_api,
			);
		}
		
		return $variations;
	}

	public function render_meta_box( $post ) {
		wp_nonce_field( 'save_pegboard_3d_meta', 'pegboard_3d_nonce' );

		$type = get_post_meta( $post->ID, '_pegboard_3d_type', true );
		$glb_url = get_post_meta( $post->ID, '_pegboard_3d_glb_url', true );
		$panel_width = get_post_meta( $post->ID, '_pegboard_3d_panel_width_cm', true );
		$panel_height = get_post_meta( $post->ID, '_pegboard_3d_panel_height_cm', true );
		$peg_count = get_post_meta( $post->ID, '_pegboard_3d_peg_count', true );
		$snap_mode = get_post_meta( $post->ID, '_pegboard_3d_snap_mode', true );
		$color_variants = get_post_meta( $post->ID, '_pegboard_3d_color_variants', true ) ?: '';
		$color_variation_map = get_post_meta( $post->ID, '_pegboard_3d_color_variation_map', true );
		if ( ! is_array( $color_variation_map ) ) $color_variation_map = array();
		
		$variations = $this->get_product_variations( $post->ID );
		?>
		<style>
			.color-mapping-row { display:flex; align-items:center; gap:10px; margin-bottom:8px; padding:8px; background:#f9f9f9; border-radius:4px; }
			.color-preview { width:30px; height:30px; border-radius:4px; border:1px solid #ccc; }
			.color-hex { font-family:monospace; min-width:80px; }
			.variation-select { flex:1; max-width:300px; }
		</style>
		
		<p>
			<label for="pegboard_3d_type"><?php _e( 'Type 3D:', '3d-pegs' ); ?></label>
			<select name="pegboard_3d_type" id="pegboard_3d_type">
				<option value="none" <?php selected( $type, 'none' ); ?>>Aucun</option>
				<option value="pegboard" <?php selected( $type, 'pegboard' ); ?>>Pegboard</option>
				<option value="accessory" <?php selected( $type, 'accessory' ); ?>>Accessoire</option>
			</select>
		</p>

		<p>
			<label for="pegboard_3d_glb_url"><?php _e( 'URL fichier GLB:', '3d-pegs' ); ?></label>
			<input type="text" name="pegboard_3d_glb_url" id="pegboard_3d_glb_url" value="<?php echo esc_url( $glb_url ); ?>" class="widefat">
		</p>

		<p>
			<label for="pegboard_3d_color_variants"><?php _e( 'Variantes de couleur (hex, virgule):', '3d-pegs' ); ?></label>
			<input type="text" name="pegboard_3d_color_variants" id="pegboard_3d_color_variants" value="<?php echo esc_attr( $color_variants ); ?>" class="widefat" placeholder="#ffffff, #ff0000, #00ff00">
		</p>
		
		<div id="color-variation-mappings">
			<h4><?php _e( 'Correspondance Couleur → Variation', '3d-pegs' ); ?></h4>
			<?php if ( empty( $variations ) ) : ?>
				<p style="color: #666; font-style: italic;">
					<?php _e( 'Aucune variation trouvée. Assurez-vous que ce produit est un "Produit variable" avec des variations créées.', '3d-pegs' ); ?>
				</p>
			<?php else : ?>
				<p class="description"><?php printf( __( '%d variation(s) trouvée(s)', '3d-pegs' ), count( $variations ) ); ?></p>
			<?php endif; ?>
			<div id="color-mapping-container"></div>
		</div>

		<div id="pegboard-specific-fields" style="<?php echo ( 'pegboard' === $type ) ? '' : 'display:none;'; ?>">
			<p>
				<label>Largeur (cm):</label>
				<input type="number" step="0.1" name="pegboard_3d_panel_width_cm" value="<?php echo esc_attr( $panel_width ); ?>">
			</p>
			<p>
				<label>Hauteur (cm):</label>
				<input type="number" step="0.1" name="pegboard_3d_panel_height_cm" value="<?php echo esc_attr( $panel_height ); ?>">
			</p>
		</div>

		<div id="accessory-specific-fields" style="<?php echo ( 'accessory' === $type ) ? '' : 'display:none;'; ?>">
			<p>
				<label>Mode Snapping:</label>
				<select name="pegboard_3d_snap_mode">
					<option value="single_slot" <?php selected( $snap_mode, 'single_slot' ); ?>>Single Slot</option>
					<option value="dual_slot" <?php selected( $snap_mode, 'dual_slot' ); ?>>Dual Slot</option>
					<option value="rail" <?php selected( $snap_mode, 'rail' ); ?>>Rail</option>
				</select>
			</p>
			<p>
				<label>Points d'ancrage:</label>
				<input type="number" name="pegboard_3d_peg_count" value="<?php echo esc_attr( $peg_count ); ?>">
			</p>
		</div>
		
		<script>
		(function() {
			var variations = <?php echo json_encode( $variations ); ?>;
			var savedMap = <?php echo json_encode( $color_variation_map ); ?>;
			
			document.getElementById('pegboard_3d_type').addEventListener('change', function(e) {
				document.getElementById('pegboard-specific-fields').style.display = (e.target.value === 'pegboard') ? 'block' : 'none';
				document.getElementById('accessory-specific-fields').style.display = (e.target.value === 'accessory') ? 'block' : 'none';
			});
			
			var colorInput = document.getElementById('pegboard_3d_color_variants');
			var container = document.getElementById('color-mapping-container');
			
			if (colorInput && container) {
				function updateMappings() {
					var colors = colorInput.value.split(',').map(function(c) { return c.trim(); }).filter(function(c) { return c; });
					var html = '';
					
					if (colors.length === 0) {
						html = '<p style="color:#666;">Ajoutez des couleurs ci-dessus pour les associer aux variations.</p>';
					} else if (variations.length === 0) {
						colors.forEach(function(color) {
							html += '<div class="color-mapping-row">';
							html += '<span class="color-preview" style="background:' + color + '"></span>';
							html += '<span class="color-hex">' + color + '</span>';
							html += '<span style="color:#999;">Pas de variations disponibles</span>';
							html += '</div>';
						});
					} else {
						colors.forEach(function(color) {
							var saved = savedMap[color] || '';
							html += '<div class="color-mapping-row">';
							html += '<span class="color-preview" style="background:' + color + '"></span>';
							html += '<span class="color-hex">' + color + '</span>';
							html += '<select name="pegboard_3d_color_variation_map[' + color + ']" class="variation-select">';
							html += '<option value="">-- Aucune --</option>';
							variations.forEach(function(v) {
								html += '<option value="' + v.id + '"' + (saved == v.id ? ' selected' : '') + '>' + v.name + ' (' + v.price + '€)</option>';
							});
							html += '</select></div>';
						});
					}
					
					container.innerHTML = html;
				}
				colorInput.addEventListener('input', function() { setTimeout(updateMappings, 300); });
				updateMappings();
			}
		})();
		</script>
		<?php
	}

	public function save_meta_data( $post_id ) {
		if ( ! isset( $_POST['pegboard_3d_nonce'] ) || ! wp_verify_nonce( $_POST['pegboard_3d_nonce'], 'save_pegboard_3d_meta' ) ) return;
		if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) return;
		if ( ! current_user_can( 'edit_post', $post_id ) ) return;

		$fields = array( 'type', 'glb_url', 'panel_width_cm', 'panel_height_cm', 'peg_count', 'snap_mode', 'color_variants' );
		foreach ( $fields as $field ) {
			$key = "pegboard_3d_{$field}";
			if ( isset( $_POST[$key] ) ) {
				$value = $_POST[$key];
				if ( $field === 'glb_url' ) $value = esc_url_raw( $value );
				elseif ( in_array( $field, array( 'panel_width_cm', 'panel_height_cm' ) ) ) $value = floatval( $value );
				elseif ( $field === 'peg_count' ) $value = intval( $value );
				else $value = sanitize_text_field( $value );
				update_post_meta( $post_id, "_pegboard_3d_{$field}", $value );
			}
		}
		
		if ( isset( $_POST['pegboard_3d_color_variation_map'] ) && is_array( $_POST['pegboard_3d_color_variation_map'] ) ) {
			$map = array();
			foreach ( $_POST['pegboard_3d_color_variation_map'] as $color => $var_id ) {
				$color = sanitize_text_field( $color );
				$var_id = intval( $var_id );
				if ( $color && $var_id > 0 ) $map[$color] = $var_id;
			}
			update_post_meta( $post_id, '_pegboard_3d_color_variation_map', $map );
		}
	}
	
	public static function get_3d_config( $product_id ) {
		$color_variants_raw = get_post_meta( $product_id, '_pegboard_3d_color_variants', true );
		$color_variants = array();
		if ( $color_variants_raw ) {
			foreach ( explode( ',', $color_variants_raw ) as $c ) {
				$c = trim( $c );
				if ( $c ) $color_variants[] = $c;
			}
		}
		
		// Get the saved color -> variation ID map
		$color_variation_map_raw = get_post_meta( $product_id, '_pegboard_3d_color_variation_map', true );
		if ( ! is_array( $color_variation_map_raw ) ) $color_variation_map_raw = array();
		
		// Build enhanced color_variation_map with variation attributes
		$color_variation_map = array();
		if ( ! empty( $color_variation_map_raw ) && function_exists( 'wc_get_product' ) ) {
			foreach ( $color_variation_map_raw as $color => $variation_id ) {
				$variation = wc_get_product( $variation_id );
				if ( $variation && $variation->is_type( 'variation' ) ) {
					$attrs = $variation->get_variation_attributes();
					$attributes_for_api = array();
					
					foreach ( $attrs as $attr_name => $attr_value ) {
						if ( ! empty( $attr_value ) ) {
							// Remove 'attribute_' prefix if present
							$clean_attr_name = str_replace( 'attribute_', '', $attr_name );
							$attributes_for_api[] = array(
								'attribute' => $clean_attr_name,
								'value'     => $attr_value,
							);
						}
					}
					
					$color_variation_map[ $color ] = array(
						'id'         => intval( $variation_id ),
						'attributes' => $attributes_for_api,
					);
				} else {
					// Fallback: just use the ID if variation not found
					$color_variation_map[ $color ] = array(
						'id'         => intval( $variation_id ),
						'attributes' => array(),
					);
				}
			}
		}
		
		return array(
			'type'                => get_post_meta( $product_id, '_pegboard_3d_type', true ),
			'glb_url'             => get_post_meta( $product_id, '_pegboard_3d_glb_url', true ),
			'panel_width_cm'      => get_post_meta( $product_id, '_pegboard_3d_panel_width_cm', true ),
			'panel_height_cm'     => get_post_meta( $product_id, '_pegboard_3d_panel_height_cm', true ),
			'peg_count'           => get_post_meta( $product_id, '_pegboard_3d_peg_count', true ),
			'snap_mode'           => get_post_meta( $product_id, '_pegboard_3d_snap_mode', true ),
			'color_variants'      => $color_variants,
			'color_variation_map' => $color_variation_map,
		);
	}
}
