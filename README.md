# Avency.Neos.CookieBot

> A package to integrate [Cookiebot](https://www.cookiebot.com/) into Neos.

## Authors & Sponsors

Benjamin Kentsch - benjamin.kentsch@avency.de  
Michael Gerdemann - michael.gerdemann@avency.de

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
## License

The MIT License (MIT). Please see [License File](./LICENSE.md) for more information.
