export async function renderMainPage(container) {
  if (!container) return;
  container.innerHTML = `
    <section class="gl-main">
      <h2>Latest Gifts</h2>
      <div class="gl-grid" id="glGiftGrid"></div>
    </section>
  `;

  const grid = container.querySelector('#glGiftGrid');
  try {
    const res = await fetch('/api/gifts');
    const gifts = await res.json();
    if (Array.isArray(gifts) && gifts.length > 0) {
      grid.innerHTML = gifts.map(g => `
        <article class="gl-card">
          <img src="${g.image || '/placeholder.png'}" alt="${g.title}" class="gl-image"/>
          <div class="gl-content">
            <h3 class="gl-title">${g.title}</h3>
            <p class="gl-desc">${g.description || ''}</p>
            <p class="gl-meta">${g.location || ''} • ${g.category || ''} • ${g.condition || ''}</p>
          </div>
        </article>
      `).join('');
    } else {
      grid.innerHTML = '<p>No gifts available at the moment.</p>';
    }
  } catch (err) {
    grid.innerHTML = '<p>Failed to load gifts. Please try again later.</p>';
  }
}
