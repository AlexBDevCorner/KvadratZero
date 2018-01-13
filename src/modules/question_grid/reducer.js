import * as actionTypes from './actionTypes'
import * as models from './models'

const INITIAL_STATE = {
  questions : [],
  themes : []
}

export default (state = INITIAL_STATE, action) => {

  switch(action.type) {

    case actionTypes.ADD_QUESTIONS :
      return {
        ...state,
        questions : [
          ...state.questions,
          ...Array(action.questionAmount)
            .fill({})
            .map((element, index) => models.createQuestion({
              id : index
            }))
        ]
      }

    case actionTypes.EDIT_QUESTION :
      const editedQuestions = state.questions.map(
        (q) => q.id === action.question.id
          ? ({ ...q, ...action.question })
          : q
      )

      return {
        ...state,
        questions : editedQuestions
      }

    case actionTypes.ADD_THEMES :
      return {
        ...state,
        themes : [
          ...state.themes,
          ...Array(action.themeAmount)
            .fill({})
            .map((element, index) => models.createTheme({
              id : index
            }))
        ]
      }

    case actionTypes.EDIT_THEME :
      const editedThemes = state.themes.map(
        (t) => t.id === action.theme.id
          ? ({ ...t, ...action.theme })
          : t
      )

      return {
        ...state,
        themes : editedThemes
      }

    default :
      return state
  }
}
