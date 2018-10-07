import { getInitialData } from '../utils/api'
import { receiveUsers, handleSaveUserAnswer, addQuestion } from './users'
import { receiveQuestions, answerQuestion, handleAddQuestion } from './questions'
import { setAuthedUser } from './authedUser'

export function fetchInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users))
      dispatch(receiveQuestions(questions))
    })
  }
}

export function handleSaveAnswer(qid, answer) {
  return (dispatch) => {
    dispatch(handleSaveUserAnswer(qid, answer))
    dispatch(answerQuestion(qid, answer))
  }
}

export function handleAddNewQuestion(optionOneText, optionTwoText, authedUser) {
  return (dispatch) => {
    return dispatch(handleAddQuestion(optionOneText, optionTwoText))
      .then((question) => {
        dispatch(addQuestion(authedUser, question.question.id))
      })
  }
}
export function setAuthedUserId(authedUserId, dispatch) {
  dispatch(setAuthedUser(authedUserId))
}
