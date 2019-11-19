import React from 'react';
import './reward-image.styles.scss';

import EpicImage from '../assets/reward-3.jpg';
import MajorImage from '../assets/reward-2.jpg';
import MinorImage from '../assets/reward-1.jpg';

const rewardString = (level) => {
    
    if(level % 15 === 0) return EpicImage;
    else if(level % 5 === 0) return MajorImage;
    else return MinorImage;
   
}

const RewardImage = ({level}) => (
    <div className='reward-image-container'>
        {
            <img 
                className='reward-image' 
                alt='Reward'
                src={ rewardString(level) } 
            />
        }    
    </div>
)


export default RewardImage;