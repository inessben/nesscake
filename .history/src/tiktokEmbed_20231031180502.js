import React from 'react';

const TikTokEmbed = () => {
  return (
    <div>
      <h1>Vidéo TikTok</h1>
      <iframe
        title="MaVidéoTikTok"
        width="100%"
        height="400"
        src="https://www.tiktok.com/embed/v2/ZGJEhSRad?lang=en-US"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default TikTokEmbed;