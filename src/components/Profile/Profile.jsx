import React from 'react';
import classes from './Profile.module.css'
import MyPostsContainer from './My posts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {


    return (
        <div>

            <ProfileInfo profile={props.profile} />

            <MyPostsContainer />
        </div>
    );
}
export default Profile;