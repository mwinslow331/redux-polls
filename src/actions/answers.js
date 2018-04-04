import { savePollAnswer } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';

export const SAVE_ANSWER = 'SAVE_ANSWER';

export function saveAnswer ({ authedUser, id, answer }) {
  return {
    type: SAVE_ANSWER,
    authedUser,
    id,
    answer,
  }
}

export function handleSaveAnswer (answerData) {
  return (dispatch) => {
    dispatch(showLoading())
    return savePollAnswer(answerData)
      .then(() => dispatch(saveAnswer(answerData)))
      .then(() => dispatch(hideLoading()))
  }
}
