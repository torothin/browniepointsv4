import React from 'react';
import './add-reward.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { addReward } from '../../redux/game-data/game-data.actions';


const AddReward = ({goalType, addReward}) => (
    <div className='add-reward-container'>
        Add Reward
        <input className="reward-name" type="text" 
            placeholder="Enter Reward" 
            required />
        <select required>
            <option value="" 
                    >Select Reward Value:</option>
            <option>Minor</option>
            <option>Major</option>
            <option>Epic</option>
        </select>
        <CustomButton wide onClick={() => {
            const rewardData = {rewardName:'test1',rewardType:'epic'};
            addReward(rewardData);
        }}>
            Accept
        </CustomButton>
    </div>
);

const mapDispatchToProps = dispatch => ({
    addReward: rewardData => dispatch(addReward(rewardData)),
})

export default connect(null,mapDispatchToProps)(AddReward);