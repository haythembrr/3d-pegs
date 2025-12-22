# Guide Complet de Configuration des Modèles 3D GLB pour Blender

Ce guide explique comment préparer vos modèles 3D dans Blender pour qu'ils soient correctement interprétés par le configurateur 3D WooCommerce.

---

## Table des Matières

1. [Système de Coordonnées et Orientation](#système-de-coordonnées-et-orientation)
2. [Mise à l'Échelle Automatique](#mise-à-léchelle-automatique)
3. [Configuration des Pegboards (Panneaux)](#configuration-des-pegboards-panneaux)
4. [Configuration des Accessoires](#configuration-des-accessoires)
5. [Système de Grille SKÅDIS](#système-de-grille-skådis)
6. [Export GLB depuis Blender](#export-glb-depuis-blender)
7. [Prompts LLM pour Blender MCP](#prompts-llm-pour-blender-mcp)

---

## Système de Coordonnées et Orientation

### Rotation Appliquée au Chargement

**IMPORTANT**: Tous les modèles sont automatiquement pivotés de **-90° autour de l'axe X** lors du chargement.

Cela signifie:
- Dans Blender: modélisez votre panneau **debout** (face vers +Y, haut vers +Z)
- Après chargement: le panneau sera **vertical** face à la caméra

### Système de Coordonnées Final (Après Rotation)

```
        +Y (haut)
         |
         |
         +------ +X (droite)
        /
       /
      +Z (vers la caméra/utilisateur)
```

- **Origine du panneau**: Coin SUPÉRIEUR-GAUCHE
- **Extension du panneau**: vers la DROITE (+X) et vers le BAS (-Y)
- **Surface du panneau**: face vers +Z (vers l'utilisateur)

---

## Alignement des Accessoires sur les Axes X, Y, Z

### Comprendre le Positionnement des Accessoires

Quand un accessoire est placé sur un panneau, le système calcule sa position sur les trois axes:

#### Axe X (Horizontal - Gauche/Droite)
```
Position X = position_panneau.x + position_grille_locale.x
```
- La grille locale commence à `border_margin_mm` (18mm) du bord gauche
- Les positions sont espacées de `grid_spacing_mm` (40mm)
- Grille A: 18mm, 58mm, 98mm, 138mm, ...
- Grille B: 38mm, 78mm, 118mm, 158mm, ... (décalée de 20mm)

#### Axe Y (Vertical - Haut/Bas)
```
Position Y = position_panneau.y - position_grille_locale.y
```
**ATTENTION**: Le Y est INVERSÉ! Le panneau s'étend vers le BAS (Y négatif) depuis son origine.
- L'origine du panneau est en HAUT-GAUCHE
- Les positions de grille augmentent vers le BAS
- Position monde Y = origine panneau Y - offset local Y

#### Axe Z (Profondeur - Avant/Arrière)
```
Position Z = surface_panneau.z + 3mm
```
- Les accessoires sont placés **3mm devant** la surface du panneau
- La surface du panneau est calculée dynamiquement selon son épaisseur
- Cela garantit que l'accessoire ne s'enfonce pas dans le panneau

### Calcul Détaillé de la Position Z

Le système calcule la position Z de surface du panneau ainsi:

```typescript
// 1. Obtenir la bounding box du panneau
const box = new THREE.Box3().setFromObject(panel.object);
const size = box.getSize(new THREE.Vector3());

// 2. Après rotation -90° sur X, l'épaisseur est dans la direction Z
// La surface est à: position.z + (épaisseur / 2)
const surfaceZ = panel.position.z + (size.z / 2);

// 3. L'accessoire est placé 3mm devant la surface
const accessoryZ = surfaceZ + 0.003; // 3mm = 0.003m
```

### Positionnement des Empty `peg_*` dans Blender

Pour un alignement parfait, les Empty doivent être positionnés **exactement** où les crochets touchent la surface du panneau.

#### Position Z des Empty (CRITIQUE)

```
Dans Blender (avant export):
- L'Empty peg_* doit être à Z = 0 (ou au niveau de la surface arrière de l'accessoire)
- C'est le point où le crochet "entre" dans le panneau

Après chargement:
- Le système place l'accessoire à surfaceZ + 3mm
- L'Empty définit le point d'ancrage, pas la position finale
```

#### Exemple Concret - Crochet Simple

```
Vue de côté dans Blender (avant rotation):

     +Z (haut)
      |
      |   [Corps du crochet]
      |        |
      |   ●────┘  ← peg_1 à (0, 0, 0)
      |   
      +────────── +Y (vers l'utilisateur)
     /
    /
   +X

Le peg_1 est à l'arrière du crochet, là où il touche le panneau.
```

#### Exemple Concret - Étagère Double Slot

```
Vue de dessus dans Blender:

        +Y (vers l'utilisateur)
         |
    ┌────┼────┐
    │    │    │  ← Corps de l'étagère
    │    │    │
    ●────┼────●  ← peg_1 (0,0,0) et peg_2 (40mm,0,0)
    │    │    │
    └────┼────┘
         |
         +──────── +X

Les deux pegs sont alignés sur Y=0 et Z=0, espacés de 40mm sur X.
```

### Règles d'Alignement pour les Empty

| Axe | Règle | Exemple |
|-----|-------|---------|
| X | Espacement = multiple de 40mm pour dual_slot | peg_1: X=0, peg_2: X=40mm |
| Y | Tous les pegs au même Y pour accessoires horizontaux | peg_1.Y = peg_2.Y = 0 |
| Z | Tous les pegs à Z=0 (surface arrière) | peg_1.Z = peg_2.Z = 0 |

### Vérification de l'Alignement

Avant d'exporter, vérifiez dans Blender:

1. **Alignement X**: 
   - Sélectionnez tous les Empty `peg_*`
   - Vérifiez que la différence en X est un multiple de 40mm (0.04m)

2. **Alignement Y**:
   - Pour un accessoire horizontal, tous les pegs doivent avoir le même Y
   - Pour un accessoire vertical, la différence en Y doit être un multiple de 40mm

3. **Alignement Z**:
   - Tous les pegs doivent être au même Z (généralement 0)
   - Le Z définit le plan de contact avec le panneau

---

## Mise à l'Échelle Automatique

Le système détecte automatiquement l'unité de mesure:

| Dimension Max | Unité Supposée | Action |
|---------------|----------------|--------|
| > 10 unités   | Millimètres    | Échelle × 0.001 |
| ≤ 10 unités   | Mètres         | Aucune |

### Recommandation

**Modélisez en millimètres** dans Blender. Un panneau de 360mm × 560mm sera automatiquement converti en 0.36m × 0.56m.

---

## Configuration des Pegboards (Panneaux)

### Propriétés Custom Requises (userData)

Ces propriétés doivent être ajoutées à l'objet racine du modèle dans Blender via les **Custom Properties**.

| Propriété | Type | Description | Valeur par Défaut |
|-----------|------|-------------|-------------------|
| `panel_width_cm` | Float | Largeur du panneau en centimètres | 36 |
| `panel_height_cm` | Float | Hauteur du panneau en centimètres | 56 |
| `grid_spacing_mm` | Float | Espacement de la grille en mm | 40 |
| `grid_offset_mm` | Float | Décalage de la grille B en mm | 20 |
| `border_margin_mm` | Float | Marge depuis les bords en mm | 18 |
| `slot_width_mm` | Float | Largeur des fentes en mm | 5 |
| `slot_height_mm` | Float | Hauteur des fentes en mm | 15 |

### Valeurs Standard SKÅDIS

Pour un panneau IKEA SKÅDIS standard:
- `panel_width_cm`: 36 (petit) ou 56 (grand)
- `panel_height_cm`: 56
- `grid_spacing_mm`: 40
- `grid_offset_mm`: 20
- `border_margin_mm`: 18
- `slot_width_mm`: 5
- `slot_height_mm`: 15

### Structure du Modèle Pegboard

```
Pegboard (Object3D - racine)
├── Custom Properties:
│   ├── panel_width_cm: 36
│   ├── panel_height_cm: 56
│   ├── grid_spacing_mm: 40
│   ├── grid_offset_mm: 20
│   ├── border_margin_mm: 18
│   ├── slot_width_mm: 5
│   └── slot_height_mm: 15
└── Mesh (géométrie du panneau)
```

### Orientation dans Blender (Avant Export)

```
Dans Blender (avant rotation):
    +Z (haut du panneau)
     |
     |  [FACE DU PANNEAU]
     |
     +------ +X (droite)
    /
   /
  +Y (vers l'utilisateur - face du panneau)
```

Le panneau doit être:
- **Debout** dans Blender
- **Face vers +Y** (l'utilisateur regardera cette face)
- **Origine au coin supérieur-gauche** de la face visible

---

## Configuration des Accessoires

### Propriétés Custom (userData)

| Propriété | Type | Valeurs Possibles | Défaut | Description |
|-----------|------|-------------------|--------|-------------|
| `snap_mode` | String | `single_slot`, `dual_slot`, `rail` | `single_slot` | Mode d'accrochage |
| `orientation` | String | `front`, `angled` | `front` | Orientation de l'accessoire |
| `load_capacity_g` | Float | Nombre positif | 500 | Capacité de charge en grammes |
| `peg_count` | Integer | Nombre positif | 1 | Nombre de points d'ancrage (backup) |

### Points d'Ancrage (Peg Empty Objects)

**CRITIQUE**: Les accessoires DOIVENT contenir des objets **Empty** nommés `peg_*` pour définir les points d'accrochage.

#### Nomenclature des Empty Objects

```
peg_1      - Premier point d'ancrage
peg_2      - Deuxième point d'ancrage
peg_left   - Point gauche
peg_right  - Point droit
peg_top    - Point supérieur
peg_bottom - Point inférieur
```

Tout nom commençant par `peg_` sera reconnu.

#### Positionnement des Empty Objects

Les Empty doivent être positionnés **exactement** où les crochets/pegs de l'accessoire s'insèrent dans les trous du panneau.

```
Accessoire (Object3D - racine)
├── Custom Properties:
│   ├── snap_mode: "dual_slot"
│   ├── orientation: "front"
│   └── load_capacity_g: 1000
├── peg_1 (Empty - Object3D sans géométrie)
│   └── Position: (0, 0, 0) - point d'ancrage principal
├── peg_2 (Empty - Object3D sans géométrie)
│   └── Position: (0.04, 0, 0) - 40mm à droite (espacement grille)
└── Mesh (géométrie de l'accessoire)
```

#### Positionnement Précis des Empty sur X, Y, Z

##### Axe X (Horizontal)
- **Single slot**: Un seul peg, X peut être à 0
- **Dual slot**: Deux pegs espacés de **exactement 40mm** (0.04 unités si en mètres, 40 si en mm)
- **Rail**: Pegs espacés de multiples de 40mm

```
Exemple dual_slot:
peg_1.x = 0
peg_2.x = 40mm (ou 0.04m)
Différence = 40mm ✓
```

##### Axe Y (Profondeur dans Blender)
- Tous les pegs d'un accessoire horizontal doivent avoir le **même Y**
- Pour un accessoire vertical (rare), espacer de 40mm sur Y

```
Exemple accessoire horizontal:
peg_1.y = 0
peg_2.y = 0  ← Même Y pour alignement horizontal
```

##### Axe Z (Hauteur dans Blender)
- Les pegs doivent être à **Z = 0** ou au niveau de la surface arrière de l'accessoire
- C'est le point de contact avec le panneau
- Le système ajoutera automatiquement 3mm de décalage lors du placement

```
Exemple:
peg_1.z = 0  ← Surface arrière (contact panneau)
peg_2.z = 0  ← Même Z pour tous les pegs
```

#### Diagramme de Positionnement des Empty

```
VUE DE FACE (dans Blender, avant rotation):

         +Z (haut)
          |
          |     ┌─────────────────┐
          |     │   ACCESSOIRE    │
          |     │                 │
          |     │  ●           ●  │  ← peg_1 et peg_2 à Z=0
          |     │  │           │  │
          |     └──┼───────────┼──┘
          |        │           │
          +────────┼───────────┼────── +X
         /         │           │
        /          └─── 40mm ──┘
       +Y (vers utilisateur)


VUE DE DESSUS (dans Blender):

         +Y (vers utilisateur)
          |
          |     ┌─────────────────┐
          |     │                 │
          |     │   ACCESSOIRE    │
          |     │                 │
          ●─────┼─────────────────┼─────● ← peg_1 et peg_2 sur même ligne Y
          |     │                 │
          |     └─────────────────┘
          |
          +────────────────────────────── +X
         /
        /
       +Z (haut)
```

#### Checklist Positionnement Empty

- [ ] Tous les Empty sont nommés `peg_*`
- [ ] Les Empty sont des enfants directs de l'objet racine
- [ ] Pour dual_slot: espacement X = exactement 40mm
- [ ] Tous les pegs ont le même Y (accessoire horizontal)
- [ ] Tous les pegs ont le même Z (généralement 0)
- [ ] Les Empty n'ont PAS de géométrie (type Object3D pur)

### Modes de Snapping

#### `single_slot` (Fente Simple)
- L'accessoire utilise **une seule fente** du panneau
- Un seul Empty `peg_1` suffit
- Peut se placer sur n'importe quel point de la grille A ou B

#### `dual_slot` (Double Fente)
- L'accessoire utilise **deux fentes** alignées horizontalement
- Nécessite deux Empty espacés de **40mm** (espacement grille)
- Les deux points doivent être sur la **même grille** (A ou B)

#### `rail` (Rail)
- Pour les accessoires de type rail/barre
- Peut avoir plusieurs points d'ancrage
- Espacement flexible selon le design

### Détection Automatique du Type

Le système détermine automatiquement si un modèle est un accessoire ou un pegboard:

1. **Si des Empty `peg_*` sont trouvés** → Accessoire
2. **Si `panel_width_cm` ou `panel_height_cm` existe** → Pegboard
3. **Sinon** → Pegboard (par défaut)

---

## Système de Grille SKÅDIS

### Double Grille (Dual Grid Pattern)

Le système SKÅDIS utilise deux grilles décalées:

```
Grille A (●) : Positions à x = n×40mm, y = m×40mm
Grille B (○) : Positions à x = n×40+20mm, y = m×40+20mm

    18mm   58mm   98mm   138mm  178mm  ...
    ─────────────────────────────────────
18  │  ●      ○      ●      ○      ●
    │
38  │     ○      ●      ○      ●      ○
    │
58  │  ●      ○      ●      ○      ●
    │
78  │     ○      ●      ○      ●      ○
    │
98  │  ●      ○      ●      ○      ●
```

### Calcul des Positions de Grille

**Grille A:**
- X: `margin + n × spacing` où n = 0, 1, 2, ...
- Y: `margin + m × spacing` où m = 0, 1, 2, ...

**Grille B:**
- X: `margin + offset + n × spacing`
- Y: `margin + offset + m × spacing`

Avec les valeurs SKÅDIS par défaut:
- `margin` = 18mm
- `spacing` = 40mm
- `offset` = 20mm

---

## Export GLB depuis Blender

### Paramètres d'Export Recommandés

1. **Format**: glTF Binary (.glb)
2. **Include**:
   - ☑️ Custom Properties
   - ☑️ Cameras (optionnel)
   - ☑️ Punctual Lights (optionnel)
3. **Transform**:
   - ☑️ +Y Up (important!)
4. **Geometry**:
   - ☑️ Apply Modifiers
   - ☑️ UVs
   - ☑️ Normals
   - ☐ Tangents (optionnel)
   - ☑️ Vertex Colors (si utilisés)
5. **Animation**: Désactiver si non utilisé

### Checklist Avant Export

#### Pour un Pegboard:
- [ ] Origine au coin supérieur-gauche
- [ ] Face du panneau vers +Y
- [ ] Haut du panneau vers +Z
- [ ] Custom Properties définies sur l'objet racine
- [ ] Dimensions en millimètres

#### Pour un Accessoire:
- [ ] Empty objects `peg_*` positionnés correctement
- [ ] Custom Properties définies sur l'objet racine
- [ ] Origine cohérente avec les points d'ancrage
- [ ] Dimensions en millimètres

---

## Prompts LLM pour Blender MCP

### Prompt 1: Configuration d'un Pegboard SKÅDIS

```
Configure ce modèle 3D comme un pegboard SKÅDIS pour le configurateur WooCommerce.

ÉTAPES À SUIVRE:

1. SÉLECTION ET PRÉPARATION:
   - Sélectionne l'objet principal du panneau
   - Assure-toi qu'il est l'objet parent/racine de la hiérarchie

2. POSITIONNEMENT DE L'ORIGINE:
   - Place l'origine (Object Origin) au coin SUPÉRIEUR-GAUCHE de la face visible
   - La face visible doit pointer vers +Y dans Blender
   - Le haut du panneau doit pointer vers +Z

3. AJOUT DES CUSTOM PROPERTIES sur l'objet racine:
   - panel_width_cm: [LARGEUR EN CM] (ex: 36 pour petit SKÅDIS, 56 pour grand)
   - panel_height_cm: [HAUTEUR EN CM] (ex: 56)
   - grid_spacing_mm: 40
   - grid_offset_mm: 20
   - border_margin_mm: 18
   - slot_width_mm: 5
   - slot_height_mm: 15

4. VÉRIFICATION:
   - Vérifie que les dimensions du mesh correspondent aux valeurs en cm × 10 (en mm)
   - Vérifie que l'orientation est correcte

5. EXPORT:
   - Exporte en GLB avec "Custom Properties" activé
   - Active "+Y Up" dans les options de transformation

DIMENSIONS DU PANNEAU: [SPÉCIFIER ICI, ex: 360mm × 560mm]
```

### Prompt 2: Configuration d'un Accessoire Simple (Single Slot)

```
Configure ce modèle 3D comme un accessoire single_slot pour le configurateur WooCommerce.

ÉTAPES À SUIVRE:

1. ANALYSE DU MODÈLE:
   - Identifie où se trouve le crochet/peg qui s'insère dans le panneau
   - Ce point sera le point d'ancrage principal

2. CRÉATION DU POINT D'ANCRAGE:
   - Crée un Empty (Add > Empty > Plain Axes)
   - Nomme-le "peg_1"
   - Positionne-le EXACTEMENT à l'endroit où le crochet entre dans le panneau
   - Parente l'Empty à l'objet principal de l'accessoire

3. POSITIONNEMENT PRÉCIS DU PEG (CRITIQUE):
   - X: Position horizontale du point d'ancrage (peut être 0 si centré)
   - Y: Doit être à 0 ou au niveau de la surface arrière de l'accessoire
   - Z: Doit être à 0 (niveau de contact avec le panneau)
   
   Le peg définit où l'accessoire "touche" le panneau.

4. AJOUT DES CUSTOM PROPERTIES sur l'objet racine:
   - snap_mode: "single_slot"
   - orientation: "front" (ou "angled" si l'accessoire est incliné)
   - load_capacity_g: [CAPACITÉ EN GRAMMES] (ex: 500)

5. POSITIONNEMENT DE L'ORIGINE:
   - L'origine de l'objet racine doit être cohérente avec le point d'ancrage
   - Recommandé: origine au même endroit que peg_1

6. VÉRIFICATION:
   - L'Empty peg_1 doit être un enfant de l'objet racine
   - L'Empty ne doit PAS avoir de géométrie (mesh)
   - Vérifier: peg_1.location.y = 0 et peg_1.location.z = 0

7. EXPORT:
   - Exporte en GLB avec "Custom Properties" activé
   - Active "+Y Up"

TYPE D'ACCESSOIRE: [SPÉCIFIER ICI, ex: crochet simple, étagère, etc.]
CAPACITÉ DE CHARGE: [SPÉCIFIER ICI, ex: 500g]
```

### Prompt 3: Configuration d'un Accessoire Double (Dual Slot)

```
Configure ce modèle 3D comme un accessoire dual_slot pour le configurateur WooCommerce.

ÉTAPES À SUIVRE:

1. ANALYSE DU MODÈLE:
   - Identifie les DEUX points où les crochets s'insèrent dans le panneau
   - Ces points doivent être espacés de 40mm horizontalement (espacement grille SKÅDIS)

2. CRÉATION DES POINTS D'ANCRAGE:
   - Crée un premier Empty, nomme-le "peg_1"
   - Positionne-le au premier point d'ancrage (généralement à gauche)
   - Crée un second Empty, nomme-le "peg_2"
   - Positionne-le au second point d'ancrage (40mm à droite de peg_1)
   - Parente les deux Empty à l'objet principal

3. POSITIONNEMENT PRÉCIS DES PEGS (CRITIQUE):
   
   peg_1:
   - X: 0 (point de référence)
   - Y: 0 (surface arrière)
   - Z: 0 (niveau de contact panneau)
   
   peg_2:
   - X: 40mm (ou 0.04m) - EXACTEMENT 40mm de différence avec peg_1
   - Y: 0 (MÊME Y que peg_1 - alignement horizontal)
   - Z: 0 (MÊME Z que peg_1 - même plan de contact)

4. VÉRIFICATION DE L'ESPACEMENT:
   - La distance entre peg_1 et peg_2 doit être EXACTEMENT 40mm (0.04 unités si en mètres)
   - Les deux Empty doivent être au même niveau Y et Z
   - Commande Blender pour vérifier: sélectionner les deux Empty et regarder les coordonnées

5. AJOUT DES CUSTOM PROPERTIES sur l'objet racine:
   - snap_mode: "dual_slot"
   - orientation: "front"
   - load_capacity_g: [CAPACITÉ EN GRAMMES]

6. HIÉRARCHIE FINALE:
   ```
   Accessoire (racine)
   ├── peg_1 (Empty) - Position: (0, 0, 0)
   ├── peg_2 (Empty) - Position: (0.04, 0, 0) ou (40, 0, 0) si en mm
   └── Mesh (géométrie)
   ```

7. EXPORT:
   - Exporte en GLB avec "Custom Properties" activé

TYPE D'ACCESSOIRE: [SPÉCIFIER ICI]
ESPACEMENT DES PEGS: 40mm (standard SKÅDIS)
```

### Prompt 4: Configuration d'un Accessoire Rail

```
Configure ce modèle 3D comme un accessoire de type rail pour le configurateur WooCommerce.

ÉTAPES À SUIVRE:

1. ANALYSE DU MODÈLE:
   - Identifie TOUS les points d'ancrage le long du rail
   - Note leurs positions relatives

2. CRÉATION DES POINTS D'ANCRAGE:
   - Pour chaque point d'ancrage, crée un Empty nommé "peg_N" (peg_1, peg_2, peg_3, etc.)
   - Positionne chaque Empty précisément
   - Les espacements doivent être des multiples de 40mm pour s'aligner avec la grille

3. POSITIONNEMENT PRÉCIS DES PEGS (CRITIQUE):
   
   Tous les pegs doivent respecter:
   - Y: MÊME valeur pour tous (généralement 0) - alignement sur une ligne
   - Z: MÊME valeur pour tous (généralement 0) - même plan de contact
   - X: Espacés de multiples de 40mm
   
   Exemple pour un rail de 3 points:
   - peg_1: (0, 0, 0)
   - peg_2: (40mm, 0, 0) ou (0.04, 0, 0)
   - peg_3: (80mm, 0, 0) ou (0.08, 0, 0)

4. AJOUT DES CUSTOM PROPERTIES:
   - snap_mode: "rail"
   - orientation: "front"
   - load_capacity_g: [CAPACITÉ TOTALE]

5. EXEMPLE DE CONFIGURATION POUR UN RAIL DE 3 POINTS:
   ```
   Rail (racine)
   ├── peg_1 (Empty) - Position: (0, 0, 0)
   ├── peg_2 (Empty) - Position: (0.04, 0, 0)  // +40mm
   ├── peg_3 (Empty) - Position: (0.08, 0, 0)  // +80mm
   └── Mesh
   
   Vérification alignement:
   - peg_1.y = peg_2.y = peg_3.y = 0 ✓
   - peg_1.z = peg_2.z = peg_3.z = 0 ✓
   - Espacement X = 40mm entre chaque ✓
   ```

6. EXPORT avec Custom Properties activé

LONGUEUR DU RAIL: [SPÉCIFIER ICI]
NOMBRE DE POINTS D'ANCRAGE: [SPÉCIFIER ICI]
```

### Prompt 5: Vérification et Diagnostic d'un Modèle

```
Vérifie et diagnostique ce modèle 3D pour le configurateur WooCommerce.

VÉRIFICATIONS À EFFECTUER:

1. TYPE DE MODÈLE:
   - Recherche des Empty nommés "peg_*" → Si trouvés = Accessoire
   - Recherche des Custom Properties panel_width_cm/panel_height_cm → Si trouvées = Pegboard

2. POUR UN PEGBOARD, VÉRIFIE:
   - [ ] panel_width_cm est défini et correspond aux dimensions réelles
   - [ ] panel_height_cm est défini et correspond aux dimensions réelles
   - [ ] grid_spacing_mm = 40 (standard SKÅDIS)
   - [ ] grid_offset_mm = 20
   - [ ] border_margin_mm = 18
   - [ ] L'origine est au coin supérieur-gauche
   - [ ] La face est orientée vers +Y

3. POUR UN ACCESSOIRE, VÉRIFIE:
   - [ ] Au moins un Empty "peg_*" existe
   - [ ] Les Empty sont des enfants de l'objet racine
   - [ ] Les Empty n'ont pas de géométrie
   - [ ] snap_mode est défini ("single_slot", "dual_slot", ou "rail")
   - [ ] orientation est défini ("front" ou "angled")

4. VÉRIFICATION ALIGNEMENT DES PEGS (CRITIQUE):
   
   Pour TOUS les accessoires:
   - [ ] Tous les pegs ont le MÊME Y (alignement horizontal)
   - [ ] Tous les pegs ont le MÊME Z (même plan de contact)
   
   Pour dual_slot spécifiquement:
   - [ ] Exactement 2 pegs existent
   - [ ] Différence en X = exactement 40mm (0.04m)
   - [ ] peg_1.y == peg_2.y (même ligne horizontale)
   - [ ] peg_1.z == peg_2.z (même profondeur)
   
   Pour rail:
   - [ ] Tous les espacements X sont des multiples de 40mm
   - [ ] Tous les pegs alignés sur Y et Z

5. COMMANDES BLENDER POUR VÉRIFIER L'ALIGNEMENT:
   ```python
   # Sélectionner tous les Empty peg_*
   import bpy
   pegs = [obj for obj in bpy.data.objects if obj.name.startswith('peg_')]
   
   # Vérifier alignement Y
   y_values = [p.location.y for p in pegs]
   print(f"Y values: {y_values}")
   print(f"Y aligned: {len(set(y_values)) == 1}")
   
   # Vérifier alignement Z
   z_values = [p.location.z for p in pegs]
   print(f"Z values: {z_values}")
   print(f"Z aligned: {len(set(z_values)) == 1}")
   
   # Vérifier espacement X (pour dual_slot)
   if len(pegs) == 2:
       x_diff = abs(pegs[1].location.x - pegs[0].location.x)
       print(f"X spacing: {x_diff * 1000}mm")
       print(f"Valid 40mm spacing: {abs(x_diff - 0.04) < 0.001}")
   ```

6. VÉRIFICATIONS GÉNÉRALES:
   - [ ] Dimensions < 10 unités (sinon sera mis à l'échelle ×0.001)
   - [ ] Pas de transformations non appliquées (Apply All Transforms)
   - [ ] Matériaux correctement assignés

RAPPORT:
- Liste tous les problèmes trouvés
- Propose des corrections pour chaque problème
- Indique spécifiquement si l'alignement X/Y/Z des pegs est incorrect
```

### Prompt 6: Conversion d'un Modèle Existant

```
Convertis ce modèle 3D existant pour qu'il soit compatible avec le configurateur WooCommerce.

ANALYSE INITIALE:
1. Détermine le type de modèle (pegboard ou accessoire) basé sur sa forme
2. Mesure les dimensions actuelles
3. Identifie l'orientation actuelle

CONVERSION PEGBOARD:
Si c'est un panneau perforé:
1. Mesure largeur et hauteur en mm
2. Convertis en cm pour panel_width_cm et panel_height_cm
3. Repositionne l'origine au coin supérieur-gauche
4. Oriente la face vers +Y, le haut vers +Z
5. Ajoute toutes les Custom Properties SKÅDIS

CONVERSION ACCESSOIRE:
Si c'est un accessoire/crochet:
1. Identifie les points d'accrochage physiques sur le modèle
2. Crée des Empty "peg_*" à ces positions exactes
3. Détermine le snap_mode approprié:
   - 1 point → single_slot
   - 2 points à 40mm → dual_slot
   - 3+ points → rail
4. Ajoute les Custom Properties

FINALISATION:
1. Applique toutes les transformations (Ctrl+A > All Transforms)
2. Vérifie que les dimensions sont en mm (ou seront auto-scalées)
3. Exporte en GLB

MODÈLE À CONVERTIR: [DESCRIPTION DU MODÈLE]
```

---

## Résumé des Valeurs par Défaut

Si une propriété n'est pas définie, le système utilise ces valeurs:

### Pegboard
| Propriété | Valeur par Défaut |
|-----------|-------------------|
| panel_width_cm | 36 |
| panel_height_cm | 56 |
| grid_spacing_mm | 40 |
| grid_offset_mm | 20 |
| border_margin_mm | 18 |
| slot_width_mm | 5 |
| slot_height_mm | 15 |

### Accessoire
| Propriété | Valeur par Défaut |
|-----------|-------------------|
| snap_mode | "single_slot" |
| orientation | "front" |
| load_capacity_g | 500 |
| peg_count | 1 |

---

## Dépannage

### Problème: L'accessoire ne se place pas correctement
- Vérifiez que les Empty `peg_*` sont bien positionnés
- Vérifiez que les Empty sont des enfants de l'objet racine
- Vérifiez l'espacement (40mm pour dual_slot)

### Problème: L'accessoire est mal aligné horizontalement (X)
- **Cause**: Les pegs ne sont pas espacés de multiples de 40mm
- **Solution**: Ajustez la position X des pegs pour que la différence soit exactement 40mm (ou 80mm, 120mm, etc.)
- **Vérification**: `peg_2.x - peg_1.x = 0.04` (en mètres) ou `40` (en mm)

### Problème: L'accessoire est mal aligné verticalement (Y)
- **Cause**: Les pegs n'ont pas le même Y
- **Solution**: Alignez tous les pegs sur le même Y (généralement 0)
- **Vérification**: `peg_1.y == peg_2.y == 0`

### Problème: L'accessoire flotte ou s'enfonce dans le panneau (Z)
- **Cause**: Les pegs n'ont pas le même Z ou ne sont pas à Z=0
- **Solution**: Placez tous les pegs à Z=0 (surface arrière de l'accessoire)
- **Note**: Le système ajoute automatiquement 3mm de décalage lors du placement

### Problème: L'accessoire dual_slot ne s'accroche qu'à un seul trou
- **Cause**: L'espacement entre les pegs n'est pas exactement 40mm
- **Solution**: Vérifiez et corrigez l'espacement X entre peg_1 et peg_2
- **Tolérance**: L'espacement doit être à ±0.5mm de 40mm

### Problème: Le panneau est trop grand/petit
- Vérifiez les dimensions du modèle (doit être > 10 unités pour auto-scale)
- Vérifiez que panel_width_cm et panel_height_cm correspondent

### Problème: Le modèle est mal orienté
- Le modèle est pivoté de -90° sur X au chargement
- Dans Blender: face vers +Y, haut vers +Z

### Problème: Les Custom Properties ne sont pas exportées
- Activez "Custom Properties" dans les options d'export GLB
- Vérifiez que les propriétés sont sur l'objet racine, pas sur le mesh

### Problème: L'accessoire ne s'accroche pas du tout
- Vérifiez que les Empty sont nommés avec le préfixe `peg_`
- Vérifiez que les Empty n'ont pas de géométrie (doivent être de type Object3D pur)
- Vérifiez la hiérarchie: les Empty doivent être enfants de l'objet racine
