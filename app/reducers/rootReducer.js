import { combineReducers } from 'redux';
import edit from './edit';
import search from './search';
import menus from './menus';

export default combineReducers({
  edit,
  search,
  menus,
});
