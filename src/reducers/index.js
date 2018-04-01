import {combineReducers} from 'redux';

import users from './users'
import polls from './polls'
import setAuthedUser from './authedUser'

export default combineReducers({
  users,
  polls,
  setAuthedUser,
})
