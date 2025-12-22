# Implementation Plan - 3D Pegboard Composer

## Phase 1: Project Setup and Core Infrastructure

- [x] 1. Initialize WordPress plugin structure
  - [x] 1.1 Create plugin directory structure (includes/, assets/js/, assets/css/, templates/)
    - Create main plugin file with WordPress headers and activation hooks
    - Set up autoloader for PHP classes following PSR-4
    - _Requirements: 10.1, 10.2_
  - [x] 1.2 Configure build tools for JavaScript (Vite)
    - Set up TypeScript compilation with Three.js types
    - Configure fast-check for property-based testing
    - _Requirements: 3.1_
  - [x] 1.3 Write unit tests for plugin activation/deactivation
    - Test hooks registration
    - Test capability checks
    - _Requirements: 11.1_

- [x] 2. Implement Security_Manager component
  - [x] 2.1 Create Security_Manager PHP class
    - Implement nonce generation and verification methods
    - Implement input sanitization methods (sanitize_text_field, esc_url, etc.)
    - Implement output escaping methods
    - _Requirements: 11.1, 11.2, 11.5_
  - [x] 2.2 Write property test for input sanitization
    - **Property 10: Security Input Sanitization**
    - **Validates: Requirements 11.2, 11.5**
  - [x] 2.3 Implement file type validation for GLB uploads
    - Check file extension and MIME type
    - Validate GLB magic bytes (glTF binary signature)
    - _Requirements: 11.4_
  - [x] 2.4 Write property test for file type validation
    - **Property 11: File Type Validation**
    - **Validates: Requirements 11.4**

- [x] 3. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Phase 2: WooCommerce Product Integration

- [x] 4. Implement Product_3D_Integration component
  - [x] 4.1 Register meta box on WooCommerce product edit screen
    - Add "Configuration 3D" meta box using add_meta_box()
    - Implement conditional field display based on 3D type selection
    - _Requirements: 1.1, 1.2, 1.3_
  - [x] 4.2 Implement meta data save/load functionality
    - Save GLB URL and metadata with _pegboard_3d_ prefix
    - Load and display existing configuration on edit
    - _Requirements: 1.4_
  - [x] 4.3 Write unit tests for meta box rendering and save
    - Test meta box registration
    - Test data persistence
    - _Requirements: 1.1, 1.4_
  - [x] 4.4 Implement 3D Preview modal in admin
    - Add "3D Preview" button when product has 3D config
    - Load Three.js mini-viewer in modal
    - _Requirements: 1.5_

- [x] 5. Implement REST_Controller for product data
  - [x] 5.1 Register REST API routes
    - GET /pegboard-3d/v1/pegboards - List all pegboard products
    - GET /pegboard-3d/v1/accessories - List all accessory products
    - GET /pegboard-3d/v1/product/{id} - Get single product 3D data
    - _Requirements: 10.4_
  - [x] 5.2 Implement permission callbacks
    - Validate user capabilities for admin endpoints
    - Allow public read access for configurator endpoints
    - _Requirements: 11.3_
  - [x] 5.3 Write integration tests for REST endpoints
    - Test response format
    - Test permission checks
    - _Requirements: 11.3_

- [x] 6. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Phase 3: Asset Dashboard Administration

- [x] 7. Implement Asset_Dashboard component
  - [x] 7.1 Register admin menu and submenus
    - Add "Pegboard 3D" menu with Dashboard, Pegboards, Accessories submenus
    - _Requirements: 2.1_
  - [x] 7.2 Implement Dashboard statistics view
    - Query and display total pegboards, accessories, products without 3D
    - _Requirements: 2.2_
  - [x] 7.3 Implement Pegboards list table
    - Display Product Name, Dimensions, Slot Count, GLB Status, Preview columns
    - Use WP_List_Table for consistent WordPress admin UI
    - _Requirements: 2.3_
  - [x] 7.4 Implement Accessories list table
    - Display Product Name, Peg Count, Orientation, Load Capacity, GLB Status columns
    - _Requirements: 2.4_
  - [x] 7.5 Implement bulk edit functionality
    - Allow batch GLB file updates across multiple products
    - _Requirements: 2.5_

## Phase 4: Three.js Scene Foundation

