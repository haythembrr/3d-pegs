# Requirements Document

## Introduction

Ce document définit les exigences pour le développement d'un plugin WordPress/WooCommerce nommé "3D Pegboard Composer". Ce plugin permet aux utilisateurs de configurer visuellement des pegboards en MDF de 5mm d'épaisseur, compatibles avec le standard IKEA SKÅDIS, dans un environnement 3D interactif. Le configurateur offre une expérience de personnalisation immersive avec synchronisation en temps réel des prix et intégration complète au panier WooCommerce.

Les modèles 3D (GLB) sont fournis par l'administrateur avec leurs métadonnées intégrées. Le système doit lire ces métadonnées et effectuer les calculs de placement/snapping appropriés.

## Glossary

- **Pegboard**: Panneau perforé en MDF de 5mm d'épaisseur servant de support mural pour accessoires
- **SKÅDIS**: Standard IKEA définissant la géométrie des fentes (5mm x 15mm) et leur espacement (grille 40mm en quinconce)
- **MDF**: Medium Density Fibreboard - panneau de fibres à densité moyenne
- **GLB/glTF**: Format de fichier 3D binaire optimisé pour le web (GL Transmission Format)
- **Three.js**: Bibliothèque JavaScript pour le rendu 3D WebGL dans le navigateur
- **Snapping**: Magnétisme automatique alignant les accessoires sur les points d'ancrage valides
- **Grille Quinconce**: Motif de perçage où deux grilles de 40mm sont décalées de 20mm sur X et Y
- **WooCommerce Store API**: API REST optimisée pour les interactions front-end avec le panier
- **PBR**: Physically Based Rendering - rendu basé sur les propriétés physiques des matériaux
- **Empty/Null**: Objet Blender sans géométrie servant de marqueur de position (peg points)
- **userData**: Attribut Three.js contenant les métadonnées importées depuis le fichier GLB
- **Peg Point**: Point d'ancrage d'un accessoire défini par un Empty dans le modèle 3D

## Requirements

### Requirement 1: Intégration Native aux Produits WooCommerce

**User Story:** En tant qu'administrateur du site, je veux configurer les données 3D directement sur la fiche produit WooCommerce, afin de centraliser la gestion des produits et de leurs modèles 3D au même endroit.

#### Acceptance Criteria

1. WHEN an administrator edits a WooCommerce product THEN the Product_3D_Integration SHALL display a meta box "Configuration 3D" in the product edit screen
2. WHEN an administrator selects "Pegboard" as 3D type THEN the Product_3D_Integration SHALL display fields for GLB file upload and read dimensions from model metadata
3. WHEN an administrator selects "Accessory" as 3D type THEN the Product_3D_Integration SHALL display fields for GLB file upload and read peg positions from model metadata
4. WHEN an administrator saves the product THEN the Product_3D_Integration SHALL store the GLB URL and extracted metadata in product meta using _pegboard_3d_ prefix
5. WHEN a product has 3D configuration THEN the Product_3D_Integration SHALL display a "3D Preview" button opening a modal with the rendered model

### Requirement 2: Interface d'Administration Parallèle

**User Story:** En tant qu'administrateur du site, je veux une interface dédiée pour gérer tous les assets 3D en parallèle, afin d'avoir une vue d'ensemble et de gérer efficacement le catalogue 3D.

#### Acceptance Criteria

1. WHEN an administrator accesses the WordPress admin panel THEN the Asset_Dashboard SHALL display a menu "Pegboard 3D" with sub-menus (Dashboard, Pegboards, Accessories)
2. WHEN an administrator views the Dashboard THEN the Asset_Dashboard SHALL display statistics (total pegboards, total accessories, products without 3D, products with errors)
3. WHEN an administrator views the Pegboards list THEN the Asset_Dashboard SHALL display a table with columns (Product Name, Dimensions, Slot Count, GLB Status, Preview)
4. WHEN an administrator views the Accessories list THEN the Asset_Dashboard SHALL display a table with columns (Product Name, Peg Count, Orientation, Load Capacity, GLB Status, Preview)
5. WHEN an administrator clicks "Bulk Edit" THEN the Asset_Dashboard SHALL allow batch updates of GLB files across multiple products

### Requirement 3: Rendu de la Scène 3D

