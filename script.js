/* Center Finder privacy site: menu, table labels, contents highlight. */
(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  const desktopNav = window.matchMedia("(min-width: 1081px)");
  const desktopToc = window.matchMedia("(min-width: 961px)");
  const tocDetails = document.getElementById("tocDetails");

  const setMenuOpen = (open) => {
    if (!toggle || !links) return;
    links.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    toggle.textContent = open ? "✕" : "☰";
    document.body.classList.toggle("nav-open", open);
  };

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      setMenuOpen(!links.classList.contains("open"));
    });
    links.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => setMenuOpen(false));
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    });
    const onNavMq = () => {
      if (desktopNav.matches) setMenuOpen(false);
    };
    if (desktopNav.addEventListener) desktopNav.addEventListener("change", onNavMq);
    else desktopNav.addListener(onNavMq);
  }

  if (tocDetails) {
    const syncToc = () => {
      tocDetails.open = desktopToc.matches;
    };
    if (desktopToc.addEventListener) desktopToc.addEventListener("change", syncToc);
    else desktopToc.addListener(syncToc);
    syncToc();
  }

  document.querySelectorAll("table").forEach((table) => {
    const headers = [...table.querySelectorAll("thead th")].map((th) =>
      th.textContent.replace(/\s+/g, " ").trim()
    );
    table.querySelectorAll("tbody tr").forEach((row) => {
      [...row.children].forEach((cell, index) => {
        if (headers[index] && !cell.getAttribute("data-label")) {
          cell.setAttribute("data-label", headers[index]);
        }
      });
    });
  });

  const sections = [...document.querySelectorAll("section.policy-section[id]")];
  const tocLinks = [...document.querySelectorAll(".toc a")];

  const setActive = (id) => {
    tocLinks.forEach((link) => {
      const href = link.getAttribute("href") || "";
      link.classList.toggle("active", href === "#" + id);
    });
  };

  if (sections.length && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0.01 }
    );
    sections.forEach((section) => observer.observe(section));
  }
})();
