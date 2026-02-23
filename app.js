const routes = {
  "/": {
    title: "Stop Missing The Right Jobs.",
    subtitle: "Precision-matched job discovery delivered daily at 9AM.",
    kind: "landing",
  },
  "/dashboard": {
    title: "Dashboard",
    subtitle: "No jobs yet. In the next step, you will load a realistic dataset.",
    kind: "dashboard",
  },
  "/settings": {
    title: "Settings",
    subtitle: "Placeholder preferences for how job tracking will behave.",
    kind: "settings",
  },
  "/saved": {
    title: "Saved",
    subtitle: "Clean, premium empty state. No saved roles yet.",
    kind: "saved",
  },
  "/digest": {
    title: "Digest",
    subtitle: "Daily summary for your job search will appear here in a later step.",
    kind: "digest",
  },
  "/proof": {
    title: "Proof",
    subtitle: "Placeholder area for collecting artifacts and evidence.",
    kind: "proof",
  },
};

function getRoute(pathname) {
  if (routes[pathname]) {
    return routes[pathname];
  }
  return {
    title: "Page Not Found",
    subtitle: "The page you are looking for does not exist.",
    isNotFound: true,
  };
}

function renderRoute(pathname) {
  const route = getRoute(pathname);
  const outlet = document.getElementById("route-outlet");
  const ctxTitle = document.getElementById("context-title");
  const ctxSubtitle = document.getElementById("context-subtitle");

  if (!outlet || !ctxTitle || !ctxSubtitle) {
    return;
  }

  ctxTitle.textContent = route.title;
  ctxSubtitle.textContent = route.subtitle;

  outlet.innerHTML = "";

  if (route.isNotFound) {
    outlet.innerHTML = `
      <article class="card">
        <header class="card__header">
          <h2 class="heading-lg">Page Not Found</h2>
        </header>
        <p class="body-md text-max-width">
          The page you are looking for does not exist.
        </p>
      </article>
    `;
    updateActiveNav(pathname, true);
    return;
  }

  if (route.kind === "landing") {
    outlet.innerHTML = `
      <article class="card">
        <header class="card__header">
          <h2 class="heading-lg">Job Notification Tracker</h2>
        </header>
        <div class="card__body">
          <button class="btn btn--primary" type="button" data-cta-settings>
            Start Tracking
          </button>
        </div>
      </article>
    `;
    const cta = outlet.querySelector("[data-cta-settings]");
    if (cta) {
      cta.addEventListener("click", () => {
        handleNavigation("/settings", false);
      });
    }
    updateActiveNav(pathname, false);
    return;
  }

  if (route.kind === "settings") {
    outlet.innerHTML = `
      <article class="card">
        <header class="card__header">
          <h2 class="heading-lg">Preferences</h2>
          <p class="body-sm card__subtitle">
            These fields are placeholders only. No data is saved in this step.
          </p>
        </header>
        <div class="card__body stack stack--24">
          <section class="stack stack--16">
            <h3 class="heading-md">Role keywords</h3>
            <label class="field">
              <span class="field__label body-sm">Keywords</span>
              <input class="field__input" type="text" placeholder="e.g. Product Manager, Data Analyst" />
            </label>
          </section>

          <section class="stack stack--16">
            <h3 class="heading-md">Preferred locations</h3>
            <label class="field">
              <span class="field__label body-sm">Locations</span>
              <input class="field__input" type="text" placeholder="e.g. London, Berlin, Remote Europe" />
            </label>
          </section>

          <section class="stack stack--16">
            <h3 class="heading-md">Mode</h3>
            <div class="stack stack--8 body-sm">
              <label class="check-item">
                <input type="radio" name="mode" value="remote" />
                <span>Remote</span>
              </label>
              <label class="check-item">
                <input type="radio" name="mode" value="hybrid" />
                <span>Hybrid</span>
              </label>
              <label class="check-item">
                <input type="radio" name="mode" value="onsite" />
                <span>Onsite</span>
              </label>
            </div>
          </section>

          <section class="stack stack--16">
            <h3 class="heading-md">Experience level</h3>
            <label class="field">
              <span class="field__label body-sm">Level</span>
              <select class="field__input">
                <option value="">Select a level</option>
                <option value="entry">Entry</option>
                <option value="mid">Mid</option>
                <option value="senior">Senior</option>
                <option value="lead">Lead</option>
              </select>
            </label>
          </section>
        </div>
      </article>
    `;
    updateActiveNav(pathname, false);
    return;
  }

  if (route.kind === "dashboard") {
    outlet.innerHTML = `
      <article class="card">
        <header class="card__header">
          <h2 class="heading-lg">Dashboard</h2>
        </header>
        <p class="body-md text-max-width">
          No jobs yet. In the next step, you will load a realistic dataset.
        </p>
      </article>
    `;
    updateActiveNav(pathname, false);
    return;
  }

  if (route.kind === "saved") {
    outlet.innerHTML = `
      <article class="card">
        <header class="card__header">
          <h2 class="heading-lg">Saved jobs</h2>
        </header>
        <p class="body-md text-max-width">
          No saved jobs yet. When you save roles, they will appear here.
        </p>
      </article>
    `;
    updateActiveNav(pathname, false);
    return;
  }

  if (route.kind === "digest") {
    outlet.innerHTML = `
      <article class="card">
        <header class="card__header">
          <h2 class="heading-lg">Daily digest</h2>
        </header>
        <p class="body-md text-max-width">
          No digests generated yet. Daily summaries will be introduced in a later step.
        </p>
      </article>
    `;
    updateActiveNav(pathname, false);
    return;
  }

  if (route.kind === "proof") {
    outlet.innerHTML = `
      <article class="card">
        <header class="card__header">
          <h2 class="heading-lg">Proof</h2>
        </header>
        <p class="body-md text-max-width">
          This page will collect artifacts and evidence in a later step.
        </p>
      </article>
    `;
    updateActiveNav(pathname, false);
    return;
  }

  updateActiveNav(pathname, false);
}

