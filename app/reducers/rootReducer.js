import { combineReducers } from 'redux';
import edit from './edit';
import search from './search';
import menus from './menus';
import panels from './panels';
import account from './account';

export default combineReducers({
  edit,
  search,
  menus,
  panels,
  account,
});
