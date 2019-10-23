import React from 'react';
import GoalList from '../goal-list/goal-list.component';
import './goal-container.styles.scss';

import { connect } from 'react-redux';

const GoalContainer = ({goalList}) => {

    //console.log(goalList);
    return (
        <div className='goal-container'>
            <GoalList goalType='ToDos' goalList={ goalList.todos } />
            <GoalList goalType='Daily Goals' goalList={ goalList.daily } />
            <GoalList goalType='Weekly Goals' goalList={ goalList.weekly } />
            <GoalList goalType='Monthly Goals' goalList={ goalList.monthly } />
        </div>
    )
}

const mapStateToProps = state => ({
    goalList: state.goals.goalList,
})

export default connect(mapStateToProps)(GoalContainer);