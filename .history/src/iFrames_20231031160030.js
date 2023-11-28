import React from 'react';

function iFrames() {
  return (
    <div className="Home-frames">
      <h3 className="Home-frames-title">
        Vous pouvez également me suivre sur mon compte Instagram, si ce n'est pas encore le cas...
      </h3>
      <div className="o-embed__user">
        <div className="posts">
          <iframe
            src="https://www.instagram.com/nsscake/embed"
            className="o-insta"
            allowtransparency="true"
            allowfullscreen="true"
            data-instgrm-payload-id="instagram-media-payload-0"
            scrolling="no"
            width="600"
            height="800"
            frameBorder="0"
            style={{ borderRadius: '6px' }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default iFrames;



{/* <iframe src="https://www.tiktok.com/@nssquick?_t=8gyLYoxrAbw&_r=1"  */}
        {/* // width="100%" height="400" frameborder="0" allowFullScreen title="NSS Quick TikTok"> */}
        {/* </iframe> */}