export function renderNavbar(container) {
  if (!container) return;
  container.innerHTML = `
    <nav class="gl-navbar">
      <a href="home.html" class="gl-nav-link">Home</a>
      <a href="listings.html" class="gl-nav-link">Gifts</a>
    </nav>
  `;
}
