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

    default :
      return state
  }
}
