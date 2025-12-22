# **Cadre de Développement Stratégique pour un Configurateur 3D de Pegboards Intégré à l'Écosystème WooCommerce**

L'évolution du commerce électronique pour le mobilier modulaire et l'organisation de l'espace de travail a franchi une étape décisive avec l'intégration de la visualisation interactive en temps réel. La transition d'un catalogue statique vers une expérience de configuration immersive permet non seulement d'augmenter le taux de conversion, mais réduit également de manière significative le taux de retour en alignant précisément les attentes des consommateurs avec la réalité physique du produit.1 Dans le cadre de ce projet, l'objectif est de concevoir une infrastructure logicielle robuste permettant la personnalisation de pegboards en MDF de 5 mm d'épaisseur, respectant scrupuleusement les standards dimensionnels de l'écosystème IKEA SKÅDIS, tout en assurant une synchronisation bidirectionnelle avec la base de données WooCommerce.

## **Analyse Comparative et Spécifications Techniques du Standard SKÅDIS**

La réussite d'un outil de configuration numérique repose sur la fidélité mathématique du modèle virtuel par rapport à l'objet physique. Le choix du standard SKÅDIS n'est pas anodin ; il représente une rupture avec les panneaux perforés traditionnels à trous ronds pour proposer un système de fentes allongées offrant une stabilité accrue et une modularité supérieure.4

### **Géométrie du Motif de Perçage et Contraintes Dimensionnelles**

Le pegboard fabriqué en MDF doit respecter une géométrie spécifique pour garantir la compatibilité avec les accessoires existants et futurs. Contrairement aux panneaux perforés standard de 1/4 de pouce dont les trous sont espacés de 25,4 mm (1 pouce), le système SKÅDIS adopte une approche métrique rigoureuse.4 Les fentes mesurent précisément 5 mm de largeur sur 15 mm de hauteur, avec des extrémités arrondies présentant un rayon de 2,5 mm.6

La disposition de ces fentes suit un motif en quinconce. Le réseau primaire est un quadrillage de 40 mm par 40 mm. Un second réseau, identique au premier, est superposé avec un décalage de 20 mm sur les axes X et Y.6 Cette structure crée une densité de fixation optimale tout en préservant l'intégrité structurelle du panneau en MDF, un matériau qui, bien que stable, nécessite une attention particulière quant à la proximité des perforations pour éviter les points de rupture sous charge.5

| Paramètre Géométrique | Spécification Technique | Source de Référence |
| :---- | :---- | :---- |
| Largeur de la fente | 5 mm | 6 |
| Hauteur de la fente | 15 mm | 6 |
| Rayon de courbure | 2,5 mm | 6 |
| Espacement horizontal (centre à centre) | 40 mm | 6 |
| Espacement vertical (centre à centre) | 40 mm | 6 |
| Décalage du motif (staggered) | 20 mm (X) / 20 mm (Y) | 6 |
| Épaisseur du panneau | 5 mm | 5 |

Pour un panneau de 56 cm de hauteur par 36 cm de largeur, le modèle 3D doit intégrer les marges de bordure afin que, lors de l'assemblage de plusieurs panneaux dans l'espace virtuel, la continuité du pas de 40 mm soit maintenue. Cela est crucial pour permettre aux accessoires de "chevaucher" deux panneaux adjacents sans interruption du motif.

### **Propriétés du Matériau et Implications pour la Modélisation**

Le choix du MDF (Medium Density Fibreboard) de 5 mm offre une surface lisse idéale pour la peinture et le pelliculage, contrairement au panneau perforé classique en masonite qui présente souvent une texture plus rugueuse.5 Dans l'environnement Three.js, cette propriété doit être traduite par un matériau PBR (Physically Based Rendering) avec une valeur de "Roughness" (rugosité) modérée et une "Metalness" nulle pour simuler correctement la réflexion de la lumière sur une surface peinte mate ou satinée.8

## **Architecture du Pipeline de Production 3D sous Blender**

La création d'un configurateur 3D performant pour le web exige un pipeline de production d'actifs numériques standardisé. Blender, en tant qu'outil de modélisation principal, doit être configuré pour exporter des fichiers au format GLB (glTF Binary), qui est le format recommandé pour les applications WebGL en raison de son efficacité dans la gestion de la géométrie, des textures et des métadonnées.1

### **Normalisation des Modèles et Gestion des Coordonnées**