- [x] 8. Implement SceneManager component
  - [x] 8.1 Create SceneManager TypeScript class
    - Initialize WebGLRenderer with antialiasing and sRGB color space
    - Set up PerspectiveCamera with appropriate FOV
    - Configure lighting (AmbientLight + DirectionalLight)
    - _Requirements: 3.1, 3.2_
  - [x] 8.2 Implement OrbitControls with constraints
    - Limit rotation to prevent viewing behind pegboard plane
    - Set min/max zoom distances
    - _Requirements: 3.3_
  - [x] 8.3 Write property test for camera constraints
    - **Property: OrbitControls Constraint**
    - Verify camera stays in front of pegboard for any rotation
    - **Validates: Requirements 3.3**
  - [x] 8.4 Implement responsive canvas sizing
    - Listen to window resize events
    - Update renderer and camera aspect ratio
    - _Requirements: 3.5_
  - [x] 8.5 Write property test for responsive sizing
    - **Property 13: Canvas Responsive Sizing**
    - **Validates: Requirements 3.5**

- [x] 9. Implement ModelLoader component
  - [x] 9.1 Create ModelLoader TypeScript class
    - Initialize GLTFLoader with optional DRACOLoader
    - Implement loadModel() method returning Promise<LoadedModel>
    - _Requirements: 4.1_
  - [x] 9.2 Implement metadata extraction for pegboards
    - Extract panel_width_cm, panel_height_cm from userData
    - Extract grid_spacing_mm, grid_offset_mm, border_margin_mm
    - _Requirements: 4.2, 12.1, 12.2, 12.3, 12.4_
  - [x] 9.3 Write property test for metadata round-trip
    - **Property 1: Pegboard Metadata Round-Trip**
    - **Validates: Requirements 4.5, 12.1, 12.2, 12.3, 12.4**
  - [x] 9.4 Implement metadata extraction for accessories
    - Find all Empty objects matching "peg_*" pattern
    - Extract peg positions relative to accessory origin
    - Extract snap_mode, orientation, load_capacity_g
    - _Requirements: 4.3, 13.1, 13.2, 13.3, 13.4, 13.5_
  - [x] 9.5 Write property test for accessory metadata extraction
    - **Property 2: Accessory Metadata Extraction Completeness**
    - **Validates: Requirements 4.3, 13.1, 13.2**
  - [x] 9.6 Implement model caching
    - Store loaded models in Map by URL
    - Return cached model on subsequent requests
    - _Requirements: 4.4_
  - [x] 9.7 Write property test for cache efficiency
    - **Property 15: Model Cache Efficiency**
    - **Validates: Requirements 4.4**
  - [x] 9.8 Implement default value fallback for missing metadata
    - Use SKÅDIS defaults when metadata fields are missing
    - Log warning for each missing field
    - _Requirements: 12.5_
  - [x] 9.9 Write property test for default fallback
    - **Property 12: Metadata Default Fallback**
    - **Validates: Requirements 12.5**

- [x] 10. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Phase 5: Snapping System

- [x] 11. Implement SnappingSystem component
  - [x] 11.1 Create SnappingSystem TypeScript class
    - Implement dual-grid calculation (Grid A and Grid B)
    - Grid A: x = round(x/40)*40, y = round(y/40)*40
    - Grid B: x = round((x-20)/40)*40+20, y = round((y-20)/40)*40+20
    - _Requirements: 5.2_
  - [x] 11.2 Write property test for dual-grid algorithm
    - **Property 3: Dual-Grid Snapping Algorithm Correctness**
    - **Validates: Requirements 5.2, 14.2, 14.5**
  - [x] 11.3 Implement calculateSnapPoint() method
    - Accept cursor position and pegboard metadata
    - Respect accessory snap_mode (single_slot, dual_slot, rail) logic
    - Return nearest valid grid position using Euclidean distance
    - _Requirements: 5.1, 14.5_
  - [x] 11.4 Implement validatePlacement() for multi-peg accessories
    - Check all peg points against valid grid positions
    - Return false if any peg is outside bounds or invalid
    - _Requirements: 5.3, 14.3, 14.4_
  - [x] 11.5 Write property test for multi-peg validation
    - **Property 4: Multi-Peg Placement Validation**
    - **Validates: Requirements 5.3, 5.4, 14.3, 14.4**

