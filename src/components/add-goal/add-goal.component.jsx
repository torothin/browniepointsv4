import React from 'react';
import './add-goal.styles.scss';
import { toggleMenuPopupShow, menuSelection } from '../../redux/menu/menu.actions';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { addGoal, calcPointsToLevel, updateEarnedPercent, 
    updateProgressPercent, updateLevel } from '../../redux/game-data/game-data.actions';


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
        this.props.calcPointsToLevel();
        this.props.updateEarnedPercent();
        this.props.updateProgressPercent();
        this.props.updateLevel();
        this.props.toggleMenuPopupShow();
        this.props.menuSelection("Close Popup");
        
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
                    <CustomButton wide type='submit'>
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
    menuSelection: (selection) => dispatch(menuSelection(selection)),
    calcPointsToLevel: () => dispatch(calcPointsToLevel()),
    updateEarnedPercent: () => dispatch(updateEarnedPercent()),
    updateProgressPercent: () => dispatch(updateProgressPercent()),
    updateLevel: () => dispatch(updateLevel()),
});

const mapStateToProps = state => ({
    menuPopupShow: state.menu.menuPopupShow,
});

export default connect(mapStateToProps,mapDispatchToProps)(AddGoal);