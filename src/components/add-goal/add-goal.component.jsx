import React from 'react';
import './add-goal.styles.scss';
import { toggleMenuPopupShow } from '../../redux/menu/menu.actions';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { addGoal } from '../../redux/goals/goals.actions';


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

    handleSubmit = event => {
        event.preventDefault();
        const {name, type, ID, points} = this.state;
        this.props.addGoal({name, type, ID, points});
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
                        onChange={this.handleChange}
                        name='type'
                        >
                        <option value="">Select Goal Frequency:</option>
                        <option value='todo'>Todo</option>
                        <option value='daily'>Daily</option>
                        <option value='weekly'>Weekly</option>
                        <option value='monthly'>Monthly</option>
                    </select>
                    <CustomButton type='submit'>
                        Accept
                    </CustomButton>
                </form>
                        
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    addGoal: (goalData) => 
        dispatch(addGoal(goalData)),
    toggleMenuPopupShow: (result) => dispatch(toggleMenuPopupShow(result)),
   
});

const mapStateToProps = state => ({
    menuPopupShow: state.menu.menuPopupShow,
    //menuSelection: state.menu.menuSelection,
});

export default connect(mapStateToProps,mapDispatchToProps)(AddGoal);