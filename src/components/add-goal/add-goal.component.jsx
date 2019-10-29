import React from 'react';
import './add-goal.styles.scss';
import { toggleMenuPopupShow } from '../../redux/menu/menu.actions';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { newGoal } from '../../redux/goals/goals.actions';


class AddGoal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            goalType: "",
            menuPopupShow: false,
            toggleMenuPopupShow: false,
            
            name: "Test",
            type: "daily",
            ID: 20,
            points: 20,
            
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {name, type, ID, points} = this.state;
        //console.log("this.state", {newGoalName, newGoalType, newGoalID, newGoalPoints});
        this.props.newGoal({name, type, ID, points});
        //alert("After newGoal called");
        //this.setState({newGoalName: "", newGoalType: "", newGoalID: null, newGoalPoints:0});
        this.props.toggleMenuPopupShow("accept");
        
    }
    
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    
    }

    render() {
        return (
        
            <div className='add-goal-container'>
                Add Goal
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <input 
                        className="goal-name" 
                        type="text"
                        placeholder="Enter Goal" 
                        required
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <input
                        className="goal-points" 
                        type="number" 
                        placeholder="Enter Points" 
                        required
                        name='points'
                        value={this.state.points}
                        onChange={this.handleChange}
                        /> 
                    <select 
                        required
                        >
                        {/* name='type'
                        value={this.state.type}
                        onChange={this.handleChange} */}
                        <option value="" 
                                >Select Goal Frequency:</option>
                        <option>Todo</option>
                        <option>Daily</option>
                        <option>Weekly</option>
                        <option>Monthly</option>
                    </select>
                    <CustomButton 
                        type='submit'
                        inverted>
                        Accept
                    </CustomButton>
                </form>
                        
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    newGoal: (goalData) => 
        dispatch(newGoal(goalData)),
    toggleMenuPopupShow: (result) => dispatch(toggleMenuPopupShow(result)),
   
});

const mapStateToProps = state => ({
    menuPopupShow: state.menu.menuPopupShow,
    //menuSelection: state.menu.menuSelection,
});

export default connect(mapStateToProps,mapDispatchToProps)(AddGoal);