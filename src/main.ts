import { SceneManager } from './SceneManager';
import { ModelLoader } from './ModelLoader';
import { SnappingSystem } from './SnappingSystem';
import { PlacementCalculator } from './PlacementCalculator';
import { MultiPanelManager } from './MultiPanelManager';
import { PriceCalculator } from './PriceCalculator';
import { CartIntegration } from './CartIntegration';
import { UIController } from './UIController';

console.log('3D Pegboard Composer loaded');

// Initialize configurator when DOM is ready
const initApp = () => {
    // Check if config is available (injected by wp_localize_script)
    const config = (window as any).Pegboard3DConfig;

    if (config && document.getElementById('pegboard-3d-container')) {
        console.log('Initializing 3D Configurator with config:', config);

        try {
            const controller = new UIController('pegboard-3d-container', config);

            // Expose controller globally for debugging
            (window as any).PegboardController = controller;

            console.log('3D Configurator initialized successfully');
        } catch (error) {
            console.error('Failed to initialize 3D Configurator:', error);
        }
    } else {
        console.log('No configurator container found on this page');
    }
};

if (typeof window !== 'undefined') {
    if (document.readyState === 'loading') {
        window.addEventListener('DOMContentLoaded', initApp);
    } else {
        // DOM is already ready (modules are deferred by default, so this often happens)
        initApp();
    }
}

// Export for external access if needed
export {
    SceneManager,
    ModelLoader,
    SnappingSystem,
    PlacementCalculator,
    MultiPanelManager,
    PriceCalculator,
    CartIntegration,
    UIController
};
