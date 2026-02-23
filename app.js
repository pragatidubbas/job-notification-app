const routes = {
  "/": {
    title: "Dashboard",
    subtitle: "This section will be built in the next step.",
  },
  "/dashboard": {
    title: "Dashboard",
    subtitle: "This section will be built in the next step.",
  },
  "/saved": {
    title: "Saved",
    subtitle: "This section will be built in the next step.",
  },
  "/digest": {
    title: "Digest",
    subtitle: "This section will be built in the next step.",
  },
  "/settings": {
    title: "Settings",
    subtitle: "This section will be built in the next step.",
  },
  "/proof": {
    title: "Proof",
    subtitle: "This section will be built in the next step.",
  },
};

function getRoute(pathname) {
  if (routes[pathname]) {
    return routes[pathname];
  }
  if (pathname === "/") {
    return routes["/"];
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

  const container = document.createElement("article");
  container.className = "card";

  const header = document.createElement("header");
  header.className = "card__header";

  const heading = document.createElement("h2");
  heading.className = "heading-lg";
  heading.textContent = route.title;

  const bodyP = document.createElement("p");
  bodyP.className = "body-md text-max-width";
  bodyP.textContent = route.subtitle;

  header.appendChild(heading);
  container.appendChild(header);
  container.appendChild(bodyP);
  outlet.appendChild(container);

  updateActiveNav(pathname, !!route.isNotFound);
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
    if (route === pathname || (pathname === "/" && route === "/dashboard")) {
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
      if (currentPath === route || (route === "/dashboard" && currentPath === "/")) {
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

