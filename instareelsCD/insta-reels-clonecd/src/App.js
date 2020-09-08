import React, { useState, useEffect } from 'react';
import './App.css';
import VideoCard from './VideoCard';
import {db} from './firebase';
log

function App() {
  const [reels, setReels]= useState([]);

  useEffect(() =>{

    db.collection('reels').onSnapshot(snapshot => (
      setReels(snapshot.docs.map(docs=> docs.data()))

    ))

  }, [])



  return (
    <div className="app">
     
      <h1>Rollin' Reels</h1>
      <div className="app__top">
        <img className="app__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png"
        alt=""
        />
        <h3>Reels</h3> 
        

      {/* Image at top   */}
      {/*   Reels */}
      </div>

      <div className="app__videos">
        {reels.map(({channel , avatarSrc,song,url,likes,shares}) => (
        <VideoCard
          channel={channel}
          avatarSrc={avatarSrc}
          song={song}
          url={url}
          likes={likes}
      
          shares={shares}
        />))}
        
        
        <VideoCard/> 
        
      </div>
    </div>
  );
}

export default App;
