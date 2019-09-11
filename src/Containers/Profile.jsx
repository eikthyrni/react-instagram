import React from 'react';
import NameForm from '../Components/User/NameForm';
import AvatarForm from '../Components/User/AvatarForm';

class Profile extends React.Component {
    render () {
        return (
            <>
                <NameForm />
                <AvatarForm />
            </>
        )
    }
}

export default Profile;