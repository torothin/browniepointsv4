import React from 'react';
import './reward-popup.styles.scss';
import RewardImage from '../reward-image/reward-image.component';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { toggleRewardPopup } from '../../redux/game-data/game-data.actions';

const RewardPopup = ({level, dispatch}) => (
    <div className='reward-popup-background'>
        <div className='reward-popup'>
            <div className='popup-contents'>
                <div className='reward-image-container'>
                    <RewardImage level={level} />
                </div>
                
                <div className='reward-type-container'>
                    { rewardType({level}) }
                </div>
                <div className='button-container'>
                    <CustomButton 
                        onClick = {() => { dispatch(toggleRewardPopup()) }}>Accept
                    </CustomButton>
                </div>
            </div>
        </div>
    </div>
)

const rewardType = (level) => {
    if(level % 15 === 0) return "Epic Reward";
    else if(level % 5 === 0) return "Major Reward";
    else return "Minor Reward";
}

export default connect(null)(RewardPopup);
