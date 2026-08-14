/* =========================================================================
   Ninino — catálogo web
   Toda la información proviene de assets/js/products.js
   ========================================================================= */
(function () {
  'use strict';

  var MAX_SLIDES = 5;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function waLink(p) {
    var msg = 'Hola, me interesa recibir información sobre ' + p.name + ', modelo ' + p.model + '.';
    return 'https://wa.me/' + CONTACTO.whatsapp + '?text=' + encodeURIComponent(msg);
  }

  /* Orden de las diapositivas: hero, variantes reales, configuraciones, detalles. */
  function slidesOf(p) {
    var out = [{ src: p.images.hero.src, alt: p.images.hero.alt, position: p.images.hero.position }];
    var includeColorSlides = p.model !== 'BH-153';
    if (p.colors.length > 1 && includeColorSlides) {
      p.colors.forEach(function (c) {
        out.push({ src: c.image, alt: c.alt || (p.name + ' ' + c.name), position: '50% 50%', color: c.id });
      });
    }
    (p.images.gallery || []).forEach(function (g) {
      out.push({ src: g.src, alt: g.alt, position: g.position });
    });
    var seen = {};
    return out.filter(function (s) {
      if (seen[s.src]) return false;
      seen[s.src] = 1;
      return true;
    }).slice(0, MAX_SLIDES);
  }

  /* ------------------------------------------------------------ tarjetas */
  function renderCards() {
    var ul = document.getElementById('cards');
    ul.innerHTML = PRODUCTOS.map(function (p) {
      return '<li class="card" data-slug="' + p.slug + '">' +
        '<a href="#' + p.slug + '">' +
        '<img src="' + esc(p.images.hero.small || p.images.hero.src) + '" alt="' + esc(p.name) +
        '" width="640" height="640" loading="lazy" decoding="async">' +
        '<span class="card__t"><b>' + esc(p.name) + '</b><span>' + esc(p.model) + '</span></span>' +
        '</a></li>';
    }).join('') + '<li class="cards__empty" hidden>No encontramos ese producto. Prueba con “bañera”, “scooter” o un modelo como “BH-153”.</li>';
  }

  /* -------------------------------------------------------------- fichas */
  function renderProducts() {
    var host = document.getElementById('fichas');
    host.innerHTML = PRODUCTOS.map(function (p, i) {
      var slides = slidesOf(p);
      var multi = p.colors.length > 1;
      var colorSlides = p.model !== 'BH-153';

      var gal =
        '<div class="gallery" data-gallery role="group" aria-roledescription="carrusel" aria-label="Fotografías de ' + esc(p.name) + '">' +
          '<figure class="gallery__frame">' +
            slides.map(function (s, k) {
              return '<img src="' + esc(s.src) + '" alt="' + esc(s.alt) + '" width="900" height="900"' +
                ' style="object-position:' + esc(s.position || '50% 50%') + '"' +
                (k ? ' hidden loading="lazy"' : (i < 2 ? '' : ' loading="lazy"')) + ' decoding="async">';
            }).join('') +
            (slides.length > 1 ?
              '<div class="gallery__nav">' +
                '<button type="button" class="gallery__btn" data-prev aria-label="Imagen anterior de ' + esc(p.name) + '">' +
                  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5 8 12l7 7"/></svg></button>' +
                '<button type="button" class="gallery__btn" data-next aria-label="Imagen siguiente de ' + esc(p.name) + '">' +
                  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg></button>' +
              '</div>' : '') +
          '</figure>' +
          (slides.length > 1 ?
            '<div class="gallery__dots">' + slides.map(function (s, k) {
              return '<span class="gallery__dotwrap"><button type="button" class="gallery__dot" data-dot="' + k +
                '" aria-current="' + (k === 0) + '" aria-label="Ver imagen ' + (k + 1) + ' de ' + slides.length + '"></button></span>';
            }).join('') + '</div>' : '') +
        '</div>';

      var confs = (p.features && p.features.length) ?
        '<div class="confs-wrap" data-confview>' +
        '<h3 class="confs__title">' + esc(p.featuresTitle) + '</h3>' +
        '<figure class="confview__frame" aria-roledescription="visor" aria-label="' + esc(p.featuresTitle) + ' de ' + esc(p.name) + '">' +
        p.features.map(function (f, k) {
          return '<img src="' + esc(f.image) + '" alt="' + esc(f.alt) + '" width="700" height="525"' +
            (k ? ' hidden' : '') + ' loading="lazy" decoding="async">';
        }).join('') +
        '</figure>' +
        '<div class="chips" role="group" aria-label="Elegir ' + esc(p.featuresTitle.toLowerCase()) + ' de ' + esc(p.name) + '">' +
        p.features.map(function (f, k) {
          return '<button type="button" class="chip" data-conf="' + k + '" aria-pressed="' + (k === 0) + '">' +
            esc(f.name) + '</button>';
        }).join('') + '</div></div>' : '';

      var vars = multi ?
        '<div class="vars"><h3 class="confs__title">' + esc(p.featuresTitle) + '</h3>' +
        '<div class="vars__list" role="group" aria-label="Colores disponibles de ' + esc(p.name) + '">' +
        p.colors.map(function (c, k) {
          return '<button type="button" class="var" data-var="' + esc(c.id) + '"' +
            (colorSlides ? ' data-slide="' + (k + 1) + '"' : '') +
            ' aria-pressed="' + (k === 0) + '"><i style="background:' + esc(c.hex) + '" aria-hidden="true"></i>' +
            esc(c.name) + '</button>';
        }).join('') + '</div></div>' :
        '<div class="vars"><h3 class="confs__title">Color</h3><div class="vars__list">' +
          '<span class="var" aria-disabled="true"><i style="background:' + esc(p.colors[0].hex) + '" aria-hidden="true"></i>' +
          esc(p.colors[0].name) + '</span></div></div>';

      var datosRows = [
        ['Modelo', p.model + (p.modelAlt ? ' (' + p.modelAlt + ' en catálogo)' : '')],
        ['SKU', p.sku],
        ['Código de barras', p.barcode],
        ['Peso del producto', p.weight],
        ['Peso con caja', p.boxedWeight],
        ['Medidas de la caja', p.boxDimensions]
      ];
      if (multi) {
        datosRows = datosRows.slice(0, 1).concat(
          p.colors.map(function (c) { return ['SKU ' + c.name, c.sku]; }),
          p.colors.map(function (c) { return ['Código ' + c.name, c.barcode]; }),
          datosRows.slice(3)
        );
      }

      var datos = '<details class="datos"><summary>Datos del producto</summary><dl>' +
        datosRows.map(function (r) {
          return '<dt>' + esc(r[0]) + '</dt><dd>' + esc(r[1]) + '</dd>';
        }).join('') + '</dl>' +
        '<p class="datos__note">Las medidas y los pesos corresponden a la caja del producto.' +
        (p.note ? ' ' + esc(p.note) : '') + '</p></details>';

      return '<section class="product' + (i % 2 ? ' product--flip' : '') + ' reveal" id="' + esc(p.slug) +
        '" data-product="' + esc(p.slug) + '" aria-labelledby="t-' + esc(p.slug) + '">' +
        '<div class="wrap">' +
          '<header class="product__head">' +
            '<p class="eyebrow">Modelo ' + esc(p.model) + '</p>' +
            '<h2 id="t-' + esc(p.slug) + '">' + esc(p.name) + '</h2>' +
            '<p class="product__tag">' + esc(p.tagline) + '</p>' +
          '</header>' +
          '<div class="product__grid">' +
            '<div class="product__media">' + gal + confs + '</div>' +
            '<div class="product__info">' +
              vars +
              '<ul class="highs">' + p.highlights.map(function (h) {
                return '<li class="high"><h3>' + esc(h.title) + '</h3>' +
                  (h.text ? '<p>' + esc(h.text) + '</p>' : '') + '</li>';
              }).join('') + '</ul>' +
              '<div class="meta"><div class="meta__box"><b>Edad recomendada</b><span>' + esc(p.age) + '</span></div></div>' +
              '<div class="product__cta"><a class="btn btn--wa" href="' + waLink(p) + '" target="_blank" rel="noopener">' +
                '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.6 14.1c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.6-2.6-1.1-4.3-3.8-4.5-4-.1-.2-1-1.4-1-2.6s.6-1.8.9-2.1c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.3 0 .5l-.4.5-.3.3c-.1.1-.2.3-.1.5.1.2.6 1.1 1.4 1.8 1 .9 1.8 1.1 2 1.2.2.1.4.1.5-.1l.7-.9c.2-.2.3-.2.5-.1l2 .9c.2.1.4.2.4.3.1.2.1.6-.1 1.1Z"/></svg>' +
                'Solicitar información</a></div>' +
              datos +
            '</div>' +
          '</div>' +
        '</div></section>';
    }).join('');
  }

  /* ------------------------------------------------------------ galerías */
  function initGallery(g) {
    var imgs = Array.prototype.slice.call(g.querySelectorAll('.gallery__frame > img'));
    var dots = Array.prototype.slice.call(g.querySelectorAll('.gallery__dot'));
    if (imgs.length < 2) return;
    var at = 0;

    function go(n) {
      at = (n + imgs.length) % imgs.length;
      imgs.forEach(function (im, k) { im.hidden = k !== at; });
      dots.forEach(function (d, k) { d.setAttribute('aria-current', String(k === at)); });
      var grid = g.closest('.product__grid');
      if (grid) {
        grid.querySelectorAll('.var[data-slide]').forEach(function (b) {
          b.setAttribute('aria-pressed', String(Number(b.dataset.slide) === at));
        });
      }
    }

    g.querySelector('[data-prev]') && g.querySelector('[data-prev]').addEventListener('click', function () { go(at - 1); });
    g.querySelector('[data-next]') && g.querySelector('[data-next]').addEventListener('click', function () { go(at + 1); });
    dots.forEach(function (d) { d.addEventListener('click', function () { go(Number(d.dataset.dot)); }); });

    g.setAttribute('tabindex', '0');
    g.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { e.preventDefault(); go(at - 1); }
      if (e.key === 'ArrowRight') { e.preventDefault(); go(at + 1); }
    });

    var x0 = null, y0 = null;
    g.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; }, { passive: true });
    g.addEventListener('touchend', function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      var dy = e.changedTouches[0].clientY - y0;
      if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) go(at + (dx < 0 ? 1 : -1));
      x0 = null;
    }, { passive: true });

    var grid = g.closest('.product__grid');
    if (grid) {
      grid.querySelectorAll('.var[data-slide]').forEach(function (b) {
        b.addEventListener('click', function () { go(Number(b.dataset.slide)); });
      });
    }
  }

  /* -------------------------------------------------- visor de configuración */
  function initConfView(root) {
    var imgs = Array.prototype.slice.call(root.querySelectorAll('.confview__frame > img'));
    var chips = Array.prototype.slice.call(root.querySelectorAll('.chip[data-conf]'));
    if (imgs.length < 2) return;
    var at = 0;

    function go(n) {
      at = (n + imgs.length) % imgs.length;
      imgs.forEach(function (im, k) { im.hidden = k !== at; });
      chips.forEach(function (c, k) { c.setAttribute('aria-pressed', String(k === at)); });
    }

    chips.forEach(function (c) {
      c.addEventListener('click', function () { go(Number(c.dataset.conf)); });
    });

    var frame = root.querySelector('.confview__frame');
    var x0 = null, y0 = null;
    frame.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; }, { passive: true });
    frame.addEventListener('touchend', function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      var dy = e.changedTouches[0].clientY - y0;
      if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) go(at + (dx < 0 ? 1 : -1));
      x0 = null;
    }, { passive: true });
  }

  /* -------------------------------------------------------------- buscar */
  function initSearch() {
    var input = document.getElementById('q');
    var clear = document.getElementById('q-clear');
    var count = document.getElementById('q-count');
    var list = document.getElementById('cards');
    var empty = list.querySelector('.cards__empty');
    var cards = Array.prototype.slice.call(list.querySelectorAll('.card'));

    var index = {};
    PRODUCTOS.forEach(function (p) {
      index[p.slug] = [p.name, p.model, p.modelAlt || '', p.tagline]
        .concat(p.keywords || [], p.colors.map(function (c) { return c.name; }))
        .join(' ').toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/-/g, '');
    });

    function run() {
      var q = input.value.trim().toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/-/g, '');
      clear.hidden = !input.value;
      var hits = 0;
      cards.forEach(function (c) {
        var ok = !q || index[c.dataset.slug].indexOf(q) !== -1;
        c.hidden = !ok;
        if (ok) hits++;
      });
      list.classList.toggle('is-filtered', !!q);
      empty.hidden = hits !== 0;
      count.textContent = !q ? '' : (hits === 1 ? '1 producto encontrado' : hits + ' productos encontrados');
    }

    input.addEventListener('input', run);
    clear.addEventListener('click', function () { input.value = ''; run(); input.focus(); });
    run();
  }

  /* -------------------------------------------------- revelado + nav activa */
  function initMotion() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-in'); });
      return;
    }
    if (reduce) {
      document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-in'); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
        });
      }, { rootMargin: '0px 0px -12% 0px', threshold: 0.05 });
      document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
    }

    var links = Array.prototype.slice.call(document.querySelectorAll('[data-nav]'));
    var zones = [document.getElementById('productos'), document.getElementById('contacto')];
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (a) {
          a.setAttribute('aria-current', String(a.getAttribute('href') === '#' + en.target.id));
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    zones.forEach(function (z) { if (z) spy.observe(z); });
    document.querySelectorAll('.product').forEach(function (s) { spy.observe(s); });
  }

  /* ---------------------------------------------------------------- JSON-LD */
  function initSchema() {
    var base = location.href.split('#')[0].replace(/index\.html$/, '');
    var data = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Catálogo Ninino 2026',
      itemListElement: PRODUCTOS.map(function (p, i) {
        return {
          '@type': 'ListItem',
          position: i + 1,
          item: {
            '@type': 'Product',
            name: p.name,
            description: p.tagline,
            model: p.model,
            brand: { '@type': 'Brand', name: 'Ninino' },
            image: base + p.images.hero.src,
            url: base + '#' + p.slug
          }
        };
      })
    };
    var s = document.createElement('script');
    s.type = 'application/ld+json';
    s.textContent = JSON.stringify(data);
    document.head.appendChild(s);
  }

  /* ---------------------------------------- desplazamiento suave interno */
  function initSmoothScroll() {
    function scrollTo(el) {
      var head = document.getElementById('header');
      var offset = (head ? head.offsetHeight : 0) + 12;
      var top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: Math.max(0, top), behavior: reduce ? 'auto' : 'smooth' });
    }
    document.addEventListener('click', function (e) {
      var a = e.target.closest('a[href^="#"]');
      if (!a || a.getAttribute('href') === '#') return;
      var id = a.getAttribute('href').slice(1);
      var el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      scrollTo(el);
      if (history.pushState) history.pushState(null, '', '#' + id);
      /* deja el foco en el destino para lectores de pantalla y teclado */
      el.setAttribute('tabindex', '-1');
      el.focus({ preventScroll: true });
    });
  }

  /* ------------------------------------------------------------------ init */
  document.addEventListener('DOMContentLoaded', function () {
    renderCards();
    renderProducts();
    document.querySelectorAll('[data-gallery]').forEach(initGallery);
    document.querySelectorAll('[data-confview]').forEach(initConfView);
    initSearch();
    initMotion();
    initSchema();
    initSmoothScroll();

    var wa = document.getElementById('wa-general');
    if (wa) {
      wa.href = 'https://wa.me/' + CONTACTO.whatsapp + '?text=' +
        encodeURIComponent('Hola, me interesa recibir información sobre los productos Ninino.');
      wa.target = '_blank';
    }
  });
})();