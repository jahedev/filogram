import React from "react";

function Story(props) {
  return (
    <div className='story-profile'>
      <div className='profile-outer-circle'>
        <div className='profile-circle'>
          <img src={props.image} alt='story icon' />
        </div>
      </div>
      <div className='profile-name'>
        <span>{props.username}</span>
      </div>
    </div>
  );
}

export default Story