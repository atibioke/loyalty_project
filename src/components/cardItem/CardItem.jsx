import React, { useState } from "react";
import "./style.css";

const CardItem = ({ title, description, url, publishedAt, content }) => {
  const [bookmark, setBookmark] = useState(false);
  return (
    <div className="card-item-container">
      
      <div className="card-details-container">
       
        <div className="card-paragraph">
        <header className="card-title">{title}</header>
          <div className="card-details">{description}</div>
          <div className="card-details card-detail">
            {content.split("[")[0]}
          </div>
        </div>

        <div>
          <div className="third-section">
            <div className="card-items">
              <a href={url} className="more-details">
                Read full story
              </a>

              <div>
                <span
                  className="bookmark"
                  onClick={() => setBookmark(!bookmark)}
                >
                  <img
                    src="/bookmark-logo.png"
                    className={bookmark ? "bookmark-img" : ""}
                    alt="bookmark-logo"
                  />{" "}
                  Add to bookmarks
                </span>
              </div>

              <div>
                <span className="time-container">
                  {Math.ceil(
                    new Date().getTime() / (1000 * 60) -
                      new Date(publishedAt).getTime() / (1000 * 60)
                  )}{" "}
                  mins ago
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
