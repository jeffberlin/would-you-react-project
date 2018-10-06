import { _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer } from './_DATA.js'

export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions,
  }))
}

export const saveQuestion = (question) => {
  return _saveQuestion(question)
};

export function saveAnswer (answer) {
  return _saveQuestionAnswer(answer)
}

export function pollPercentage(option, question) {
  let pollTotal = question.optionOne.votes.length + question.optionTwo.votes.length
  let percent = question[option].votes.length > 0? (question[option].votes.length/pollTotal)*100: 0

  return {
    text:`${question[option].votes.length} out of ${pollTotal} users`,
    percentage: percent
  }
}
