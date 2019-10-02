import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import InputForm from '../Components/InputForm';
import Actions from '../actions';

const Profile = () => {
    const dispatch = useDispatch();

    const editUserName = (e) => {
        e.preventDefault();
        const name = e.target[0].value;

        if (name) {
            dispatch(Actions.editUserName(name));
            e.target.reset();
        }
    };

    const editUserAvatar = (e) => {
        e.preventDefault();
        const pic = e.target[0].files[0];

        if (pic) {
            const picBlob = URL.createObjectURL(pic);
            dispatch(Actions.editUserAvatar(picBlob));
            e.target.reset();
        }
    };

    return (
        <>
            <InputForm onSubmit={editUserName} />
            <InputForm
                onSubmit={editUserAvatar}
                type='file'
            />
        </>
    )
};

export default memo(Profile);