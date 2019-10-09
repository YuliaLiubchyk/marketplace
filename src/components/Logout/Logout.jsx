import React, { useState } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../modules/auth/authOperations';
import s from './Logout.module.scss';

const mapStateToProps = (state) => {
    return {
        isLoading: state.viewer.fetchViewer.isLoading,
        user: state.viewer.user
    };
}

const mapDispatchToProps = {
    handleLogout: logout
}

function Logout({ isLoading, user, handleLogout }) {
    const [isHovered, setHovered] = useState(false);
    const name = isLoading ? 'U' : user.fullName.charAt(0);

    return <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}>
        <div className={s.container}>
            <div className={s['inner-container']}>
                {name}
            </div>
        </div>
        {isHovered && <div className={s['logout-container']}>
            <div onClick={handleLogout} className={s.container}>
                <div className={s['inner-container']}>
                    {name}
                </div>
            </div>
            <div onClick={handleLogout} className={s['logout-text']}>LOGOUT</div>
        </div>}
    </div>


}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);