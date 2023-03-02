import React, { useState } from 'react'
import { FilteredCases } from '../components';

const Cases = () => {
  const [active, setActive] = useState('all');

  const handleClick = (event) => {
    Array.from(event.target.parentElement.children).map(status => status.classList.remove('active'));
    event.target.classList.add('active');
    setActive(event.target.innerText);
  }

  return (
    <section className="cases">
      <div className="cases-statuses flex-centered">
        <div className="case-status active" onClick={handleClick}>All</div>
        <div className="case-status" onClick={handleClick}>Registered</div>
        <div className="case-status" onClick={handleClick}>Opened</div>
        <div className="case-status" onClick={handleClick}>Closed</div>
      </div>
      <FilteredCases active={active}/>
    </section>
  )
}

export default Cases;