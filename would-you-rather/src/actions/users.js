import { saveQuestionAnswer } from '../utils/api'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SAVE_ANSWER = 'SAVE_ANSWER'

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function saveAnswer(authedUser, qid, answer) {
  return {
    type: SAVE_ANSWER,
    authedUser,
    qid,
    answer
  }
}

export function addQuestion(authedUser, qid) {
  return {
    type: ADD_QUESTION,
    authedUser,
    qid
  }
}

export function handleSaveUserAnswer(authedUser, qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    return saveQuestionAnswer({ authedUser, qid, answer })
      .then(() => dispatch(saveAnswer(authedUser, qid, answer)))
  }
}
