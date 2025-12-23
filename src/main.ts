import { SceneManager } from './SceneManager';
import { ModelLoader } from './ModelLoader';
import { SnappingSystem } from './SnappingSystem';
import { PlacementCalculator } from './PlacementCalculator';
import { MultiPanelManager } from './MultiPanelManager';
import { PriceCalculator } from './PriceCalculator';
import { CartIntegration } from './CartIntegration';
import { UIController } from './UIController';

// Initialize configurator when DOM is ready
const initApp = () => {
    const config = (window as any).Pegboard3DConfig;

    if (config && document.getElementById('pegboard-3d-container')) {
        try {
            new UIController('pegboard-3d-container', config);
        } catch (error) {
            console.error('Failed to initialize 3D Configurator:', error);
        }
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
