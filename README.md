# sabine-rommevaux-tani.onoko.dev

## Edition des données

Les fichiers de données se trouvent dans `/public/data`.

Le fichier `header.json` reprend les données de l'entête.

Le fichier `introduction.json` reprend les données de la page d'accueil du site et de la première page du CV (l'introduction, les domaines de recherche...).

## index.json

Le fichier `index.json` liste les autres fichiers de données et leurs paramètres, structurés comme suit :

```ts
{
  "files": [
    {
      "name": string, // nom-du-fichier-sans-extension
      "title": string, // Titre à afficher
      "displayDates": boolean // Sert à afficher ou non les dates
    }
  ]
}
```

> ⚠️
> En cas d'ajout ou de suppression de fichiers, penser à modifier le fichier `index.json` !

## Schéma de données

### Rappel

`[...]` représente un tableau de plusieurs éléments, listés les uns à la suite des autres et séparés par des virgules.

`{...}` représente un objet possédant plusieurs propriétées, listées les unes à la suite des autres, séparées par de virgules `,` et caractérisées par une clef entre guillements `"` et suivie par deux points `:` (par exemple, `{ "title": "", "dates": ["", ""] }`).

> ⚠️
> Le dernier élément d'un tableau ou d'un objet ne doit **JAMAIS** être suvi d'une virgule

`"..."` représente une chaîne de caractères **obligatoirement** entre guillements `"`.

`true`/`false` représente un booléen.

> ⚠️
> Les fichiers `.json` ne peuveut pas contenir de commentaires.

### Types de données

#### Date

Une date est une `chaîne de caractères` au format `jj/mm/aaa` ou `mm/aaaa` ou `aaaa`.

Dans le cas d'une date simple, elle peut également contenir toute autre chaîne de caractères comme `à paraître` ou `en préparation`, auquel cas elle est traitée comme **postérieure** aux autres dates.

#### Période

Une période est un `objet` contenant obligatoirement une **date de début** et éventuellement une **date de fin** :

```ts
{
  "startDate": DATE,
  "endDate": DATE
}
```

Si la date de fin n'est pas renseignée, `depuis le` apparaît avant la date de début.

#### Détail

Un détail (complément d'information de l'élément principal) est un objet pouvant représenter n'importe quel type d'information. Il est composé ainsi des propriétés optionnelles suivantes :

```ts
{
  "key": string, // Clef à afficher pour caractériser la valeur
  "value": string || string[], // Chaîne de caractères OU tableau de chaînes de caractères
  "link": string // Lien vers l'élément de complément d'information
}
```

Si `key` est renseigné, sa valeur apparaît avant celle de `value`. Par exemple :

```json
{
  "value": "John Smith",
  "key": "en collaboration avec"
}
```

retournera `en collaboration avec John Smith`.

Sur le site, la valeur de `key` est affichée en doré.

### Contenu

```ts
{
  "dates": DATE[], // Tableau de Dates
  "periods": PERIODE[], // Tableau de Périodes
  "place": string, // Chaîne de caractère ; affiché avant les dates ou les périodes
  "label": string, // Label de l'élément
  "link": string, // Lien de l'élément principal
  "details": DETAIL[] // Tableau de Détails
}
```

> ⚠️
> **TOUJOURS** renseigner une date ou une période !

#### Section

```ts
[
  {
    "title": string, // Titre de la section
    "ordered": boolean, // Sert à afficher le contenu sous forme de liste ordonnée ou non dans le cv
    "break": boolean, // Sert à forcer l'affichage du début de la section sur la page suivante dans le CV
    "content": CONTENU[] // Tableau de Contenus
  }
]
```

## Balises html

### Italique

```html
<i></i>
```

### Gras

```html
<b></b>
```

### Exposant

```html
<sup></sup>
```

## Caractères spéciaux unicodes

### Espace insécable

```html
&nbsp; «&nbsp; &nbsp;» &nbsp;: &nbsp;; &nbsp;? &nbsp;!
```

### Tiret insécable

```html
&#8209;
```

## Conventions

### Publication

#### Livre

```html
en collaboration avec [Auteurs en toutes lettre], <i>[Titre du livre]</i>,
[Ville de l'Éditeur], [Éditeur] ([Année]), p.&nbsp;[première
Page]&#8209;[dernière Page]
```

#### Article

```html
en collaboration avec [Auteurs en toutes lettre], «&nbsp;[Titre de
l'article]&nbsp;», <i>[Revue]</i>, [Numéro] ([Année]), p.&nbsp;[première
Page]&#8209;[dernière Page]
```

#### Chapitre

```json
{
    "dates": ["[Année]"],
    "label": "[Titre du Chapitre]",
    "details": [
        {
            "key": "<i>in</i>",
            "value": "[Auteurs en toutes lettre], <i>[Titre du livre]</i>,
[Ville de l'Éditeur], [Éditeur] ([Année]), p.&nbsp;[première
Page]&#8209;[dernière Page]"
        }
    ]
}
```
