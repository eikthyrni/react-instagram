import React from 'react';
import { useSelector} from 'react-redux';

const Header = () => {
    const { name, avatar } = useSelector((state) => state.user);

    return (
        <header>
            <div className='user-info'>
                <div>{name}</div>
                <img src={avatar} />
            </div>
        </header>
    )
};

export default Header;