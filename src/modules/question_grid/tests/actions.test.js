import * as actionTypes from '../actionTypes'
import * as actions from '../actions'

describe('question grid actions tests', () => {

  describe('ADD_QUESTIONS action tests', () => {

    it('should create simple ADD_QUESTIONS action', () => {

      const expectedAction = {
        type : actionTypes.ADD_QUESTIONS,
        questionAmount : 8
      }

      expect(actions.createAddQuestionsAction(8)).toEqual(expectedAction)

    })

  })

  describe('EDIT_QUESTION action tests', () => {

    it('should create simple EDIT_QUESTION action', () => {

      const question = {
        id : 1,
        text : "aa",
        events : [],
        points : 0
      }

      const expectedAction = {
        type : actionTypes.EDIT_QUESTION,
        question
      }

      expect(actions.createEditQuestionAction(question)).toEqual(expectedAction)

    })

  })

  describe('ADD_THEMES action tests', () => {

    it('should create simple ADD_THEMES action', () => {

      const expectedAction = {
        type : actionTypes.ADD_THEMES,
        themesAmount : 8
      }

      expect(actions.createAddThemesAction(8)).toEqual(expectedAction)

    })

  })

  describe('EDIT_THEME action tests', () => {

    it('should create simple EDIT_THEME action', () => {

      const theme = {
        id : 1,
        text : "text"
      }

      const expectedAction = {
        type : actionTypes.EDIT_THEME,
        theme
      }

      expect(actions.createEditThemesAction(theme)).toEqual(expectedAction)

    })

  })

})
