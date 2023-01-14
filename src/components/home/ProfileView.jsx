import { Link } from "react-router-dom"
import React from "react"

export default function ProfileView({
  largeSize,
  image,
  username,
  subtitle,
  actionText,
  actionHandler,
}) {
  return (
    <div className="profile-view">
      <div className="profile-view-left">
        <div className="user-profile-image">
          <div
            className={`profile-outer-circle ${!largeSize && "profile-small"}
            `}
          >
            <div className="profile-circle">
              <img src={image} alt="story icon" />
            </div>
          </div>
        </div>
        <div className="user-profile-info">
          <div className="user-profile-username">
            <Link to="#">{username}</Link>
          </div>
          <div
            className={"user-profile-name" + (largeSize ? "" : " name-small")}
          >
            <span>{subtitle}</span>
          </div>
        </div>
      </div>
      <div className="profile-view-right">
        <Link to="#" className="blue-btn">
          {actionText}
        </Link>
      </div>
    </div>
  )
}
