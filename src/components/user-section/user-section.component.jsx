import React from 'react';
import './user-section.styles.scss';
import { connect } from 'react-redux'

const UserSection = ({ currentUser, level, progressPercent, currentPercent }) => {
    
    const progressStyle =  {
        width: `${progressPercent}%`,
    }

    const currentStyle = {
        width: `${currentPercent}%`,
    }

    return (
        <div className='user-section'>
            <div className='user-displayName'>
            {
                currentUser && <div>{ currentUser.displayName }</div>
            }
            </div>
            <div className='progress-bar-container'>
                <div className='current-level-bar' style={currentStyle}>{ currentPercent }%</div>
                <div className='progress-bar' style={progressStyle} ></div>
                
            </div>
            <div className='level-container'>
                <div className='level'><div>{ level }</div></div>
                <div className='reward-image'>Reward<div></div></div>
            </div>

        </div>
    )
};

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    level: state.levelData.level,
    progressPercent: state.levelData.progressLevelPercent,
    currentPercent: state.levelData.currentLevelPercent,

})

export default connect(mapStateToProps)(UserSection);