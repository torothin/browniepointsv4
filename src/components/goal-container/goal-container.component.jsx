import React from 'react';
import GoalList from '../goal-list/goal-list.component';
import './goal-container.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';

class GoalContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoListShow: true,
            dailyListShow: true,
            weeklyListShow: true,
            monthlyListShow: true,
            goalList: props.goalList,
        };
    }

    render() {
        const {goalList, todoListShow, dailyListShow,
            weeklyListShow, monthlyListShow } = this.state;

        return(
            <div className='goal-container'>
                <CustomButton onClick={ this.toggleTodoList } inverted> ToDos </CustomButton>
                { 
                    todoListShow && 
                        <GoalList goalTypeString='ToDos' goalType='todo' /> 
                }
                
                <CustomButton onClick={ this.toggleDailyList } inverted> Daily Goals </CustomButton>
                { 
                    dailyListShow && 
                        <GoalList goalTypeString='Daily Goals' goalType='daily' /> 
                }
                
                <CustomButton onClick={ this.toggleWeeklyList } inverted> Weekly Goals </CustomButton>
                { 
                    weeklyListShow &&  
                        <GoalList goalTypeString='Weekly Goals' goalType='weekly' /> 
                }

                <CustomButton onClick={ this.toggleMonthlyList } inverted> Monthly Goals </CustomButton>
                { 
                    monthlyListShow && 
                        <GoalList goalTypeString='Monthly Goals' goalType='monthly' /> 
                }

            </div>
        )
    }

    toggleTodoList = () => (this.setState({todoListShow: !this.state.todoListShow}));
    toggleDailyList = () => (this.setState({dailyListShow: !this.state.dailyListShow}));
    toggleWeeklyList = () => (this.setState({weeklyListShow: !this.state.weeklyListShow}));
    toggleMonthlyList = () => (this.setState({monthlyListShow: !this.state.monthlyListShow}));
}

const mapDispatchToProps = dispatch => ({
});

const mapStateToProps = state => ({
    goalList: state.goals.goalList,
})

export default connect(mapStateToProps,mapDispatchToProps)(GoalContainer);