- [x] 12. Implement PlacementCalculator component
  - [x] 12.1 Create PlacementCalculator TypeScript class
    - Implement computePegWorldPositions() method
    - Transform local peg positions to world coordinates based on cursor
    - _Requirements: 14.1_
  - [x] 12.2 Implement findNearestValidPosition() method
    - Iterate through possible snap positions
    - Return position that minimizes total distance for all pegs
    - _Requirements: 14.2, 14.3_
  - [x] 12.3 Implement collision detection
    - Check bounding box overlap on XY plane
    - Return true if new accessory would overlap existing ones
    - _Requirements: 5.5_
  - [x] 12.4 Write property test for collision detection
    - **Property 6: Collision Detection Completeness**
    - **Validates: Requirements 5.5**
  - [x] 12.5 Implement invalid placement handling
    - Return accessory to previous position if released outside bounds
    - Remove accessory if no previous valid position exists
    - _Requirements: 5.4_

- [x] 13. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Phase 6: Multi-Panel Management

- [x] 14. Implement MultiPanelManager component
  - [x] 14.1 Create MultiPanelManager TypeScript class
    - Maintain array of Panel instances with metadata
    - Track global workspace bounds
    - _Requirements: 6.4_
  - [x] 14.2 Implement addPanel() method
    - Read dimensions from model metadata
    - Calculate adjacent position to existing panels
    - Update global grid
    - _Requirements: 6.1_
  - [x] 14.3 Implement grid continuity calculation
    - Account for border_margin_mm of each panel
    - Ensure 40mm spacing continuity across boundaries
    - _Requirements: 6.2_
  - [x] 14.4 Write property test for grid continuity
    - **Property 8: Grid Continuity Across Panels**
    - **Validates: Requirements 6.2, 6.5_
  - [x] 14.5 Implement removePanel() with cascade
    - Remove all accessories attached to panel
    - Trigger re-validation for accessories on adjacent panels that might now be hanging
    - Update workspace bounds and global grid
    - _Requirements: 6.3_
  - [x] 14.6 Write property test for panel removal cascade
    - **Property 7: Panel Removal Cascade**
    - **Validates: Requirements 6.3_
  - [x] 14.7 Implement cross-panel accessory validation
    - Verify peg points exist on valid positions across panel boundaries
    - _Requirements: 6.5_

- [x] 15. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Phase 7: Price Calculation and Cart Integration

- [x] 16. Implement PriceCalculator component
  - [x] 16.1 Create PriceCalculator TypeScript class
    - Maintain Map of product IDs to quantities
    - Store product prices from WooCommerce data
    - _Requirements: 7.1_
  - [x] 16.2 Implement addItem() and removeItem() methods
    - Update quantity map on add/remove
    - Recalculate total price
    - _Requirements: 7.1, 7.2_
  - [x] 16.3 Implement getTotal() with quantity multiplication
    - Sum (unit_price * quantity) for all products
    - _Requirements: 7.3_
  - [x] 16.4 Write property test for price consistency
    - **Property 5: Price Calculation Consistency**
    - **Validates: Requirements 7.1, 7.2, 7.3_
  - [x] 16.5 Implement debounced price updates
    - Debounce updatePrice() calls with 100ms delay
    - _Requirements: 7.5_
  - [x] 16.6 Implement tax/promotion handling
    - Apply WooCommerce tax rates if configured
    - Apply active promotions to final price
    - _Requirements: 7.4_

- [x] 17. Implement CartIntegration component
  - [x] 17.1 Create CartIntegration TypeScript class
    - Implement addToCart() method using WooCommerce Store API
    - Send grouped POST request to /wc/store/v1/cart/add-item
    - _Requirements: 8.1_
  - [x] 17.2 Handle product variations
    - Include variation_id in cart request when applicable
    - _Requirements: 8.2_
  - [x] 17.3 Write property test for cart request completeness
    - **Property 9: Cart Request Completeness**
    - **Validates: Requirements 8.1, 8.2_
  - [x] 17.4 Implement loading state UI
    - Show spinner during cart request
    - Disable add button while processing
    - _Requirements: 8.3_
  - [x] 17.5 Implement success/error handling
    - Update mini-cart on success
    - Show error message with retry option on failure
    - _Requirements: 8.4, 8.5_

- [x] 18. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Phase 8: User Interface

