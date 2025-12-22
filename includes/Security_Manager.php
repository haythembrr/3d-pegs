<?php
namespace Pegboard3D;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Security_Manager class.
 * Handles security related Tasks: Nonces, Sanitization, validation.
 */
class Security_Manager {

	/**
	 * Verify a nonce.
	 *
	 * @param string $nonce The nonce to verify.
	 * @param string $action The action to verify against.
	 * @return bool True if valid, false otherwise.
	 */
	public static function verify_nonce( $nonce, $action ) {
		if ( ! function_exists( 'wp_verify_nonce' ) ) {
			return false; // Should not happen in WP context
		}
		return (bool) wp_verify_nonce( $nonce, $action );
	}

	/**
	 * Create a nonce.
	 *
	 * @param string $action The action to create nonce for.
	 * @return string The generated nonce.
	 */
	public static function create_nonce( $action ) {
		return wp_create_nonce( $action );
	}

	/**
	 * Sanitize text input.
	 *
	 * @param string $input Input string.
	 * @return string Sanitized string.
	 */
	public static function sanitize_text( $input ) {
		return sanitize_text_field( $input );
	}

	/**
	 * Sanitize GLB URL.
	 *
	 * @param string $url The URL to sanitize.
	 * @return string Sanitized URL.
	 */
	public static function sanitize_glb_url( $url ) {
		return esc_url_raw( $url );
	}

	/**
	 * Validate GLB file type.
	 * Simplified check: extension and MIME type.
	 *
	 * @param array $file_data $_FILES['...'] array.
	 * @return bool True if valid GLB.
	 */
	public static function validate_glb_file_upload( $file_data ) {
		// Check extension
		$filename = $file_data['name'];
		$ext = strtolower( pathinfo( $filename, PATHINFO_EXTENSION ) );
		if ( 'glb' !== $ext ) {
			return false;
		}

		// Check MIME type?
		// Note: WP's check_filetype could be used here.
		// For now simple basic check.
        // The magic bytes check should come later/more complex.
		
		return true;
	}
    
    /**
     * Validate GLB Magic Bytes.
     * 
     * @param string $file_path Path to the file.
     * @return bool True if valid magic bytes (glTF).
     */
    public static function validate_glb_magic_bytes( $file_path ) {
        if ( ! file_exists( $file_path ) ) {
            return false;
        }
        
        $handle = fopen( $file_path, 'rb' );
        if ( ! $handle ) {
            return false;
        }
        
        $magic = fread( $handle, 4 );
        fclose( $handle );
        
        // glTF binary magic is "glTF" (0x67 0x6C 0x54 0x46)
        if ( 'glTF' === $magic ) {
            return true;
        }
        
        return false;
    }
}
