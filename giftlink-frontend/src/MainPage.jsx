import React, { useEffect, useState } from 'react';

// Main page component: fetch and display gifts from backend
export function MainPage() {
  const [gifts, setGifts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/gifts')
      .then((res) => res.json())
      .then((data) => {
        setGifts(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <div>Loading gifts...</div>;
  }

  return (
    <section className="gl-main">
      <h2>Latest Gifts</h2>
      <div className="gl-grid" id="glGiftGrid">
        {gifts.map((g) => (
          <article className="gl-card" key={g._id || g.title}>
            <img src={g.image || '/placeholder.png'} alt={g.title} className="gl-image" />
            <div className="gl-content">
              <h3 className="gl-title">{g.title}</h3>
              <p className="gl-desc">{g.description || ''}</p>
              <p className="gl-meta">{g.location || ''} • {g.category || ''} • {g.condition || ''}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default MainPage;
