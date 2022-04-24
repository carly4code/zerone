import React from "react";
// import InstagramEmbed from 'react-instagram-embed';
import InstagramFeed  from 'react-ig-feed';
import 'react-ig-feed/dist/index.css';

const IGapi = () => {
    // token key was save to .env
  return <InstagramFeed token={process.env.REACT_APP_igAPI} counter="6" />
}

export default IGapi