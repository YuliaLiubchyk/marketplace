import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../modules/auth/authOperations';
import { EDIT_PROFILE, PROFILE } from '../../constants/routesConstants';
import s from './Logout.module.scss';

const mapStateToProps = (state) => {
    return {
        isLoading: state.viewer.fetchViewer.isLoading,
        user: state.viewer.user
    };
};

const mapDispatchToProps = {
    handleLogout: logout
};

const mockUserInfo = {
    firstLetterName: 'U',
    fullName: 'User',
    email: 'example@g,ail.com'
};

function Logout({ isLoading, user, handleLogout }) {
    const [isHovered, setHovered] = useState(false);
    const userInfo = isLoading
        ? mockUserInfo
        : {
            firstLetterName: user.fullName.charAt(0),
            fullName: user.fullName,
            email: user.email
        };

    return <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}>
        <div className={`${s.container}  ${s['right-icon']}`}>
            <div className={`${s['inner-container']}`}>
                {userInfo.firstLetterName}
            </div>
        </div>
        {isHovered && <div className={s['logout-container']}>
            <div className={`${s.container} ${s['left-icon']}`}>
                <div className={s['inner-container']}>
                    {userInfo.firstLetterName}
                </div>
            </div>
            <div className={s.name}>{userInfo.fullName}</div>
            <div className={s.email}>{userInfo.email}</div>
            <div className={s.profile}>
                <Link to={PROFILE} className={s.link}>Profile</Link>
            </div>
            <div className={`${s['link-container']} ${s.edit}`}>
                <Link to={EDIT_PROFILE} className={s.link}>EDIT PROFILE</Link>
            </div>

            <hr className={s.line} />
            <div
                onClick={handleLogout}
                className={s['link-container']}>
                LOGOUT
            </div>
        </div>}
    </div>


}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);