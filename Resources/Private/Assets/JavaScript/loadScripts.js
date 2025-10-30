(function (document) {
    window.addEventListener('CookiebotOnAccept', function (e) {
        let consentElementQuery = [];

        if (Cookiebot.consent.marketing) {
            consentElementQuery.push('[data-cookieconsent*="marketing"][data-cookieblock-type]');
        }

        if (Cookiebot.consent.necessary) {
            consentElementQuery.push('[data-cookieconsent*="necessary"][data-cookieblock-type]');
        }

        if (Cookiebot.consent.preferences) {
            consentElementQuery.push('[data-cookieconsent*="preferences"][data-cookieblock-type]');
        }

        if (Cookiebot.consent.statistics) {
            consentElementQuery.push('[data-cookieconsent*="statistics"][data-cookieblock-type]');
        }

        if (consentElementQuery.length > 0) {
            const items = document.querySelectorAll(consentElementQuery.join(','));

            items.forEach((el) => {
                el.setAttribute('type', el.dataset.cookieblockType);
                el.removeAttribute('data-cookieblock-type');

                if (el.hasAttribute('data-cookieblock-href')) {
                    el.setAttribute('href', el.getAttribute('data-cookieblock-href'));
                    el.removeAttribute('data-cookieblock-href');
                }

                if (el.hasAttribute('data-cookieblock-src')) {
                    el.setAttribute('src', el.getAttribute('data-cookieblock-src'));
                    el.removeAttribute('data-cookieblock-src');
                }
            });
        }
    }, false);
})(document);
