import React from 'react';
import './Home.css'; // Adjust relative path

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Cake Shop</h1>
      <p>Explore our delicious range of cakes.</p>
      {/* Add an image of a cake */}
      <img 
        src="/assets/cake1.jpg" 
        alt="Delicious Cake" 
        className="home-cake-image" 
      />
       <img 
        src="/assets/cake2.jpg" 
        alt="Delicious Cake" 
        className="home-cake-image" 
      />
      <img 
        src="/assets/cake3.jpg" 
        alt="Delicious Cake" 
        className="home-cake-image" 
      />
      <img 
        src="/assets/cake4.jpg" 
        alt="Delicious Cake" 
        className="home-cake-image" 
      />
      <img 
        src="/assets/cake5.jpg" 
        alt="Delicious Cake" 
        className="home-cake-image" 
      />
      <img 
        src="/assets/cake6.jpg" 
        alt="Delicious Cake" 
        className="home-cake-image" 
      />
    </div>
  );
}

export default Home;