import Header from "../base/Header"
import Posts from "./Posts"
import Stories from "./Stories"

import Footer from "../base/Footer"
import FollowSuggestions from "./FollowSuggestions"
import ProfileView from "./ProfileView"

import profile from "../../assets/images/profile.jpg"
import profile2 from "../../assets/images/profile2.jpg"
import profile3 from "../../assets/images/profile3.jpg"
import profile4 from "../../assets/images/profile4.jpg"
import React from "react"
import Story from "./Story"
import Post from "./Post"

export default function Home() {
  return (
    <div id="homepage">
      <Header filled={{ home: true }} />
      <main>
        <div className="center-middle">
          <div className="main-left">
            <Stories>
              <Story image={profile} username={"bunechoy"} />
              <Story image={profile2} username={"oakarcher"} />
              <Story image={profile3} username={"worthless.safi"} />
              <Story image={profile4} username={"dawnmariel"} />
            </Stories>
            <Posts>
              <Post />
            </Posts>
          </div>
          <div className="main-right">
            {/* current user info */}
            <ProfileView
              largeSize={true}
              image={profile}
              username={"jahedev"}
              subtitle={"Jahed Hossain"}
              actionText={"Switch"}
              actionHandler={"INSERT CALLBACK"}
            />
            <FollowSuggestions />
            <Footer />
          </div>
        </div>
      </main>
    </div>
  )
}
