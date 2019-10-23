import React from 'react';
import GoalList from '../goal-list/goal-list.component';
import './goal-container.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { 
    toggleTodoList,
    toggleDailyList,
    toggleWeeklyList,
    toggleMonthlyList 
} from '../../redux/menu/menu.actions';
import { connect } from 'react-redux';

const GoalContainer = ({
    goalList, 

    todoListShow, 
    dailyListShow,
    weeklyListShow,
    monthlyListShow,

    toggleTodoList,
    toggleDailyList,
    toggleWeeklyList,
    toggleMonthlyList,
}) => {

    //console.log(goalList);
    return (
        <div className='goal-container'>
            <CustomButton onClick={ toggleTodoList } inverted> ToDos </CustomButton>
            { 
                todoListShow && 
                    <GoalList goalType='ToDos' goalList={ goalList.todos } /> 
            }
            
            <CustomButton onClick={ toggleDailyList } inverted> Daily Goals </CustomButton>
            { 
                dailyListShow && 
                    <GoalList goalType='Daily Goals' goalList={ goalList.daily } /> 
            }
            
            <CustomButton onClick={ toggleWeeklyList } inverted> Weekly Goals </CustomButton>
            { 
                weeklyListShow &&  
                    <GoalList goalType='Weekly Goals' goalList={ goalList.weekly } /> 
            }

            <CustomButton onClick={ toggleMonthlyList } inverted> Monthly Goals </CustomButton>
            { 
                monthlyListShow && 
                    <GoalList goalType='Monthly Goals' goalList={ goalList.monthly } /> 
            }
            
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleTodoList: () => dispatch(toggleTodoList()),
    toggleDailyList: () => dispatch(toggleDailyList()),
    toggleWeeklyList: () => dispatch(toggleWeeklyList()),
    toggleMonthlyList: () => dispatch(toggleMonthlyList()),
});

const mapStateToProps = state => ({
    goalList: state.goals.goalList,
    todoListShow: state.menu.todoListShow,
    dailyListShow: state.menu.dailyListShow,
    weeklyListShow: state.menu.weeklyListShow,
    monthlyListShow: state.menu.monthlyListShow,
})

export default connect(mapStateToProps,mapDispatchToProps)(GoalContainer);