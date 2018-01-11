import * as actionTypes from './actionTypes'

export const createAddQuestionsAction = (questionAmount) => ({
  type : actionTypes.ADD_QUESTIONS,
  questionAmount
})

export const createEditQuestionAction = (question) => ({
  type : actionTypes.EDIT_QUESTION,
  question
})

export const createAddThemesAction = (themesAmount) => ({
  type : actionTypes.ADD_THEMES,
  themesAmount
})

export const createEditThemesAction = (theme) => ({
  type : actionTypes.EDIT_THEME,
  theme
})
