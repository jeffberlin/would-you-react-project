import { getInitialData } from '../utils/api'
import { receiveUsers, handleSaveUserAnswer, addQuestion } from './users'
import { receiveQuestions, answerQuestion, handleAddNewQuestion } from './questions'
import { setAuthedUser } from './authedUser'

export function fetchInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users))
      dispatch(receiveQuestions(questions))
    })
  }
}

export function handleSaveAnswer(authedUser, qid, answer) {
  return (dispatch) => {
    dispatch(handleSaveUserAnswer(authedUser, qid, answer))
    dispatch(answerQuestion(authedUser, qid, answer))
  }
}

export function handleAddQuestion(optionOneText, optionTwoText, authedUser) {
  return (dispatch) => {
    return dispatch(handleAddNewQuestion(optionOneText, optionTwoText))
      .then((question) => {
        dispatch(addQuestion(authedUser, question.question.id))
      })
  }
}

export function setAuthedUserId(authedUserId, dispatch) {
  dispatch(setAuthedUser(authedUserId))
}
