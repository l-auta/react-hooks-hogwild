import React, { useState } from 'react';

const Hog = ({
  name,
  image,
  specialty,
  weight,
  greased,
  highest = '',
  onHide
}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className="ui card eight wide column"
      onClick={() => setShowDetails(!showDetails)}
      style={{ cursor: 'pointer' }}
    >
      <div className="image hog-img-container">
        <img
          className="hog-img"
          src={image}
          alt={name}
        />
      </div>
      <div className="content details-container">
        <div className="header">
          <h3>{name}</h3>
        </div>
        {showDetails && (
          <div className="description">
            <p><strong>Specialty:</strong> {specialty}</p>
            <p><strong>Weight:</strong> {weight}</p>
            <p><strong>Greased:</strong> {greased ? "Yes" : "No"}</p>
            <p><strong>Highest Medal:</strong> {highest}</p>
          </div>
        )}
      </div>
      {onHide && (
        <div className="extra content" onClick={(e) => e.stopPropagation()}>
          <button
            className="ui button"
            onClick={onHide}
          >
            Hide Hog
          </button>
        </div>
      )}
    </div>
  );
};

export default Hog;