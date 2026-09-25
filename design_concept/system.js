/* Open Hall — three behaviours, nothing more.
   1. Header hairline appears once the page has moved.
   2. Sections reveal on scroll, staggered 90ms, once.
   3. Mobile navigation sheet.
   Everything degrades to a working page if this file never loads. */

(() => {
  const root = document.documentElement;

  /* 1. Scroll state -------------------------------------------------------- */
  const setScrolled = () => {
    if (window.scrollY > 24) root.setAttribute("data-scrolled", "");
    else root.removeAttribute("data-scrolled");
  };
  setScrolled();
  addEventListener("scroll", setScrolled, { passive: true });

  /* 2. Reveals ------------------------------------------------------------- */
  const targets = document.querySelectorAll("[data-reveal]");
  if (!("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-in"));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    targets.forEach((el, i) => {
      // Stagger only within the first screenful of each group.
      const group = el.closest("[data-reveal-group]");
      if (group) {
        const peers = [...group.querySelectorAll("[data-reveal]")];
        el.style.setProperty("--delay", `${Math.min(peers.indexOf(el), 5) * 90}ms`);
      }
      io.observe(el);
    });
  }

  /* 3. Navigation sheet ---------------------------------------------------- */
  const toggle = document.querySelector(".nav__toggle");
  const sheet = document.querySelector(".nav__sheet");
  if (toggle && sheet) {
    const setOpen = (open) => {
      sheet.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.querySelector("span").textContent = open ? "Close" : "Menu";
      document.body.style.overflow = open ? "hidden" : "";
    };
    toggle.addEventListener("click", () => setOpen(!sheet.classList.contains("is-open")));
    sheet.addEventListener("click", (e) => {
      if (e.target.closest("a")) setOpen(false);
    });
    addEventListener("keydown", (e) => {
      if (e.key === "Escape" && sheet.classList.contains("is-open")) setOpen(false);
    });
  }
})();