**User Story:** En tant qu'utilisateur du site, je veux visualiser les pegboards et accessoires dans un environnement 3D réaliste, afin de prévisualiser ma configuration avant achat.

#### Acceptance Criteria

1. WHEN the configurator page loads THEN the 3D_Scene_Renderer SHALL initialize a WebGLRenderer with antialiasing and sRGB color space
2. WHEN the 3D scene is displayed THEN the 3D_Scene_Renderer SHALL render the pegboard with PBR materials having moderate roughness and zero metalness
3. WHEN the user interacts with the scene THEN the 3D_Scene_Renderer SHALL provide OrbitControls limited to prevent viewing behind the pegboard plane
4. WHEN the scene contains multiple identical accessories THEN the 3D_Scene_Renderer SHALL use InstancedMesh to maintain 60 FPS performance
5. WHEN the browser window resizes THEN the 3D_Scene_Renderer SHALL adapt the canvas dimensions to the parent container

### Requirement 4: Chargement et Parsing des Modèles GLB

**User Story:** En tant qu'utilisateur du site, je veux que les modèles 3D se chargent rapidement et que leurs métadonnées soient correctement interprétées, afin d'avoir une expérience fluide.

#### Acceptance Criteria

1. WHEN the configurator initializes THEN the Model_Loader SHALL load GLB files using GLTFLoader with optional DRACOLoader for compressed files
2. WHEN a pegboard model is loaded THEN the Model_Loader SHALL extract userData metadata (panel_width_cm, panel_height_cm, grid_spacing_mm, grid_offset_mm, border_margin_mm)
3. WHEN an accessory model is loaded THEN the Model_Loader SHALL extract peg Empty positions and userData (peg_count, snap_mode, orientation)
4. WHEN a model has been previously loaded THEN the Model_Loader SHALL retrieve the model from browser cache to avoid redundant downloads
5. WHEN parsing model metadata THEN the Model_Loader SHALL serialize the userData to JSON and deserialize the JSON back to userData without data loss

### Requirement 5: Système de Snapping SKÅDIS

**User Story:** En tant qu'utilisateur du site, je veux que les accessoires s'alignent automatiquement sur les fentes du pegboard en utilisant les peg points définis dans le modèle, afin de placer les éléments avec précision.

#### Acceptance Criteria

1. WHEN an accessory is dragged over a pegboard THEN the Snapping_System SHALL read the peg positions from the accessory model and calculate valid snap points on the pegboard grid
2. WHEN the snap point is calculated THEN the Snapping_System SHALL use the dual-grid algorithm (Grid A: x=n*40, y=m*40 and Grid B: x=n*40+20, y=m*40+20) based on pegboard metadata
3. WHEN an accessory has multiple pegs THEN the Snapping_System SHALL verify all peg points align with valid grid positions before allowing placement
4. WHEN an accessory is released outside any pegboard surface THEN the Snapping_System SHALL return the accessory to its previous valid position or remove the accessory from the scene
5. WHEN an accessory would overlap an existing accessory THEN the Snapping_System SHALL prevent placement and provide visual feedback

### Requirement 6: Gestion Multi-Panneaux

**User Story:** En tant qu'utilisateur du site, je veux assembler plusieurs pegboards côte à côte, afin de créer une surface de rangement plus grande et personnalisée.

#### Acceptance Criteria

1. WHEN a user adds a new pegboard THEN the Multi_Panel_Manager SHALL read panel dimensions from model metadata and position the panel adjacent to existing panels
2. WHEN panels are assembled THEN the Multi_Panel_Manager SHALL calculate grid continuity using border_margin_mm from each panel metadata
3. WHEN a user removes a pegboard THEN the Multi_Panel_Manager SHALL remove all accessories attached to that panel and recalculate the workspace bounds
4. WHEN the workspace configuration changes THEN the Multi_Panel_Manager SHALL update the internal data structure tracking all active panels and their grid offsets
5. WHEN accessories span multiple panels THEN the Multi_Panel_Manager SHALL verify peg points exist on valid grid positions across panel boundaries

### Requirement 7: Calcul du Prix en Temps Réel

**User Story:** En tant qu'utilisateur du site, je veux voir le prix total de ma configuration mis à jour instantanément, afin de contrôler mon budget pendant la personnalisation.

#### Acceptance Criteria

