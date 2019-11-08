import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import menuReducer from './menu/menu.reducer';
import gameDataReducer from './game-data/game-data.reducer'

export default combineReducers({
  user: userReducer,
  menu: menuReducer,
  gameData: gameDataReducer,
});