Le passage de Blender à Three.js nécessite une compréhension des différences de systèmes de coordonnées. Blender utilise par défaut un système où l'axe Z pointe vers le haut, tandis que Three.js et le standard glTF utilisent l'axe Y pour la verticalité.11 Bien que l'exportateur glTF de Blender gère généralement cette conversion, il est impératif que toutes les transformations soient "appliquées" (Ctrl+A dans Blender) avant l'exportation. Cela garantit que les échelles sont fixées à 1.0 et les rotations à 0, évitant ainsi des comportements imprévisibles lors de la manipulation des objets par le code JavaScript.13

L'échelle doit être réglée sur le système métrique avec une unité de base égale à 1 mètre. Ainsi, un pegboard de 56 cm sera modélisé avec une hauteur de 0,56 unité Blender. Ce respect strict de l'échelle réelle est indispensable pour que le moteur de rendu calcule correctement les ombres portées et que les interactions de proximité (snapping) fonctionnent de manière cohérente.14

### **Points d'Attache et Métadonnées : La Méthode des "Empties"**

Pour que l'application comprenne comment un accessoire se fixe au pegboard, le modèle 3D ne doit pas être une simple géométrie inerte. Il doit intégrer des données structurelles. La méthode la plus robuste consiste à utiliser des objets "Empty" (ou "Null") dans Blender pour marquer les points d'ancrage critiques.15

