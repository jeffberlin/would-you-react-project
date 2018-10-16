import { _saveQuestionAnswer, _saveQuestion } from '../utils/_DATA'
import { getInitialData } from '../utils/api'
import { receiveUsers, saveAnswer } from './users'
import { getQuestions, answerQuestion, addQuestion } from './questions'
import { setAuthedUser } from './authedUser'

export function fetchInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users))
      dispatch(getQuestions(questions))
    })
  }
}

export function handleSaveAnswer(info) {
  return (dispatch) => {
    // dispatch(answerQuestion(info))
    dispatch(saveAnswer(info))

    return _saveQuestionAnswer(info)
      .then((questions) => {
        dispatch(getQuestions(questions))
      })
  }
}

export function handleAddQuestion(info) {
  return (dispatch) => {
    return _saveQuestion(info)
      .then((question) => {
        dispatch(addQuestion(question))
      })
  }
}

export function setAuthedUserId(authedUserId, dispatch) {
  dispatch(setAuthedUser(authedUserId))
}
