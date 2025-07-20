import React from "react";
import "./Home.css";

const demoCards = [
  {
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    title: "Birthday Wishes",
    desc: "Send colorful birthday greetings with custom messages and styles."
  },
  {
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    title: "Anniversary Cards",
    desc: "Celebrate love and togetherness with elegant anniversary cards."
  },
  {
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    title: "Thank You Notes",
    desc: "Express gratitude with beautiful thank you cards for any occasion."
  }
];

const Home = ({ onStart }) => (
  <section>
    <div className="hero">
      <div className="hero-content">
        <h1>
          Create Beautiful <span className="highlight">Greeting Cards</span> Online
        </h1>
        <p>
          Design and share personalized greeting cards for any occasion in just a few clicks. No design skills needed!
        </p>
        <button className="hero-btn" onClick={onStart}>
          Get Started
        </button>
      </div>
    </div>
    <div className="card-gallery">
      <h2 className="gallery-title">Explore Card Ideas</h2>
      <div className="gallery-list">
        {demoCards.map((card, idx) => (
          <div className="gallery-card" key={idx}>
            <img src={card.img} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Home;