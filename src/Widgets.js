import React from 'react';
import "./Widgets.css";

function Widgets() {
    return (
        <div className="widgets">
            <iframe
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D428087155296176%26id%3D116086543162907&width=500&show_text=true&appId=1750465371922880&height=846"
              width="340"
              height="100%"
              style={{ border: "none", overflow: "hidden"}}
              scrolling="no"
              frameborder="0"
              allowTransparency="true"
              allow="encrypted-media"
            ></iframe>
        </div>
    )
}

export default Widgets
