import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BidDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { item } = location.state || { item: {} };

  if (!item) {
    return <div>No item selected</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => navigate('/home')}>Back to catalog</button>
      <h1>{item.name}</h1>
      <img src={item.imageUrl} alt="Bid Item" />
      <div>
        <h2>Description</h2>
        <p>{item.description}</p>
      </div>
      <div>
        <h2>Reviews</h2>
        <ul>
          {item.reviews.map((review, index) => (
            <li key={index}><strong>{review.user}</strong> - {review.text}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Bids</h2>
        <ul>
          {item.bids.map((bid, index) => (
            <li key={index}>{bid}</li>
          ))}
        </ul>
      </div>
      <button>Bid now</button>
    </div>
  );
};

export default BidDetails;