- [x] 19. Implement UIController component
  - [x] 19.1 Create UIController TypeScript class
    - Initialize event listeners for scene interactions
    - Manage UI state (selected object, dragging, etc.)
    - _Requirements: 9.1_
  - [x] 19.2 Implement context menu
    - Show menu on object click with Delete, Duplicate, Info options
    - Position menu near clicked object
    - _Requirements: 9.1_
  - [x] 19.3 Implement drag-and-drop from catalog
    - Create draggable instance on catalog item selection
    - Attach instance to cursor during drag
    - _Requirements: 9.2_
  - [x] 19.4 Implement snap point highlighting
    - Show visual indicator on valid snap points during hover
    - _Requirements: 9.3_
  - [x] 19.5 Implement drag completion flow
    - Trigger snapping algorithm on drop
    - Update price calculator
    - _Requirements: 9.4_
  - [x] 19.6 Implement empty state message
    - Show instructions when scene has no pegboards
    - _Requirements: 9.5_

- [x] 20. Implement Shortcode_Handler component
  - [x] 20.1 Register [pegboard_configurator] shortcode
    - Render configurator container div
    - _Requirements: 10.1_
  - [x] 20.2 Implement script enqueuing
    - Enqueue Three.js, GLTFLoader, and main configurator script
    - Only load on pages with shortcode
    - _Requirements: 10.2, 10.5_
  - [x] 20.3 Implement attribute handling
    - Parse shortcode attributes (default_panel, theme, etc.)
    - Pass to JavaScript via wp_localize_script
    - _Requirements: 10.3_
  - [x] 20.4 Write property test for attribute propagation
    - **Property 14: Shortcode Attribute Propagation**
    - **Validates: Requirements 10.3_
  - [x] 20.5 Inject initial product data
    - Use wp_localize_script to pass product IDs, prices, names, GLB URLs
    - _Requirements: 10.4_

- [x] 21. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Phase 9: Model Validation and Documentation

- [ ] 22. Implement Model_Validator component
  - [ ] 22.1 Create Model_Validator PHP class
    - Implement validate_glb() method for file integrity
    - Check GLB magic bytes and format version
    - _Requirements: 15.1_
  - [ ] 22.2 Implement pegboard validation
    - Check for required metadata (panel_width_cm, panel_height_cm)
    - Warn on missing optional fields
    - _Requirements: 15.2_
  - [ ] 22.3 Implement accessory validation
    - Verify at least one peg_* Empty exists
    - Check snap_mode is defined
    - _Requirements: 15.3_
  - [ ] 22.4 Implement validation UI feedback
    - Display specific error messages for validation failures
    - Show green checkmark on success
    - _Requirements: 15.4, 15.5_

- [ ] 23. Implement Documentation pages
  - [ ] 23.1 Create documentation admin page
    - Add "Documentation" submenu under Pegboard 3D
    - _Requirements: 16.1_
  - [ ] 23.2 Write pegboard modeling specifications
    - Document dimensions, pivot placement, required metadata
    - Explain grid calculation formulas
    - _Requirements: 16.1, 16.2_
  - [ ] 23.3 Write accessory modeling specifications
    - Document peg Empty naming convention
    - Explain pivot placement and orientation
    - _Requirements: 16.3_
  - [ ] 23.4 Create metadata reference table
    - List all userData properties with types and defaults
    - _Requirements: 16.4_
  - [ ] 23.5 Link validation errors to documentation
    - Add contextual help links from error messages
    - _Requirements: 16.5_

## Phase 10: Final Integration and Polish

- [ ] 24. Integration and optimization
  - [ ] 24.1 Implement InstancedMesh for performance
    - Use InstancedMesh when scene has multiple identical accessories
    - Maintain 60 FPS with 50+ accessories
    - _Requirements: 3.4_
  - [ ] 24.2 Implement scene state persistence
    - Serialize scene state to localStorage
    - Restore state on page refresh
    - _Requirements: Error Handling_
  - [ ] 24.3 Implement error recovery strategies
    - Exponential backoff for model loading
    - Queue failed cart operations for retry
    - _Requirements: Error Handling_
  - [ ] 24.4 Final code review and cleanup
    - Ensure PSR compliance for PHP
    - Ensure TypeScript strict mode compliance
    - Add code comments and documentation
    - _Requirements: All_

- [ ] 25. Final Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.
