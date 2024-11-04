
import React, { useState } from 'react';
import Hog from './Hog';
import FilterControls from './Filter';

const HogList = ({ hogs }) => {
  const [isGreased, setIsGreased] = useState(false);
  const [sortBy, setSortBy] = useState('name');
  const [hiddenHogs, setHiddenHogs] = useState([]);

  const toggleHideHog = (hogName) => {
    setHiddenHogs(prev =>
      prev.includes(hogName)
        ? prev.filter(name => name !== hogName)
        : [...prev, hogName]
    );
  };

  const filteredAndSortedHogs = hogs
    .filter(hog => !hiddenHogs.includes(hog.name))
    .filter(hog => isGreased ? hog.greased : true)
    .sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      return a.weight - b.weight;
    });

  return (
    <div className="hog-list">
      <FilterControls
        isGreased={isGreased}
        setIsGreased={setIsGreased}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <div className="ui three stackable cards">
        {filteredAndSortedHogs.map((hog) => (
          <Hog
            key={hog.name}
            {...hog}
            onHide={() => toggleHideHog(hog.name)}
            isHidden={hiddenHogs.includes(hog.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default HogList;