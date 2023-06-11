import React from 'react';
import Profile from './Profile/Profile';
import './App.css';


function App() {
  const handleName = () => {
    const fullName = 'Yassine Azzouz'; 
    alert(`Profile user's name: ${fullName}`);
  };

  return (
    <div className="App">
      <Profile
        fullName="Yassine Azzouz "
        bio="Passionate student eager to learn, grow, and make a positive impact in the world through education and innovation."
        profession="Web Developer"
        handleName={handleName}
      >
        <img src="profile-image.jpg" alt="Profile" />
      </Profile>
    </div>
  );
}

export default App;