1. WHEN an accessory is added to the scene THEN the Price_Calculator SHALL retrieve the product price from WooCommerce data and update the total
2. WHEN an accessory is removed from the scene THEN the Price_Calculator SHALL subtract the product price from the total and update the display
3. WHEN the scene contains multiple instances of the same product THEN the Price_Calculator SHALL multiply the unit price by the quantity
4. WHEN WooCommerce promotions or taxes apply THEN the Price_Calculator SHALL include the applicable adjustments in the total calculation
5. WHEN the price updates THEN the Price_Calculator SHALL debounce updates with a 100ms delay to prevent UI flickering

### Requirement 8: Intégration Panier WooCommerce

**User Story:** En tant qu'utilisateur du site, je veux ajouter ma configuration complète au panier WooCommerce en un clic, afin de finaliser mon achat facilement.

#### Acceptance Criteria

1. WHEN the user clicks "Add to Cart" THEN the Cart_Integration SHALL send a grouped POST request to /wc/store/v1/cart/add-item for all scene elements
2. WHEN products have variations (color, size) THEN the Cart_Integration SHALL include variation IDs in the cart request
3. WHEN the cart request is processing THEN the Cart_Integration SHALL display a loading spinner and disable the add button
4. WHEN the cart request succeeds THEN the Cart_Integration SHALL update the WooCommerce mini-cart and display a success confirmation
5. WHEN the cart request fails THEN the Cart_Integration SHALL display an error message and allow the user to retry

### Requirement 9: Interface Utilisateur du Configurateur

**User Story:** En tant qu'utilisateur du site, je veux une interface intuitive pour manipuler les objets 3D, afin de configurer mon pegboard sans formation préalable.

#### Acceptance Criteria

1. WHEN the user clicks on an object in the scene THEN the UI_Controller SHALL display a contextual menu with options (Delete, Duplicate, Info)
2. WHEN the user selects an accessory from the catalog THEN the UI_Controller SHALL create a draggable instance attached to the cursor
3. WHEN the user hovers over a valid snap point THEN the UI_Controller SHALL highlight the snap point with visual feedback
4. WHEN the user completes a drag operation THEN the UI_Controller SHALL trigger the snapping algorithm and update the price
5. WHEN the scene is empty THEN the UI_Controller SHALL display instructions guiding the user to add a pegboard first

### Requirement 10: Shortcode WordPress

**User Story:** En tant qu'administrateur du site, je veux intégrer le configurateur sur n'importe quelle page via un shortcode, afin de contrôler l'emplacement du configurateur dans le site.

#### Acceptance Criteria

1. WHEN a page contains the shortcode [pegboard_configurator] THEN the Shortcode_Handler SHALL render the configurator container div
2. WHEN the shortcode is processed THEN the Shortcode_Handler SHALL enqueue Three.js, GLTFLoader, and the main configurator script
3. WHEN the shortcode includes attributes THEN the Shortcode_Handler SHALL pass configuration options (default panel, theme) to the JavaScript
4. WHEN the page loads THEN the Shortcode_Handler SHALL use wp_localize_script to inject initial product data (IDs, prices, names, GLB URLs)
5. WHEN the shortcode is not present THEN the Shortcode_Handler SHALL not load any configurator scripts to optimize page performance

### Requirement 11: Sécurité et Validation

**User Story:** En tant qu'administrateur du site, je veux que le plugin respecte les standards de sécurité WordPress, afin de protéger le site contre les vulnérabilités.

#### Acceptance Criteria

1. WHEN an administrator submits a form in the admin panel THEN the Security_Manager SHALL verify the nonce using check_admin_referer
2. WHEN user input is saved to the database THEN the Security_Manager SHALL sanitize all input data using appropriate WordPress functions
3. WHEN the plugin exposes REST endpoints THEN the Security_Manager SHALL validate user capabilities before processing requests
4. WHEN file uploads are processed THEN the Security_Manager SHALL verify file types and reject non-GLB files
5. WHEN outputting data to the page THEN the Security_Manager SHALL escape all output using esc_html, esc_attr, or esc_url as appropriate

### Requirement 12: Lecture des Métadonnées Pegboard

**User Story:** En tant que système, je veux lire correctement les métadonnées des modèles pegboard fournis, afin de calculer les positions de grille valides.

