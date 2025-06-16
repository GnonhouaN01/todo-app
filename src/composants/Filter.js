import React from 'react';

function Filter({ currentFilter, setFilter }) {
  return (
    <div className="filter">
      <button 
        onClick={() => setFilter('all')} 
        className={currentFilter === 'all' ? 'active' : ''}
      >
        Toutes
      </button>
      <button 
        onClick={() => setFilter('active')} 
        className={currentFilter === 'active' ? 'active' : ''}
      >
        Actives
      </button>
      <button 
        onClick={() => setFilter('completed')} 
        className={currentFilter === 'completed' ? 'active' : ''}
      >
        Complétées
      </button>
    </div>
  );
}

export default Filter;