function updateActiveNav(pathname, isNotFound) {
  const links = document.querySelectorAll(".main-nav__link");
  links.forEach((link) => {
    link.classList.remove("main-nav__link--active");
  });

  if (isNotFound) {
    return;
  }

  let matched = null;
  links.forEach((link) => {
    const route = link.getAttribute("data-route");
    if (route === pathname) {
      matched = link;
    }
  });

  if (matched) {
    matched.classList.add("main-nav__link--active");
  }
}

function handleNavigation(pathname, replace) {
  if (replace) {
    window.history.replaceState({}, "", pathname);
  } else {
    window.history.pushState({}, "", pathname);
  }
  renderRoute(pathname);
}

function setupNav() {
  const menu = document.getElementById("main-nav-menu");
  const toggle = document.querySelector(".main-nav__toggle");

  document.addEventListener("click", (event) => {
    const target = event.target;

    if (target instanceof HTMLAnchorElement && target.classList.contains("main-nav__link")) {
      event.preventDefault();
      const route = target.getAttribute("data-route");
      if (!route) return;

      const currentPath = window.location.pathname || "/";
      if (currentPath === route) {
        return;
      }

      handleNavigation(route, false);

      if (menu && toggle && window.innerWidth <= 768) {
        menu.classList.remove("main-nav__menu--open");
        toggle.setAttribute("aria-expanded", "false");
      }
      return;
    }

    if (toggle && target === toggle) {
      if (!menu) return;
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      if (isOpen) {
        menu.classList.remove("main-nav__menu--open");
      } else {
        menu.classList.add("main-nav__menu--open");
      }
    }
  });

  window.addEventListener("popstate", () => {
    renderRoute(window.location.pathname || "/");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupNav();
  renderRoute(window.location.pathname || "/");
});

