import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Import CSS for styling

const items = [
  {
    id: 1,
    name: 'Sony Black Headphones',
    imageUrl: 'https://via.placeholder.com/400x300.png?text=Bid+Item+Image',
    description: 'Immerse yourself in pristine sound quality with the Sony Black Headphones...',
    currentBid: 157,
    minimumBid: 100,
    reviews: [
      { user: 'Kristin Watson', text: 'These headphones are a game-changer for my daily commute. The noise-canceling feature works like a charm.' },
      { user: 'Jenny Wilson', text: 'I\'m blown away by the sound clarity these headphones offer.' },
      { user: 'Dario Gomez', text: 'As a frequent flyer, these headphones have become my must-have travel companion.' }
    ],
    bids: [
      'The Floor bids $157',
      'Internet Bidder bids $145',
      'The Floor bids $140',
      'Internet Bidder bids $132'
    ]
  },
  // Add more items as needed
];

const Home = () => {
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    navigate('/bid-details', { state: { item } });
  };

  return (
    <div>
      <header className="header">
        <div className="logo">Genix Auctions</div>
        <nav>
          <ul>
            <li><a href="#auctions">Auctions</a></li>
            <li><a href="#bidding">Bidding</a></li>
            <li><a href="#about">About us</a></li>
          </ul>
        </nav>
        <div className="profile">
          <img src="https://via.placeholder.com/50" alt="User profile" className="profile-img" />
          <div className="profile-dropdown">
            <p>Olivia Rhye</p>
            <p>olivia@untitledui.com</p>
            <ul>
              <li>View profile</li>
              <li>Settings</li>
              <li>My bids</li>
              <li>Credit cards</li>
              <li>My Auctions</li>
              <li>Invite colleagues</li>
              <li>Notifications</li>
              <li>Community</li>
              <li>Support</li>
              <li>API</li>
              <li>Log out</li>
            </ul>
          </div>
        </div>
      </header>
      <main style={{ padding: '20px' }}>
        <h1>Welcome Olivia!</h1>
        <div className="catalog-container">
          {items.map((item) => (
            <div
              key={item.id}
              className="catalog-item"
              onMouseEnter={(e) => e.currentTarget.classList.add('highlight')}
              onMouseLeave={(e) => e.currentTarget.classList.remove('highlight')}
            >
              <img src={item.imageUrl} alt={item.name} style={{ width: '100%' }} />
              <h2>{item.name}</h2>
              <p>Current Bid: ${item.currentBid}</p>
              <button
                className="bid-button"
                onClick={() => handleItemClick(item)}
              >
                Bid Now
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;