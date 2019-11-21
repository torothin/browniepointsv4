import React from 'react';
import './remove-reward.styles.scss';

import { connect } from 'react-redux';
import { removeReward } from '../../redux/game-data/game-data.actions';
import { menuSelection, toggleMenuPopupShow } from '../../redux/menu/menu.actions';

import CustomButton from '../custom-button/custom-button.component';

class RemoveReward extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            rewardData: "",
        };
    }

    render() {
        const { rewardList } = this.props;
        return (
            <div className='remove-reward-container'>
                Remove Reward
                <form onSubmit={ this.handleSubmit }>
                    <select 
                        required
                        onChange={ this.handleChange }
                        name='rewardData'
                        >
                        <option value=''>Select Reward:</option>
                        {/* {
                            rewardList['minor'].map(rewardData => {
                                return (
                                    <option
                                        value = { JSON.stringify(rewardData) } 
                                        key={ rewardData.rewardName }>
                                            { rewardData.rewardName }
                                    </option>
                                )}
                            )
                        } */}
                        {
                            rewardList['minor'].map(reward => {
                                return (
                                    <option
                                        value = { JSON.stringify({rewardName:reward,rewardType:'minor'}) }
                                        key={ reward }>
                                            { reward }
                                    </option>
                                )}
                            )
                        }
                        {
                            rewardList['major'].map(reward => {
                                return (
                                    <option
                                        value = { JSON.stringify({rewardName:reward,rewardType:'major'}) }
                                        key={ reward }>
                                            { reward }
                                    </option>
                                )}
                            )
                        }
                        {
                            rewardList['epic'].map(reward => {
                                return (
                                    <option
                                        value = { JSON.stringify({rewardName:reward,rewardType:'epic'}) }
                                        key={ reward }>
                                            { reward }
                                    </option>
                                )}
                            )
                        }
                    </select>
                    <CustomButton wide type='submit'>Accept</CustomButton>
                </form>
            </div>
        )
    }

    handleChange = event => {
        const { name, value } = event.target;
        const rewardData = JSON.parse(value);
        this.setState({ [name]: rewardData });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.removeReward(this.state.rewardData);
        this.props.toggleMenuPopupShow();
        this.props.menuSelection("Close Popup");
    }
}

const mapStateToProps = state => ({
    rewardList: state.gameData.rewards,
});

const mapDispatchToProps = dispatch => ({
    removeReward: rewardData => dispatch(removeReward(rewardData)),
    menuSelection: (selection) => dispatch(menuSelection(selection)),
    toggleMenuPopupShow: (result) => dispatch(toggleMenuPopupShow(result)),
});

export default connect(mapStateToProps,mapDispatchToProps)(RemoveReward);