import { _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA'
import { getUsers, updateUserAnswer } from './users'
import { getQuestions, answerQuestion, addNewQuestion } from './questions'
import { setAuthedUser } from './authedUser'

export function fetchInitialUsers() {
  return (dispatch) => {
    _getUsers().then(users => {dispatch(getUsers(users))})
  }
}

export function fetchInitialQuestions() {
  return (dispatch) => {
    _getQuestions().then(questions => {dispatch(getQuestions(questions))})
  }
}

export function setAuthedUserId(authedUserId, dispatch) {
  dispatch(setAuthedUser(authedUserId))
}

export function handleAnswerQuestion(info) {
  return (dispatch) => {
    dispatch(answerQuestion(info))
    dispatch(updateUserAnswer(info))

    return _saveQuestionAnswer(info)
      .then((questions) => {
        dispatch(fetchInitialQuestions(questions))
      })
  }
}

export function handleAddQuestion(info) {
  return (dispatch) => {
    return _saveQuestion(info)
      .then((question) => {
        dispatch(addNewQuestion(question))
      })
  }
}
