import React from 'react';

const FilterControls = ({ isGreased, setIsGreased, sortBy, setSortBy }) => {
  return (
    <div className="ui segment">
      <div className="ui form">
        <div className="fields">
          <div className="field">
            <label>Sort by</label>
            <select
              className="ui dropdown"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="name">Name</option>
              <option value="weight">Weight</option>
            </select>
          </div>
          <div className="field">
            <div className="ui checkbox">
              <input
                type="checkbox"
                checked={isGreased}
                onChange={(e) => setIsGreased(e.target.checked)}
              />
              <label>Greased Pigs Only?</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterControls;