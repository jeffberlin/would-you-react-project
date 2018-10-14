export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_QUESTION = 'ADD_QUESTION_TO_USER'
export const SAVE_ANSWER = 'SAVE_ANSWER'

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function saveAnswer({authedUser, qid, answer}) {
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
    qid,
  }
}
