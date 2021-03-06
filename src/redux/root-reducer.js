import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import menuReducer from './menu/menu.reducer';
import levelDataReducer from './level-data/level-data.reducer';
import goalsReducer from './goals/goals.reducer';

export default combineReducers({
  user: userReducer,
  menu: menuReducer,
  levelData: levelDataReducer,
  goals: goalsReducer,
});