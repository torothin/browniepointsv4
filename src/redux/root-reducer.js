import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import menuReducer from './menu/menu.reducer';

export default combineReducers({
  user: userReducer,
  menu: menuReducer,
});