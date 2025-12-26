# 3D Pegboard Composer - Guide de Déploiement

## Table des Matières

1. [Vue d'ensemble](#vue-densemble)
2. [Prérequis système](#prérequis-système)
3. [Installation](#installation)
4. [Configuration](#configuration)
5. [Configuration des produits WooCommerce](#configuration-des-produits-woocommerce)
6. [Préparation des modèles 3D](#préparation-des-modèles-3d)
7. [Utilisation](#utilisation)
8. [Dépannage](#dépannage)
9. [Checklist de déploiement rapide](#checklist-de-déploiement-rapide)

---

## Vue d'ensemble

Le **3D Pegboard Composer** est un plugin WordPress/WooCommerce qui permet aux utilisateurs de configurer des pegboards SKÅDIS en 3D. Les clients peuvent :

- Ajouter des panneaux pegboard à une scène 3D
- Placer des accessoires sur les panneaux avec un système de snapping intelligent
- Choisir des variantes de couleur pour chaque élément
- Voir le prix total en temps réel
- Ajouter la configuration complète au panier WooCommerce

### Fonctionnalités principales

- Rendu 3D interactif avec Three.js
- Système de grille SKÅDIS avec double grille (A/B)
- Snapping automatique des accessoires
- Gestion des variantes de couleur liées aux variations WooCommerce
- Calcul de prix dynamique
- Interface responsive (desktop et mobile)
- Thème clair/sombre

---

## Prérequis système

### Serveur

| Composant | Version minimale | Recommandée |
|-----------|------------------|-------------|
| PHP | 7.4 | 8.0+ |
| WordPress | 5.8 | 6.0+ |
| WooCommerce | 6.0 | 8.0+ |
| MySQL/MariaDB | 5.7 / 10.3 | 8.0 / 10.6 |

### Extensions PHP requises

- `json`
- `mbstring`
- `curl`

### Navigateurs supportés

| Navigateur | Version minimale |
|------------|------------------|
| Chrome | 80+ |
| Firefox | 75+ |
| Safari | 13+ |
| Edge | 80+ |

> **Note**: WebGL doit être activé dans le navigateur. Le plugin affiche un message d'erreur approprié si WebGL n'est pas disponible.

### Espace disque

- Plugin : ~5 MB
- Modèles 3D GLB : Variable (typiquement 100KB - 2MB par modèle)

---

## Installation

### Méthode 1 : Installation manuelle (recommandée)

1. **Téléchargez** le dossier du plugin

2. **Copiez** le dossier `3d-pegs` dans le répertoire des plugins WordPress :
   ```
   wp-content/plugins/3d-pegs/
   ```

3. **Installez les dépendances PHP** (si non incluses) :
   ```bash
   cd wp-content/plugins/3d-pegs
   composer install --no-dev
   ```

4. **Vérifiez que les assets sont compilés** :
   - Le fichier `assets/bundle/pegboard-3d.es.js` doit exister
   - Le fichier `assets/css/configurator.css` doit exister
   
   Si ces fichiers sont absents, compilez-les :
   ```bash
   npm install
   npm run build
   ```

5. **Activez le plugin** dans WordPress :
   - Allez dans `Extensions > Extensions installées`
   - Trouvez "3D Pegboard Composer"
   - Cliquez sur "Activer"

### Méthode 2 : Installation via ZIP

1. Créez une archive ZIP du dossier `3d-pegs` (avec les dépendances installées)
2. Dans WordPress, allez dans `Extensions > Ajouter`
3. Cliquez sur "Téléverser une extension"
4. Sélectionnez le fichier ZIP et installez

### Vérification de l'installation

Après activation, vérifiez que :

- [ ] Le menu "Pegboard 3D" apparaît dans l'administration WordPress
- [ ] Aucune erreur PHP n'apparaît dans les logs
- [ ] L'onglet "Configuration 3D" apparaît dans l'édition des produits WooCommerce

---

## Configuration

### Configuration globale

Le plugin utilise les paramètres WooCommerce pour :

- **Devise** : Symbole, position, séparateurs
- **Prix** : Nombre de décimales
- **Panier** : URL de la page panier

Aucune configuration supplémentaire n'est requise pour ces éléments.

### Paramètres du shortcode

Le configurateur s'affiche via le shortcode `[pegboard_configurator]` avec les attributs suivants :

| Attribut | Description | Valeur par défaut |
|----------|-------------|-------------------|
| `height` | Hauteur du conteneur | `600px` |
| `theme` | Thème de couleur (`light` ou `dark`) | `light` |
| `default_panel` | ID du produit pegboard par défaut | (vide) |

**Exemples :**

```
[pegboard_configurator]

[pegboard_configurator height="800px" theme="dark"]

[pegboard_configurator default_panel="123"]
```

---

## Configuration des produits WooCommerce

### Créer un produit Pegboard

1. **Créez un nouveau produit** WooCommerce (`Produits > Ajouter`)

2. **Configurez les informations de base** :
   - Nom du produit (ex: "Panneau SKÅDIS 36x56cm")
   - Prix
   - Image du produit

3. **Configurez la section "Configuration 3D"** :
   - **Type 3D** : Sélectionnez "Pegboard"
   - **URL fichier GLB** : URL complète vers le modèle 3D
   - **Largeur (cm)** : Largeur du panneau (ex: 36)
   - **Hauteur (cm)** : Hauteur du panneau (ex: 56)

4. **Variantes de couleur** (optionnel) :
   - Entrez les codes hex séparés par des virgules : `#ffffff, #000000, #d4a574`
   - Si le produit est variable, associez chaque couleur à une variation

5. **Publiez** le produit

### Créer un produit Accessoire

1. **Créez un nouveau produit** WooCommerce

2. **Configurez les informations de base** :
   - Nom (ex: "Crochet simple SKÅDIS")
   - Prix
   - Image

3. **Configurez la section "Configuration 3D"** :
   - **Type 3D** : Sélectionnez "Accessoire"
   - **URL fichier GLB** : URL vers le modèle 3D
   - **Mode Snapping** :
     - `single_slot` : Un seul point d'ancrage
     - `dual_slot` : Deux points espacés de 40mm
     - `rail` : Plusieurs points d'ancrage
   - **Points d'ancrage** : Nombre de pegs (backup si non défini dans le GLB)

4. **Variantes de couleur** (optionnel) :
   - Même procédure que pour les pegboards

5. **Publiez** le produit

### Gestion des variations de couleur

Pour les produits avec variations de couleur :

1. Créez un **produit variable** dans WooCommerce
2. Ajoutez un attribut "Couleur" avec les valeurs souhaitées
3. Créez les variations correspondantes avec leurs prix
4. Dans "Configuration 3D", entrez les codes hex des couleurs
5. Associez chaque couleur hex à la variation WooCommerce correspondante

Le système utilisera automatiquement le bon ID de variation lors de l'ajout au panier.

---

## Préparation des modèles 3D

### Format requis

- **Format** : GLB (glTF Binary)
- **Unités** : Millimètres (auto-converti en mètres)
- **Orientation** : Face vers +Y, haut vers +Z dans Blender

### Structure d'un modèle Pegboard

Le modèle doit inclure ces Custom Properties sur l'objet racine :

```
panel_width_cm: 36
panel_height_cm: 56
grid_spacing_mm: 40
grid_offset_mm: 20
border_margin_mm: 18
```

### Structure d'un modèle Accessoire

Le modèle doit inclure :

1. **Custom Properties** sur l'objet racine :
   ```
   snap_mode: "single_slot" | "dual_slot" | "rail"
   orientation: "front"
   ```

2. **Empty objects** nommés `peg_*` pour les points d'ancrage :
   - `peg_1` : Premier point d'ancrage
   - `peg_2` : Deuxième point (pour dual_slot)
   - Position : Exactement où le crochet entre dans le panneau

### Export depuis Blender

1. Sélectionnez l'objet racine
2. `File > Export > glTF 2.0 (.glb/.gltf)`
3. Paramètres :
   - Format : glTF Binary (.glb)
   - ☑️ Custom Properties
   - ☑️ +Y Up

> **Documentation complète** : Voir `docs/3D-MODEL-SETUP-GUIDE.md` pour les instructions détaillées.

---

## Utilisation

### Ajouter le configurateur à une page

1. Créez ou éditez une page WordPress
2. Ajoutez le shortcode :
   ```
   [pegboard_configurator]
   ```
3. Publiez la page

### Interface utilisateur

L'interface comprend :

- **Zone 3D** : Affichage et manipulation de la scène
- **Contrôles de caméra** : Vues prédéfinies (Face, Côté, Haut)
- **Barre latérale** : Catalogue de produits, prix total, bouton panier
- **Contrôles d'action** : Thème, suppression, aide, zoom

### Interactions

| Action | Desktop | Mobile |
|--------|---------|--------|
| Rotation caméra | Clic gauche + glisser | Un doigt + glisser |
| Zoom | Molette | Pincer |
| Sélection | Clic sur objet | Tap sur objet |
| Déplacement | Glisser objet sélectionné | Glisser objet sélectionné |
| Suppression | Bouton ✕ ou touche Suppr | Bouton ✕ |

---

## Dépannage

### Le configurateur ne s'affiche pas

**Symptômes** : Page blanche ou erreur JavaScript

**Solutions** :
1. Vérifiez que les fichiers bundle existent :
   - `assets/bundle/pegboard-3d.es.js`
   - `assets/css/configurator.css`
2. Vérifiez la console du navigateur pour les erreurs
3. Assurez-vous que `composer install` a été exécuté
4. Vérifiez les conflits avec d'autres plugins JavaScript

### Message "Navigateur non compatible"

**Cause** : WebGL n'est pas disponible

**Solutions** :
1. Mettez à jour le navigateur
2. Activez l'accélération matérielle dans les paramètres du navigateur
3. Vérifiez les pilotes de la carte graphique

### Les modèles 3D ne se chargent pas

**Symptômes** : Message "Impossible de charger le modèle 3D"

**Solutions** :
1. Vérifiez que l'URL du fichier GLB est correcte et accessible
2. Vérifiez les permissions du fichier (lecture publique)
3. Vérifiez que le fichier GLB est valide (testez dans un viewer en ligne)
4. Vérifiez les erreurs CORS si le fichier est sur un autre domaine

### Les accessoires ne se placent pas correctement

**Causes possibles** :
- Empty `peg_*` mal positionnés dans le modèle
- Espacement incorrect pour dual_slot (doit être exactement 40mm)
- Custom Properties manquantes

**Solutions** :
1. Vérifiez la structure du modèle GLB
2. Consultez `docs/3D-MODEL-SETUP-GUIDE.md`
3. Testez avec un modèle de référence fonctionnel

### Erreur lors de l'ajout au panier

**Symptômes** : Message "Erreur lors de l'ajout au panier"

**Solutions** :
1. Vérifiez que WooCommerce est actif et configuré
2. Vérifiez que les produits existent et sont publiés
3. Vérifiez les logs WooCommerce pour plus de détails
4. Testez l'ajout au panier standard (hors configurateur)

### Problèmes de performance

**Symptômes** : Lenteur, saccades

**Solutions** :
1. Réduisez la complexité des modèles 3D (moins de polygones)
2. Utilisez des textures compressées
3. Limitez le nombre d'objets dans la scène
4. Vérifiez les ressources système (RAM, GPU)

### Logs et débogage

Pour activer le mode debug WordPress :

```php
// wp-config.php
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Les logs seront disponibles dans `wp-content/debug.log`.

---

## Checklist de déploiement rapide

### Pré-déploiement

- [ ] WordPress 5.8+ installé
- [ ] WooCommerce 6.0+ installé et configuré
- [ ] PHP 7.4+ avec extensions requises
- [ ] Accès FTP/SSH au serveur

### Installation

- [ ] Dossier plugin copié dans `wp-content/plugins/`
- [ ] `composer install --no-dev` exécuté
- [ ] Assets compilés présents (`assets/bundle/`, `assets/css/`)
- [ ] Plugin activé dans WordPress

### Configuration produits

- [ ] Au moins un produit Pegboard créé avec :
  - [ ] Type 3D = "Pegboard"
  - [ ] URL GLB valide
  - [ ] Dimensions configurées
- [ ] Au moins un produit Accessoire créé avec :
  - [ ] Type 3D = "Accessoire"
  - [ ] URL GLB valide
  - [ ] Mode snapping configuré

### Test fonctionnel

- [ ] Page avec shortcode `[pegboard_configurator]` créée
- [ ] Configurateur s'affiche correctement
- [ ] Modèles 3D se chargent
- [ ] Ajout de panneau fonctionne
- [ ] Placement d'accessoires fonctionne
- [ ] Changement de couleur fonctionne
- [ ] Prix se met à jour
- [ ] Ajout au panier fonctionne
- [ ] Redirection vers panier fonctionne

### Post-déploiement

- [ ] Test sur différents navigateurs (Chrome, Firefox, Safari, Edge)
- [ ] Test sur mobile
- [ ] Vérification des performances
- [ ] Sauvegarde de la configuration

---

## Support

Pour toute question ou problème :

1. Consultez d'abord ce guide et la documentation des modèles 3D
2. Vérifiez les logs WordPress et la console du navigateur
3. Contactez le support technique avec :
   - Version WordPress/WooCommerce/PHP
   - Description du problème
   - Messages d'erreur (logs, console)
   - Étapes pour reproduire le problème
