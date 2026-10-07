/* ==========================================================================
   ALCOLISEO — interacciones
   No edites este archivo para cambiar contenido: usa data.js
   ========================================================================== */
(function () {
  "use strict";
  var D = window.ALCOLISEO;
  if (!D) return;
  var C = D.config;
  var doc = document.documentElement;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  var get = function (obj, path) { return path.split(".").reduce(function (o, k) { return o && o[k]; }, obj); };
  var isExternal = function (u) { return /^(https?:|mailto:|tel:)/.test(u); };

  doc.classList.add("js");

  /* ---------- Temporada ---------- */
  var season = D.season;
  if (season === "auto") {
    var now = new Date(), m = now.getMonth(), d = now.getDate();
    season = (m === 9 || (m === 10 && d <= 3)) ? "halloween" : "normal";
  }
  var halloween = season === "halloween";
  document.body.classList.toggle("is-halloween", halloween);
  document.querySelectorAll("[data-logo]").forEach(function (img) {
    img.src = halloween ? "assets/logo-halloween.webp" : "assets/logo.webp";
  });

  /* ---------- Links y textos desde data.js ---------- */
  C.whatsappUrl = C.whatsapp ? "https://wa.me/" + C.whatsapp : "";
  document.querySelectorAll("[data-href]").forEach(function (a) {
    var url = C[a.getAttribute("data-href")];
    if (!url) { // link vacío en data.js → se oculta el botón
      var li = a.closest("li");
      (li && li.parentElement && li.parentElement.classList.contains("footer__links") ? li : a).hidden = true;
      return;
    }
    a.href = url;
    if (isExternal(url) || /\.pdf$/i.test(url)) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
  });
  document.querySelectorAll("[data-text]").forEach(function (el) {
    var v = get(C, el.getAttribute("data-text"));
    if (v) el.textContent = v;
  });

  /* ---------- Render: eventos ---------- */
  var evWrap = document.getElementById("events");
  if (evWrap) {
    evWrap.innerHTML = D.events.map(function (ev, i) {
      var href = ev.ticketUrl || ev.reservationUrl || C.reservationUrl;
      var label = ev.ticketUrl ? "BOLETOS" : "RESERVAR";
      return '<li class="event"><article class="event__card">' +
        '<img src="' + esc(ev.image) + '" alt="' + esc(ev.title + " — " + ev.day) + '" loading="lazy">' +
        (ev.tag ? '<span class="event__tag">' + esc(ev.tag) + "</span>" : "") +
        '<span class="event__num">' + String(i + 1).padStart(2, "0") + "</span>" +
        '<div class="event__body"><p class="eyebrow">' + esc(ev.day) + '</p><p class="event__date">' + esc(ev.date) + "</p>" +
        '<h3 class="event__title">' + esc(ev.title) + '</h3><p class="event__music">' + esc(ev.music) + "</p>" +
        '<div class="event__foot">' + (ev.time ? '<span class="event__time"><svg class="ic"><use href="#i-clock"/></svg>' + esc(ev.time) + "</span>" : "<span></span>") +
        '<a class="event__cta" href="' + esc(href) + '" target="_blank" rel="noopener noreferrer" aria-label="' + esc(label + " — " + ev.title) + '">' + label + "</a></div></div>" +
        "</article></li>";
    }).join("");
  }

  /* ---------- Render: bebidas ---------- */
  var ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];
  var drWrap = document.getElementById("drinks");
  if (drWrap) {
    drWrap.innerHTML = D.drinks.map(function (dr, i) {
      return '<li class="drink"><article>' +
        '<div class="drink__img"><img src="' + esc(dr.image) + '" alt="' + esc(dr.name) + '" loading="lazy">' +
        '<span class="drink__num">N° ' + (ROMAN[i] || i + 1) + '</span><span class="drink__bar" style="background:' + esc(dr.accent) + '"></span></div>' +
        '<div class="drink__row"><h3>' + esc(dr.name) + "</h3>" + (dr.price ? '<span class="drink__price">' + esc(dr.price) + "</span>" : "") + "</div>" +
        "<p>" + esc(dr.description) + "</p></article></li>";
    }).join("");
  }

  /* ---------- Render: collage + social ---------- */
  var collage = document.getElementById("collage");
  if (collage) {
    // La nota roja es el primer hijo; las fotos quedan como nth-child(2..7) para el layout del CSS
    D.experience.forEach(function (g) {
      var div = document.createElement("div");
      div.className = "collage__item";
      div.innerHTML = '<img src="' + esc(g.src) + '" alt="' + esc(g.alt) + '" loading="lazy">';
      collage.appendChild(div);
    });
  }
  var social = document.getElementById("social");
  if (social) {
    social.innerHTML = D.social.map(function (g) {
      return '<li><a class="social__item" href="' + esc(C.instagramUrl) + '" target="_blank" rel="noopener noreferrer" aria-label="' + esc("Ver en Instagram: " + g.alt) + '">' +
        '<img src="' + esc(g.src) + '" alt="' + esc(g.alt) + '" loading="lazy"><span class="hover"><svg class="ic"><use href="#i-ig"/></svg></span></a></li>';
    }).join("");
  }

  /* ---------- Render: horarios ---------- */
  var hours = document.getElementById("hours");
  if (hours) {
    hours.innerHTML = C.openingHours.map(function (h) {
      var closed = /cerrado/i.test(h.hours);
      return "<div><dt>" + esc(h.days) + '</dt><dd class="' + (closed ? "closed" : "") + '">' + esc(h.hours) + (h.note ? "<small>" + esc(h.note) + "</small>" : "") + "</dd></div>";
    }).join("");
  }

  /* ---------- Marquees ---------- */
  var TICKERS = {
    ticker: halloween
      ? ["RESERVA TU MESA", "HALLOWEEN EN EL COLISEO", "VIERNES DE SALSA EN VIVO", "GÉNOVA 59 · ZONA ROSA", "LOS MUERTOS TAMBIÉN FESTEJAN"]
      : ["RESERVA TU MESA", "VIERNES DE SALSA EN VIVO", "GÉNOVA 59 · ZONA ROSA", "NOCHES LEGENDARIAS"],
    manifesto: ["TODOS LOS CAMINOS LLEVAN A ROMA", "GÉNOVA 59", "ZONA ROSA", "RESERVA TU MESA"],
  };
  document.querySelectorAll("[data-marquee]").forEach(function (t) {
    var items = TICKERS[t.getAttribute("data-marquee")] || [];
    var html = items.map(function (s) { return "<span>" + esc(s) + "</span>"; }).join("");
    t.innerHTML = html + html; // dos copias para el loop infinito
  });

  /* ---------- Mapa: iframe solo cuando el sitio corre en su propio dominio ---------- */
  var mapbox = document.getElementById("mapbox");
  var topLevel = (function () { try { return window.self === window.top; } catch (e) { return false; } })();
  if (mapbox && C.googleMapsEmbed && topLevel && location.protocol.indexOf("http") === 0) {
    var ifr = document.createElement("iframe");
    ifr.src = C.googleMapsEmbed;
    ifr.title = "Mapa — Alcoliseo, Génova 59, Zona Rosa";
    ifr.loading = "lazy";
    ifr.referrerPolicy = "no-referrer-when-downgrade";
    mapbox.insertBefore(ifr, mapbox.firstChild);
    mapbox.classList.add("has-map");
    var img = mapbox.querySelector(":scope > img");
    if (img) img.remove();
  }

  /* ---------- Navbar ---------- */
  var nav = document.getElementById("nav");
  var bar = document.getElementById("reserve-bar");
  function onScrollUI() {
    var y = window.scrollY;
    nav.classList.toggle("is-scrolled", y > 40);
    if (bar) {
      var nearBottom = y + innerHeight > document.documentElement.scrollHeight - innerHeight * 1.1;
      var on = y > innerHeight * 0.85 && !nearBottom;
      bar.classList.toggle("is-on", on);
      bar.setAttribute("aria-hidden", on ? "false" : "true");
      bar.querySelector("a").tabIndex = on ? 0 : -1;
    }
  }

  /* ---------- Menú mobile ---------- */
  var panel = document.getElementById("menu-panel");
  var burger = document.getElementById("burger");
  function setMenu(open) {
    panel.hidden = !open;
    burger.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
    if (open) panel.querySelector("a").focus(); else burger.focus();
  }
  burger.addEventListener("click", function () { setMenu(true); });
  document.getElementById("menu-close").addEventListener("click", function () { setMenu(false); });
  panel.querySelectorAll(".menu__list a").forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !panel.hidden) setMenu(false); });

  /* ---------- Flechas de carruseles ---------- */
  document.querySelectorAll("[data-scroll]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var el = document.getElementById(btn.getAttribute("data-scroll"));
      var dir = Number(btn.getAttribute("data-dir"));
      el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 740), behavior: reduce ? "auto" : "smooth" });
    });
  });

  /* ---------- Video (vertical 9:16) ---------- */
  function makeVideo(src, poster) {
    var v = document.createElement("video");
    v.muted = true; v.loop = true; v.autoplay = true; v.playsInline = true;
    v.setAttribute("muted", ""); v.setAttribute("playsinline", ""); v.setAttribute("aria-hidden", "true");
    if (poster) v.poster = poster;
    v.src = src;
    v.addEventListener("error", function () { v.remove(); });
    var p = v.play && v.play();
    if (p && p.catch) p.catch(function () {});
    return v;
  }
  var saveData = navigator.connection && navigator.connection.saveData;
  var canVideo = (C.heroVideoWide || C.heroVideoMobile || C.heroVideo) && !reduce && !saveData;
  var isMobile = !window.matchMedia("(min-width: 768px)").matches;
  // < 768px: video vertical (formato nativo del celular) · ≥ 768px: versión horizontal
  var videoSrc = isMobile ? (C.heroVideoMobile || C.heroVideoWide || C.heroVideo) : (C.heroVideoWide || C.heroVideoMobile || C.heroVideo);
  var posterSrc = isMobile ? "assets/hero-alcoliseo.jpg" : "assets/hero-alcoliseo-wide.jpg";
  if (canVideo) {
    setTimeout(function () {
      var slot = document.getElementById("hero-bg-slot");
      if (slot) slot.appendChild(makeVideo(videoSrc, posterSrc));
    }, 500);
    var mid = document.getElementById("midnight-slot");
    if (mid && "IntersectionObserver" in window) {
      var mo = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) { mid.appendChild(makeVideo(videoSrc, isMobile ? "assets/midnight.jpg" : posterSrc)); mo.disconnect(); }
      }, { rootMargin: "200px 0px" });
      mo.observe(mid);
    }
  }

  /* ---------- Reveal on scroll (solo lo que está fuera de pantalla al cargar) ---------- */
  if (!reduce && "IntersectionObserver" in window) {
    var targets = document.querySelectorAll(".rv, .tr, .event, .drink, .collage__item, .social li, .sticker");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        var parent = el.parentElement;
        var idx = parent ? Array.prototype.indexOf.call(parent.children, el) : 0;
        if (/event|drink|collage__item/.test(el.className) || el.closest(".social")) el.style.transitionDelay = (idx % 4) * 0.07 + "s";
        el.classList.add("in");
        el.classList.remove("pre");
        io.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    targets.forEach(function (el) {
      var r = el.getBoundingClientRect();
      var visible = r.top < innerHeight && r.bottom > 0 && r.left < innerWidth && r.right > 0;
      if (visible) return; // lo que ya se ve al cargar se queda visible
      el.classList.add("pre");
      io.observe(el);
    });
  }

  /* ---------- Parallax ligero ---------- */
  var pxEls = reduce ? [] : Array.prototype.slice.call(document.querySelectorAll("[data-px]"));
  function parallax() {
    var vh = innerHeight;
    pxEls.forEach(function (el) {
      var host = el.closest("section") || el;
      var r = host.getBoundingClientRect();
      if (r.bottom < -100 || r.top > vh + 100) return;
      var speed = Number(el.getAttribute("data-px"));
      var center = r.top + r.height / 2 - vh / 2;
      var base = "";
      el.style.transform = "translate3d(0," + (-center * speed).toFixed(1) + "px,0)" + base;
    });
  }

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { onScrollUI(); parallax(); ticking = false; });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  onScrollUI(); parallax();
})();
