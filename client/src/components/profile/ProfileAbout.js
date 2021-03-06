import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name }
  }
}) => {
  return (
    <div className="profile-about bg-light p-2">
      {bio && (
        <Fragment>
          <h2 className="text-primary">
            <span className="cap">{name}'s Bio</span>
          </h2>
          <p>{bio}</p>
          <div className="line"></div>
        </Fragment>
      )}
      <h2 className="text-primary">Skill Set</h2>
      <div className="skills">
        {skills.map((skill, index) => (
          <div key={index} className="p-1">
            <i className="fa fa-check"></i>
            <span className="upper">{skill}</span>
          </div>
        ))}
        {/* <div className="p-1">
          <i className="fa fa-check"></i> HTML
        </div>
        <div className="p-1">
          <i className="fa fa-check"></i> CSS
        </div>
        <div className="p-1">
          <i className="fa fa-check"></i> JavaScript
        </div>
        <div className="p-1">
          <i className="fa fa-check"></i> Python
        </div>
        <div className="p-1">
          <i className="fa fa-check"></i> C#
        </div> */}
      </div>
    </div>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
