# 3D Pegboard Composer

A WordPress plugin that provides a 3D configurator for SKÅDIS pegboards with WooCommerce integration.

## Installation

### Prerequisites
- WordPress installation
- WooCommerce plugin installed and active
- PHP 7.4 or higher
- Composer
- Node.js & NPM (for development)

### Setup
1. Clone or download the repository into your `wp-content/plugins/` directory.
2. Open a terminal in the plugin directory:
   ```bash
   cd wp-content/plugins/3d-pegs
   ```
3. Install PHP dependencies:
   ```bash
   composer install
   ```
4. Install JavaScript dependencies and build assets:
   ```bash
   npm install
   npm run build
   ```
5. Activate the plugin in the WordPress admin dashboard.

## Usage

### Adding the Configurator
Add the shortcode to any page or post:

```
[pegboard_configurator]
```

### Shortcode Attributes
You can customize the configurator using the following attributes:

- `height`: Set the height of the configurator container (default: `600px`).
- `theme`: Set the color theme (`light` or `dark`, default: `light`).
- `default_panel`: (Optional) ID of the default pegboard panel product to load.

**Example:**
```
[pegboard_configurator height="800px" theme="dark"]
```

### Product Setup
1. Create a WooCommerce product.
2. In the "Product Data" section, look for the "3D Pegboard" tab (ensure you have registered the meta boxes if not automatically done).
3. Set the product type to either "Pegboard" or "Accessory".
4. Upload the corresponding GLB/GLTF model.

## Development

- `npm run dev`: Start the development server for hot-reloading (requires manual script enqueueing adjustment or proxy).
- `npm run build`: Build the production assets for the plugin.

## Troubleshooting

- **Shortcode not rendering:** Ensure `composer install` has been run. Check the browser console for JavaScript errors.
- **Missing styles:** Verify that `npm run build` has been run and the `assets` folder contains the generated files.
