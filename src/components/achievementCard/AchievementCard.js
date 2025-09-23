import React from "react";
import "./AchievementCard.scss";

export default function AchievementCard({cardInfo, isDark}) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className={isDark ? "dark-mode simple-card" : "simple-card"}>
      <div className="simple-card-img">
        <a
          href={cardInfo.footer[0]?.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{display: "block"}}
          title={cardInfo.footer[0]?.name}
        >
          <img
            src={cardInfo.image}
            alt={cardInfo.imageAlt || "Card Thumbnail"}
            className="card-image"
            style={{cursor: "pointer"}}
          />
        </a>
      </div>
      <div className="simple-card-content">
        <h5 className={isDark ? "dark-mode simple-title" : "simple-title"}>
          {cardInfo.title}
        </h5>
        <div className="simple-date">{cardInfo.date}</div>
      </div>
    </div>
  );
}
