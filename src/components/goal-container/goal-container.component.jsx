import React from 'react';
import GoalList from '../goal-list/goal-list.component';
import './goal-container.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

class GoalContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoListShow: true,
            dailyListShow: true,
            weeklyListShow: true,
            monthlyListShow: true,
        };
    }

    componentDidUpdate() {
        //console.log('goal-container update',this.state.goalList)
    }

    render() {
        const {todoListShow, dailyListShow, weeklyListShow, monthlyListShow } = this.state;

        return(
            <div className='goal-container'>
                <CustomButton onClick={ this.toggleTodoList }> ToDos </CustomButton>
                { 
                    todoListShow && <GoalList goalType='todo' /> 
                }
                
                <CustomButton onClick={ this.toggleDailyList }> Daily Goals </CustomButton>
                { 
                    dailyListShow && <GoalList goalType='daily' /> 
                }
                
                <CustomButton onClick={ this.toggleWeeklyList }> Weekly Goals </CustomButton>
                { 
                    weeklyListShow && <GoalList goalType='weekly' /> 
                }

                <CustomButton onClick={ this.toggleMonthlyList }> Monthly Goals </CustomButton>
                { 
                    monthlyListShow && <GoalList goalType='monthly' /> 
                }

            </div>
        )
    }

    toggleTodoList = () => (this.setState({todoListShow: !this.state.todoListShow}));
    toggleDailyList = () => (this.setState({dailyListShow: !this.state.dailyListShow}));
    toggleWeeklyList = () => (this.setState({weeklyListShow: !this.state.weeklyListShow}));
    toggleMonthlyList = () => (this.setState({monthlyListShow: !this.state.monthlyListShow}));
}


export default GoalContainer;