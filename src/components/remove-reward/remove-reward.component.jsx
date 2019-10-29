import React from 'react';
import './remove-reward.styles.scss';

const RemoveReward = ({goalType}) => (
    <div className='remove-reward-container'>
        Remove Reward
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
    </div>
);

export default RemoveReward;