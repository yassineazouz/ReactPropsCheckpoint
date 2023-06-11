import React from 'react';
import PropTypes from 'prop-types';
import './Profile.css';

const Profile = ({ fullName, bio, profession, handleName, children }) => {
    return (

        <div className="Profile">
            <div className="upper-container">
                <div className="image-container">
                    <img src="profile-image.jpg" alt="" height='100px' width='100px' />
                </div>
            </div>
            <div className="lower-container">
                <h3> {fullName} </h3>
                <h4> {profession} </h4>
                <p>  Passionate student eager to learn, grow, and make a positive impact in the world through education and innovation. </p>
                <button className="profile-button" onClick={handleName}>
                    Show Name
                </button>

            </div>


        </div>
    )

};

Profile.defaultProps = {
    fullName: 'Yassine Azzouz ',
    bio: 'Passionate student eager to learn, grow, and make a positive impact in the world through education and innovation.',
    profession: 'Web Developer',
};

Profile.propTypes = {
    fullName: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    handleName: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
};

export default Profile;
