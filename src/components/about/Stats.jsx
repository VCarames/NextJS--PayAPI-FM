function Stats() {
  return (
    <section className="stats-section">
      <h2 className="visually-hidden">Company Statistics</h2>
      <ul className="stats-section__list" role="list">
        <li className="stats-section__list-item" role="listitem">
          <span className="stats-section__list-text secondary__text">
            Team Members
          </span>
          <span className="stats-section__list-stat">300+</span>
        </li>
        <li className="stats-section__list-item" role="listitem">
          <span className="stats-section__list-text secondary__text">
            Offices in the US
          </span>
          <span className="stats-section__list-stat">3</span>
        </li>
        <li className="stats-section__list-item" role="listitem">
          <span className="stats-section__list-text secondary__text">
            Transactions analyzed
          </span>
          <span className="stats-section__list-stat">10M+</span>
        </li>
      </ul>
    </section>
  );
}

export default Stats;
