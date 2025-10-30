# Avency.Neos.CookieBot

> A package to integrate [Cookiebot](https://www.cookiebot.com/) into Neos.

## Authors & Sponsors

Benjamin Kentsch - benjamin.kentsch@avency.de  
Michael Gerdemann - michael.gerdemann@avency.de
Enes Erk - enes.erk@avency.de

The development and the public-releases of this package is generously sponsored by our employer https://www.avency.de.

## Installation

```
composer require avency/neos-cookiebot
```

## Configuration

Configure the key in Settings.yaml:

```
Avency:
  Neos:
    CookieBot:
      key: ''
```

Or add the mixin to your root page:

```
  superTypes:
    'Avency.Neos.CookieBot:Mixin.CookieBotKey': true
```

## Block scripts and load on consent

By default, [Cookiebot only rewrites the type of `<script>` tags](https://support.cookiebot.com/hc/en-us/articles/4405978132242-Manual-cookie-blocking#4). With the following helper script, you can also prevent the loading any (external) resources (e.g., scripts and styles) until the appropriate consent is given. After consent, the tags are automatically "unblocked".

### Installation / include

Import the script once in your project:

```javascript
import 'Packages/Plugins/Avency.Neos.CookieBot/Resources/Private/Assets/JavaScript/loadScripts';
```

### Usage

For resources that should be blocked, repklace the attributes with the corresponding data-attributes and set `type` to `text/plain`. Set the required consent category via  `data-cookieconsent` (e.g., "marketing").

#### Example: blocked script

```html
<script
  type="text/plain"
  data-cookieblock-type="text/javascript"
  data-cookieblock-src="https://example.com/script.js"
  data-cookieconsent="marketing"
/>
```

**Result after consent**: Once consent for the specified category is granted, the tags are automatically rewritten into loadable resources:

```html
<script
  type="text/javascript"
  src="https://example.com/script.js"
  data-cookieconsent="marketing"
/>
```

#### Example: blocked stylesheet

```html
<link
  rel="stylesheet"
  type="text/plain"
  data-cookieblock-type="text/css"
  data-cookieblock-href="https://example.com/styles.css"
  data-cookieconsent="marketing"
/>
```

**Result after consent**: Once consent for the specified category is granted, the tags are automatically rewritten into loadable resources:

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://example.com/styles.css"
  data-cookieconsent="marketing"
/>
```

### Notes

- `data-cookieconsent` defines the required consent category (e.g., "marketing"). You can specify multiple categories as a comma-separated list.
- `data-cookieblock-src` and `data-cookieblock-href` hold the blocked URL, which will be applied to `src` or `href` after consent.
- `data-cookieblock-type` define the target MIME types that will be set after unblocking.
- The initial `type="text/plain"` prevents execution or loading before consent.


## License

The MIT License (MIT). Please see [License File](./LICENSE.md) for more information.