#### Acceptance Criteria

1. WHEN a pegboard GLB is loaded THEN the Metadata_Reader SHALL extract panel_width_cm and panel_height_cm from userData
2. WHEN grid parameters are read THEN the Metadata_Reader SHALL extract grid_spacing_mm (default 40) and grid_offset_mm (default 20) for dual-grid calculation
3. WHEN border margins are read THEN the Metadata_Reader SHALL extract border_margin_mm to calculate first slot position from panel edges
4. WHEN slot geometry is read THEN the Metadata_Reader SHALL extract slot_width_mm (5) and slot_height_mm (15) for collision detection
5. WHEN metadata is missing THEN the Metadata_Reader SHALL use SKÅDIS default values and log a warning

### Requirement 13: Lecture des Métadonnées Accessoires

**User Story:** En tant que système, je veux lire correctement les métadonnées des modèles accessoires fournis, afin de calculer leur placement sur les pegboards.

#### Acceptance Criteria

1. WHEN an accessory GLB is loaded THEN the Metadata_Reader SHALL find all Empty objects with names matching pattern "peg_*" and extract their local positions
2. WHEN peg positions are extracted THEN the Metadata_Reader SHALL convert Empty positions to relative coordinates from the accessory origin
3. WHEN snap_mode is read THEN the Metadata_Reader SHALL determine placement behavior (single_slot, dual_slot, or rail)
4. WHEN orientation is read THEN the Metadata_Reader SHALL extract the accessory facing direction (front, angled) for correct rotation on placement
5. WHEN load_capacity_g is read THEN the Metadata_Reader SHALL store the value for potential future weight limit validation

### Requirement 14: Calcul de Placement des Accessoires

**User Story:** En tant que système, je veux calculer précisément où un accessoire peut être placé en fonction de ses peg points et de la grille du pegboard.

#### Acceptance Criteria

1. WHEN an accessory is dragged THEN the Placement_Calculator SHALL compute all peg point world positions based on cursor position
2. WHEN validating placement THEN the Placement_Calculator SHALL check each peg point against the pegboard dual-grid using formulas (Grid A: n*40, m*40) and (Grid B: n*40+20, m*40+20)
3. WHEN all peg points align with valid grid positions THEN the Placement_Calculator SHALL return the snapped position for the accessory origin
4. WHEN peg points fall outside pegboard bounds THEN the Placement_Calculator SHALL reject the placement and indicate invalid position
5. WHEN calculating snap distance THEN the Placement_Calculator SHALL use Euclidean distance to find the nearest valid configuration

### Requirement 15: Validation des Modèles 3D

**User Story:** En tant qu'administrateur du site, je veux que le système valide automatiquement les modèles 3D uploadés, afin de détecter les erreurs de métadonnées avant utilisation.

#### Acceptance Criteria

1. WHEN a GLB file is uploaded THEN the Model_Validator SHALL verify file integrity, format version, and parse all meshes and metadata
2. WHEN validating a pegboard model THEN the Model_Validator SHALL check for required metadata (panel_width_cm, panel_height_cm) and warn if optional fields are missing
3. WHEN validating an accessory model THEN the Model_Validator SHALL verify at least one peg_* Empty object exists and snap_mode is defined
4. WHEN validation fails THEN the Model_Validator SHALL display specific error messages indicating which metadata is missing or invalid
5. WHEN validation succeeds THEN the Model_Validator SHALL display a green checkmark and enable the "Save" button

### Requirement 16: Documentation des Spécifications de Modélisation

**User Story:** En tant qu'administrateur du site, je veux accéder à une documentation claire des spécifications de modélisation, afin de créer des modèles 3D compatibles.

#### Acceptance Criteria

1. WHEN an administrator accesses the Documentation page THEN the Doc_Display SHALL show the complete specification for pegboard models (dimensions, pivot, metadata)
2. WHEN viewing pegboard specs THEN the Doc_Display SHALL explain grid calculation formulas and border margin requirements
3. WHEN viewing accessory specs THEN the Doc_Display SHALL explain peg Empty naming convention, pivot placement, and required metadata
4. WHEN viewing metadata reference THEN the Doc_Display SHALL list all userData properties with their types, defaults, and descriptions
5. WHEN a validation error occurs THEN the Doc_Display SHALL link to the relevant documentation section
