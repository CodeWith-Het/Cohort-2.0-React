import React from 'react'

const BottomPart = () => {
  return (
     <section className="bottompart">
      <h3>A few more facts about us in numbers</h3>

      <ul className="stats-list">
        <li>
          <span className="stat-value">12 000+</span>
          <span className="stat-label">Hours of play annually</span>
        </li>

        <li>
          <span className="stat-value">89%</span>
          <span className="stat-label">Player Retention Rate</span>
        </li>

        <li>
          <span className="stat-value">1,200+</span>
          <span className="stat-label">Active Members</span>
        </li>

        <li>
          <span className="stat-value">125+</span>
          <span className="stat-label">Annual Tournaments</span>
        </li>
      </ul>
    </section>

  )
}

export default BottomPart
