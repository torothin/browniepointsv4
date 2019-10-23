import React from 'react';
import './home-page.styles.scss';
import UserSection from '../../components/user-section/user-section.component';
import MenuPopup from '../../components/menu-popup/menu-popup.component';
import GoalContainer from '../../components/goal-container/goal-container.component';
import { connect } from 'react-redux';

const HomePage = ({menuPopupShow}) => (
    <div className='homepage-container'>
        {
            menuPopupShow &&  <MenuPopup />
        }
        <UserSection />
        <GoalContainer />
    </div>
)

const mapStateToProps = state => ({
    menuPopupShow: state.menu.menuPopupShow,
})

export default connect(mapStateToProps)(HomePage);