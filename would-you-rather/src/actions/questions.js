import { saveQuestion } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

export function getQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

export function answerQuestion ({authedUser, qid, answer}) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer
  }
}

export function addNewQuestion (question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

// export function handleAddQuestion(info) {
//   return (dispatch) => {
//     return saveQuestion(info)
//       .then((question) => {
//         dispatch(addNewQuestion(question))
//       })
//   }
// }
export const handleAddQuestion = ({ optionOne, optionTwo }) => (dispatch, getState) => {
  const { authedUser } = getState();

  return saveQuestion({
    author: authedUser,
    optionOneText: optionOne,
    optionTwoText: optionTwo
  })
    .then(question => dispatch(addNewQuestion(question)))
    .then(question => {
      return question
    })
};