Pour le pegboard, des "Empties" peuvent être placés au centre de chaque fente (ou au moins aux coins stratégiques pour définir la grille). Pour les accessoires, comme un crochet ou un plateau, l'origine de l'objet (son pivot) doit être placée exactement au point de contact entre l'accessoire et la face avant du pegboard.14 Cette origine doit être orientée de sorte que l'axe Z (ou l'axe local défini par convention) pointe vers l'arrière de l'accessoire, facilitant ainsi son alignement automatique avec la normale du panneau.

| Type d'Objet | Configuration du Pivot (Origine) | Rôle Technique |
| :---- | :---- | :---- |
| Pegboard | Coin supérieur gauche, face arrière | Point de référence pour l'assemblage multi-panneaux. |
| Crochet / Attache | Point de contact supérieur avec le panneau | Assure que l'accessoire "pend" correctement au-dessus de la fente. |
| Plateau / Bac | Face arrière, centre horizontal | Permet un centrage automatique entre deux fentes. |
| Empties (Marqueurs) | Centrés dans les perforations | Définissent les cibles magnétiques pour le snapping. |

L'utilisation des "Custom Properties" dans Blender permet d'injecter des données métier directement dans le fichier GLB. En ajoutant une propriété telle que type: "accessory" ou load\_capacity: 500g, ces informations deviennent accessibles dans Three.js via l'attribut userData de l'objet chargé.18 Cela permet au configurateur de restreindre, par exemple, le placement de certains accessoires lourds à des zones spécifiques ou de filtrer les accessoires compatibles avec un modèle de panneau donné.

## **Ingénierie Logicielle : Intégration WordPress et WooCommerce**

Le configurateur ne doit pas être une entité isolée mais une extension naturelle du catalogue WooCommerce. Cette intégration repose sur une communication fluide entre la scène 3D côté client et l'infrastructure WordPress côté serveur.

### **Structure du Plugin et Gestion des Modèles via Custom Post Types**

Pour administrer les modèles 3D, la création d'un "Custom Post Type" (CPT) nommé pegboard\_3d\_model est la solution la plus flexible. Ce CPT permet de dissocier la gestion des fichiers techniques de la gestion commerciale des produits WooCommerce.20 Chaque entrée de ce CPT sera liée à un produit WooCommerce via son ID, permettant ainsi de récupérer dynamiquement le prix, le nom et l'état des stocks.21

Le stockage des métadonnées s'effectuera via la table wp\_postmeta, utilisant des clés spécifiques pour les URLs des fichiers GLB, les dimensions physiques et les configurations de grille.22

| Clé Meta | Type de Donnée | Description |
| :---- | :---- | :---- |
| \_glb\_file\_url | String (URL) | Chemin vers le fichier binaire du modèle 3D. |
| \_product\_id | Integer | ID du produit WooCommerce associé. |
| \_model\_type | Enum (Board/Accessory) | Définit si l'objet est un support ou un contenu. |
| \_grid\_dimensions | JSON | Largeur, hauteur et nombre de fentes (X, Y). |
| \_snap\_offset | Float | Décalage spécifique pour l'alignement magnétique. |

### **L'Interface d'Administration**

L'écran d'administration dans WordPress doit offrir une interface simplifiée pour le gestionnaire du site. En utilisant les "Custom Fields" ou des bibliothèques comme Carbon Fields ou ACF, l'administrateur peut télécharger un modèle GLB et définir ses propriétés sans toucher au code. Un aspect crucial est la prévisualisation : l'intégration d'un petit visualiseur Three.js dans le back-end permet de vérifier que le modèle est correctement orienté et à la bonne échelle avant sa mise en ligne.1

### **Interaction avec l'API Store de WooCommerce**

Pour l'ajout au panier et le suivi du prix en temps réel, l'utilisation de l'API Store de WooCommerce (introduite avec les blocs WooCommerce) est préférable à l'API REST traditionnelle ou aux appels AJAX classiques. L'API Store est optimisée pour les interactions front-end non authentifiées et gère nativement les sessions de panier.21

Lorsqu'un utilisateur ajoute un accessoire dans la scène 3D, le configurateur interroge l'état local des prix. L'action finale "Ajouter au Panier" déclenche une requête POST groupée vers l'endpoint /wc/store/v1/cart/add-item. Cette méthode permet d'ajouter la configuration complète (le panneau et tous ses accessoires) en une seule transaction, garantissant que le panier reflète exactement la composition visuelle.23

## **Développement de l'Expérience 3D avec Three.js**

La scène 3D est le cœur battant de l'application. Elle doit être fluide, intuitive et capable de gérer des compositions complexes sans dégradation des performances.

### **Initialisation de la Scène et Rendu Haute Fidélité**

L'utilisation du WebGLRenderer avec le support de l'antialiasing et de l'espace colorimétrique sRGB est essentielle pour un rendu professionnel.25 La scène doit inclure une PerspectiveCamera pour une vue naturelle, mais avec des limites imposées via OrbitControls pour éviter que l'utilisateur ne se perde dans l'espace ou ne visualise l'envers du décor (le mur de fixation).20

L'éclairage doit combiner une AmbientLight pour le débouchage des ombres et une DirectionalLight (ou SpotLight) positionnée de manière à créer un léger relief sur les fentes du pegboard, accentuant ainsi la perception de la profondeur du MDF.25

### **Algorithme de Snapping pour Grille Quinconce (Staggered Grid)**

Le défi technique majeur réside dans le magnétisme (snapping) des accessoires sur le motif SKÅDIS. Comme nous l'avons vu, le motif est composé de deux grilles décalées. L'algorithme de snapping doit donc évaluer deux conditions de placement à chaque mouvement de souris.

Soit $P(x, y)$ la position brute de la souris sur le plan du panneau. Le système doit calculer la distance vers le point le plus proche dans deux réseaux distincts :

1. Réseau A : $x\_a \= \\text{round}(x / 40\) \\times 40, y\_a \= \\text{round}(y / 40\) \\times 40$  
2. Réseau B : $x\_b \= (\\text{round}((x \- 20\) / 40\) \\times 40\) \+ 20, y\_b \= (\\text{round}((y \- 20\) / 40\) \\times 40\) \+ 20$

L'accessoire est automatiquement déplacé vers le point $P\_a$ ou $P\_b$ qui minimise la distance euclidienne.27 Cette logique permet une expérience utilisateur fluide où l'accessoire semble "sauter" d'une fente à l'autre avec une précision chirurgicale, simulant parfaitement le comportement physique du système SKÅDIS.29

### **Gestion Multi-Panneaux et Modularité**

Le configurateur doit permettre l'ajout de plusieurs pegboards de 56x36 cm. Dans Three.js, cela implique une gestion dynamique des instances. Lorsqu'un nouveau panneau est ajouté, il doit être positionné de manière adjacente aux panneaux existants. La logique de snapping s'étend alors à l'ensemble de la surface formée par les panneaux joints.

Pour faciliter cette extension, les panneaux doivent être considérés comme des "conteneurs" de grille. L'application maintient une structure de données (un graphe ou une liste) de tous les panneaux actifs, permettant de recalculer les limites de la zone de travail à chaque modification de la scène.

## **Dynamique Commerciale et Calcul du Prix en Temps Réel**

L'aspect psychologique de la configuration est renforcé par la visibilité immédiate du coût. Chaque accessoire ajouté à la scène 3D doit déclencher une mise à jour du prix total affiché sur l'interface utilisateur.

### **Synchronisation des Données de Prix**

Les informations de prix ne doivent jamais être codées en dur dans les modèles 3D. Elles sont extraites dynamiquement des objets produits WooCommerce au chargement de l'application.21

| Élément de la Scène | Source de Donnée WooCommerce | Fréquence de Mise à Jour |
| :---- | :---- | :---- |
| Panneau MDF 56x36 | product.regular\_price | Initialisation / Ajout de panneau |
| Crochet | product.price | Événement onDrop |
| Panier / Corbeille | product.price | Événement onDrop |
| Total de la scène | Somme cumulée des instances | Temps réel (debounce 100ms) |

Pour garantir la réactivité, le plugin peut utiliser un état global (type Redux ou une simple API Context en JavaScript) qui suit la liste des product\_id présents dans la scène. Une fonction de calcul traverse cette liste et agrège les prix, tout en appliquant les éventuelles promotions ou taxes configurées dans WooCommerce.31

### **Le Processus d'Ajout au Panier Final**

Une fois la scène composée, le bouton "Ajouter au Panier" doit transformer la représentation visuelle en une liste d'articles WooCommerce. Le plugin doit gérer les cas particuliers, comme les accessoires qui sont des variations de produits (ex: couleur du crochet). Les informations de variation doivent être transmises via l'API Store pour s'assurer que le préparateur de commande reçoive les bonnes spécifications.23

## **Guide de Configuration pour le Développement (Prompt Document)**

Pour assurer un développement cohérent par un système d'IA ou une équipe technique, il est nécessaire de fournir un document de spécifications extrêmement détaillé, agissant comme un "Single Source of Truth".

### **Spécifications du Plugin WordPress/WooCommerce**

Le code doit être structuré de manière moderne, utilisant le système de classes PHP et respectant les normes de sécurité (nonces, sanitization).

1. **Enregistrement des scripts** : Utiliser wp\_enqueue\_script pour charger Three.js, les loaders (GLTFLoader, DRACOLoader) et le script principal du configurateur uniquement sur les pages contenant le shortcode.20  
2. **Gestion des Assets** : Implémenter un système de cache pour les modèles 3D afin d'éviter des téléchargements répétés lors de la navigation entre les produits.  
3. **API Endpoints** : Créer un endpoint personnalisé si nécessaire pour récupérer la liste complète des accessoires compatibles en une seule requête JSON, incluant leurs URLs de modèles et leurs métadonnées de grille.

### **Spécifications de la Scène Interactive**

La scène doit être "responsive" et s'adapter à la taille du conteneur parent.

* **Contrôles** : L'utilisateur doit pouvoir sélectionner un objet pour le déplacer ou le supprimer. Un clic sur un objet dans la scène doit afficher un petit menu contextuel (Supprimer, Dupliquer, Info).  
* **Limites de placement** : Un accessoire ne peut pas être placé en dehors de la surface d'un pegboard. Si l'utilisateur relâche un objet dans le vide, celui-ci doit retourner à sa position précédente ou être supprimé de la scène.  
* **Performance** : Utiliser des InstancedMesh si le nombre d'accessoires identiques (ex: 50 crochets) devient important, afin de minimiser les appels de rendu (draw calls) et de maintenir un framerate de 60 FPS.10

### **Directives pour la Modélisation Blender**

Pour le créateur des modèles 3D, les règles suivantes sont non négociables :

* **Format** : GLB uniquement, avec compression Draco désactivée par défaut pour une compatibilité maximale, sauf si le fichier dépasse 5 Mo.10  
* **Unités** : 1 unité \= 1 mètre. Vérifier que la dimension "X" d'un panneau est bien de 0.36.  
* **Normales** : S'assurer que les normales des faces sont orientées vers l'extérieur pour éviter les problèmes d'affichage (backface culling) dans Three.js.  
* **UV Mapping** : Utiliser un seul canal UV pour les textures de bois ou de peinture. Les textures doivent être carrées (1024x1024) et compressées en JPEG.8

## **Synthèse et Recommandations Stratégiques**

La création de ce configurateur 3D pour pegboards en MDF constitue un avantage concurrentiel majeur. En s'appuyant sur le standard IKEA SKÅDIS, le système bénéficie d'une reconnaissance immédiate par les utilisateurs tout en offrant la qualité supérieure du MDF artisanal.

### **Points Critiques de Vigilance**

La robustesse de l'application dépendra de la précision du snapping. Une erreur de seulement 1 mm dans la définition de la grille sous Blender se traduira par un décalage cumulatif rendant le placement impossible sur de grandes surfaces multi-panneaux. Il est recommandé de tester la grille avec un script de validation automatisé avant la mise en production.

De plus, l'intégration WooCommerce doit être surveillée lors des mises à jour majeures du plugin e-commerce. L'utilisation de l'API Store est une stratégie d'avenir, mais elle nécessite que le thème WordPress soit compatible avec les blocs WooCommerce modernes pour garantir une expérience sans friction.21

### **Vers une Personnalisation Accrue**

À l'avenir, le système pourrait évoluer pour permettre la découpe sur mesure du MDF directement depuis l'interface 3D. En calculant dynamiquement la surface du panneau et le nombre de perforations, le prix pourrait être ajusté au centimètre près, offrant ainsi une solution de rangement véritablement unique sur le marché.2 L'architecture proposée ici, basée sur des principes de modularité et de standardisation, est parfaitement préparée pour ces extensions futures.

### ---

**Prompt Technique pour le Développement (LLM Dev Reference)**

Contexte : Développement d'un plugin WordPress "3D Pegboard Composer" pour WooCommerce.  
Stack : PHP 8+, WordPress 6+, WooCommerce 8+, Three.js (dernière version stable).  
**Instructions pour la Scène 3D** :

* Initialiser un WebGLRenderer dans un conteneur div.  
* Charger les modèles via GLTFLoader. Les modèles ont des métadonnées dans userData définissant leur type.  
* Implémenter une grille de snapping complexe : pas de 40mm avec décalage de 20mm sur les rangées paires (standard SKÅDIS).  
* Gérer les collisions 2D sur le plan XY pour éviter le chevauchement des accessoires.  
* Créer une fonction updateTotalPrice() qui parcourt la scène, identifie les product\_id et additionne les prix récupérés via l'API WooCommerce.

**Instructions pour l'Intégration WooCommerce** :

* Utiliser wp\_localize\_script pour passer les données initiales des produits (ID, prix, nom) au script JavaScript.  
* L'action "Ajouter au Panier" doit appeler fetch('/wc/store/v1/cart/add-item', { method: 'POST',... }) pour chaque élément de la scène.  
* Gérer l'affichage d'un spinner de chargement pendant la synchronisation du panier.

**Instructions pour le Back-end WordPress** :

* Créer un Custom Post Type pegboard\_asset avec des champs personnalisés pour l'URL du fichier GLB et l'ID du produit WooCommerce lié.  
* Sécuriser les entrées avec check\_admin\_referer et les capacités utilisateur appropriées.  
* Exposer un shortcode \`\` qui affiche le configurateur.

**Règle de Modélisation Blender** :

* Pivot au centre-arrière pour les panneaux. Pivot au point d'accroche pour les accessoires. Axe Y vers le haut. Échelle 1:1 en mètres. Appliquer toutes les transformations (rotation/échelle) avant l'export.

**Livrables Attendus** : Un plugin complet, commenté, respectant les standards PSR et les meilleures pratiques de Three.js pour la performance web.

#### **Works cited**

1. How to create a 3D product configurator in WooCommerce | WCB, accessed on December 21, 2025, [https://wpconfiguratorbuilder.com/create-3d-product-configurator-woocommerce/](https://wpconfiguratorbuilder.com/create-3d-product-configurator-woocommerce/)  
2. WooCommerce 3D Product Configurator: The Ultimate Guide \- Salsita \- Blog, accessed on December 21, 2025, [https://blog.salsita.ai/woocommerce-3d-product-configurator-the-ultimate-guide/](https://blog.salsita.ai/woocommerce-3d-product-configurator-the-ultimate-guide/)  
3. The Ultimate Guide to 3D Configuration : Checklist & Best Practices \- VividWorks, accessed on December 21, 2025, [https://www.vividworks.com/blog/the-ultimate-guide-to-3d-configuration](https://www.vividworks.com/blog/the-ultimate-guide-to-3d-configuration)  
4. IKEA SKADIS vs 1/4” Pegboard: Which Should You Choose?, accessed on December 21, 2025, [https://www.justhangingpegboards.com/blogs/blog/ikea-skadis-vs-1-4-pegboard-which-should-you-choose](https://www.justhangingpegboards.com/blogs/blog/ikea-skadis-vs-1-4-pegboard-which-should-you-choose)  
5. SKÅDIS pegboard, wood, 36x56 cm \- IKEA Germany, accessed on December 21, 2025, [https://www.ikea.com/de/en/p/skadis-pegboard-wood-70347173/](https://www.ikea.com/de/en/p/skadis-pegboard-wood-70347173/)  
6. Skadis T-Nuts Mounting System for Ikea Skadis Pegboards by ..., accessed on December 21, 2025, [https://www.printables.com/model/228663-skadis-t-nuts-mounting-system-for-ikea-skadis-pegb](https://www.printables.com/model/228663-skadis-t-nuts-mounting-system-for-ikea-skadis-pegb)  
7. SKÅDIS Pegboard, white, Width: 14 ¼" Height: 22" \- IKEA, accessed on December 21, 2025, [https://www.ikea.com/us/en/p/skadis-pegboard-white-50320805/](https://www.ikea.com/us/en/p/skadis-pegboard-white-50320805/)  
8. blender-to-threejs-export-guide/readme.md at master \- GitHub, accessed on December 21, 2025, [https://github.com/funwithtriangles/blender-to-threejs-export-guide/blob/master/readme.md](https://github.com/funwithtriangles/blender-to-threejs-export-guide/blob/master/readme.md)  
9. glTF 2.0 \- Blender 5.0 Manual, accessed on December 21, 2025, [https://docs.blender.org/manual/en/latest/addons/import\_export/scene\_gltf2.html](https://docs.blender.org/manual/en/latest/addons/import_export/scene_gltf2.html)  
10. Export guidelines • Asset Transformer SDK • Unity Docs, accessed on December 21, 2025, [https://docs.unity.com/asset-transformer-sdk/2026.1/manual/sdktips/export-guidelines](https://docs.unity.com/asset-transformer-sdk/2026.1/manual/sdktips/export-guidelines)  
11. Blender to Three.js Model has wrong rotation and position \- Questions, accessed on December 21, 2025, [https://discourse.threejs.org/t/blender-to-three-js-model-has-wrong-rotation-and-position/5586](https://discourse.threejs.org/t/blender-to-three-js-model-has-wrong-rotation-and-position/5586)  
12. Default rotation for GLTF model \- Questions \- three.js forum, accessed on December 21, 2025, [https://discourse.threejs.org/t/default-rotation-for-gltf-model/23390](https://discourse.threejs.org/t/default-rotation-for-gltf-model/23390)  
13. GLTF Loader Model Orientation Incorrect \- Questions \- three.js forum, accessed on December 21, 2025, [https://discourse.threejs.org/t/gltf-loader-model-orientation-incorrect/19290](https://discourse.threejs.org/t/gltf-loader-model-orientation-incorrect/19290)  
14. Best practices for Exporting 3D Models \- Fectar, accessed on December 21, 2025, [https://fectar.com/docs/best-practices-for-exporting-3d-models/](https://fectar.com/docs/best-practices-for-exporting-3d-models/)  
15. Exporting group to Three.js from Blender in gltf format \- Stack Overflow, accessed on December 21, 2025, [https://stackoverflow.com/questions/54531833/exporting-group-to-three-js-from-blender-in-gltf-format](https://stackoverflow.com/questions/54531833/exporting-group-to-three-js-from-blender-in-gltf-format)  
16. Gltf loader \- export blender scene \- Questions \- three.js forum, accessed on December 21, 2025, [https://discourse.threejs.org/t/gltf-loader-export-blender-scene/39988](https://discourse.threejs.org/t/gltf-loader-export-blender-scene/39988)  
17. Where should I put my 3D object's pivot when exporting? : r/Unity3D \- Reddit, accessed on December 21, 2025, [https://www.reddit.com/r/Unity3D/comments/1dtm4dk/where\_should\_i\_put\_my\_3d\_objects\_pivot\_when/](https://www.reddit.com/r/Unity3D/comments/1dtm4dk/where_should_i_put_my_3d_objects_pivot_when/)  
18. \[Solved\] Why can't get the value of Blender CustomAttribute \- three.js forum, accessed on December 21, 2025, [https://discourse.threejs.org/t/solved-why-cant-get-the-value-of-blender-customattribute/6667/8](https://discourse.threejs.org/t/solved-why-cant-get-the-value-of-blender-customattribute/6667/8)  
19. \[Solved\] Why can't get the value of Blender CustomAttribute \- Questions \- three.js forum, accessed on December 21, 2025, [https://discourse.threejs.org/t/solved-why-cant-get-the-value-of-blender-customattribute/6667](https://discourse.threejs.org/t/solved-why-cant-get-the-value-of-blender-customattribute/6667)  
20. Creating Interactive 3D Visualizers in WordPress Using Three JS, accessed on December 21, 2025, [https://colorwhistle.com/create-3d-visualizers-with-three-js-and-wordpress/](https://colorwhistle.com/create-3d-visualizers-with-three-js-and-wordpress/)  
21. Tutorial: Placing an order using the Store API \- The WooCommerce Developer Blog, accessed on December 21, 2025, [https://developer.woocommerce.com/2023/09/20/tutorial-placing-an-order-using-the-store-api/](https://developer.woocommerce.com/2023/09/20/tutorial-placing-an-order-using-the-store-api/)  
22. Custom post type data \- Learn WordPress, accessed on December 21, 2025, [https://learn.wordpress.org/lesson/custom-post-type-data/](https://learn.wordpress.org/lesson/custom-post-type-data/)  
23. Cart API | WooCommerce developer docs, accessed on December 21, 2025, [https://developer.woocommerce.com/docs/apis/store-api/resources-endpoints/cart/](https://developer.woocommerce.com/docs/apis/store-api/resources-endpoints/cart/)  
24. WooCommerce Store API, accessed on December 21, 2025, [https://developer.woocommerce.com/docs/apis/store-api/](https://developer.woocommerce.com/docs/apis/store-api/)  
25. ThreeWP Plugin \- WordPress.com, accessed on December 21, 2025, [https://wordpress.com/plugins/threewp](https://wordpress.com/plugins/threewp)  
26. Three.js in WordPress Elementor \- Form und Zeichen, accessed on December 21, 2025, [https://www.formundzeichen.at/en/development/three-js-in-wordpress-elementor/](https://www.formundzeichen.at/en/development/three-js-in-wordpress-elementor/)  
27. Efficiently snap to vertices in threejs \- javascript \- Stack Overflow, accessed on December 21, 2025, [https://stackoverflow.com/questions/38128896/efficiently-snap-to-vertices-in-threejs](https://stackoverflow.com/questions/38128896/efficiently-snap-to-vertices-in-threejs)  
28. Snap to grid code? : r/gamemaker \- Reddit, accessed on December 21, 2025, [https://www.reddit.com/r/gamemaker/comments/14i7qw/snap\_to\_grid\_code/](https://www.reddit.com/r/gamemaker/comments/14i7qw/snap_to_grid_code/)  
29. andeplane/GridSnapThreeJS: A small example showing how you can create markers on a Three.js grid snapping to vertices \- GitHub, accessed on December 21, 2025, [https://github.com/andeplane/GridSnapThreeJS](https://github.com/andeplane/GridSnapThreeJS)  
30. 8c How to use drag controls for snap to grid three.js \- YouTube, accessed on December 21, 2025, [https://www.youtube.com/watch?v=ZnBIH\_0YVYI](https://www.youtube.com/watch?v=ZnBIH_0YVYI)  
31. Headless WooCommerce & Next.js: Create a Cart | by Leo Chan | Geek Culture \- Medium, accessed on December 21, 2025, [https://medium.com/geekculture/headless-woocommerce-next-js-create-a-cart-8a3e49b90076](https://medium.com/geekculture/headless-woocommerce-next-js-create-a-cart-8a3e49b90076)  
32. Get woocommerce carts total amount \- Stack Overflow, accessed on December 21, 2025, [https://stackoverflow.com/questions/22249615/get-woocommerce-carts-total-amount](https://stackoverflow.com/questions/22249615/get-woocommerce-carts-total-amount)  
33. How to Optimize Exported GLB/GLTF Files for Web Use in Aspose.3D Without Breaking Materials? \- Free Support Forum, accessed on December 21, 2025, [https://forum.aspose.com/t/how-to-optimize-exported-glb-gltf-files-for-web-use-in-aspose-3d-without-breaking-materials/314985](https://forum.aspose.com/t/how-to-optimize-exported-glb-gltf-files-for-web-use-in-aspose-3d-without-breaking-materials/314985)