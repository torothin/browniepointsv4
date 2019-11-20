import React from 'react';
import './add-reward.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { addReward } from '../../redux/game-data/game-data.actions';
import { toggleMenuPopupShow, menuSelection } from '../../redux/menu/menu.actions';


class AddReward extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            type: "",
        };
    }

    render() 
    {
        return (
            <div className='add-reward-container'>
                Add Reward
                <form onSubmit={this.handleSubmit}>
                    <input 
                        className="reward-name" 
                        type="text" 
                        placeholder="Enter Reward"
                        name='name'
                        value={ this.state.name }
                        onChange={ this.handleChange } 
                        required />
                    <select 
                        required
                        name='type'
                        onChange={this.handleChange}>
                        <option value="" 
                                >Select Reward Value:</option>
                        <option value='minor'>Minor</option>
                        <option value='major'>Major</option>
                        <option value='epic'>Epic</option>
                    </select>
                    <CustomButton wide type='submit'>
                        Accept
                    </CustomButton>
                </form>
            </div>
        )
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = event => {
        event.preventDefault();
        const rewardData = 
            {rewardName: this.state.name, rewardType: this.state.type};
        this.props.addReward(rewardData);
        this.props.toggleMenuPopupShow();
        this.props.menuSelection("Close Popup");
    }
};

const mapDispatchToProps = dispatch => ({
    addReward: rewardData => dispatch(addReward(rewardData)),
    toggleMenuPopupShow: () => dispatch(toggleMenuPopupShow()),
    menuSelection: () => dispatch(menuSelection()),

})

export default connect(null,mapDispatchToProps)(AddReward);