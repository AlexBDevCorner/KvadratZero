import * as actionTypes from '../actionTypes'
import reducer from '../reducer'

describe('question grid reducer tests :', () => {

  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      questions : [],
      themes : []
    })
  })

  describe('ADD_QUESTIONS action handling tests :', () => {

    it('should update state with 8 questions', () => {

      const addQuestionsAction = {
        type : actionTypes.ADD_QUESTIONS,
        questionAmount : 8
      }

      expect(reducer(undefined, addQuestionsAction).questions.length).toBe(8)
    })

  })

  describe('EDIT_QUESTION action handling tests :', () => {

    const initialState = {
      questions: [
        {
          id : 0,
          text : "some text",
          events : ["event"],
          points : 0
        }
      ],
      themes : []
    }

    it('should edit questions text', () => {

      const editQuestionAction = {
        type : actionTypes.EDIT_QUESTION,
        question : {
          id : 0,
          text : "new text"
        }
      }

      const finalState = reducer(initialState, editQuestionAction)

      expect(finalState.questions[0]).toEqual({
        ...initialState.questions[0],
        text : "new text"
      })

    })

    it('should edit questions events', () => {

      const editQuestionAction = {
        type : actionTypes.EDIT_QUESTION,
        question : {
          id : 0,
          events : ["event1", "event2"]
        }
      }

      const finalState = reducer(initialState, editQuestionAction)

      expect(finalState.questions[0]).toEqual({
        ...initialState.questions[0],
        events : ["event1", "event2"]
      })

    })

    it('should edit questions points', () => {

      const editQuestionAction = {
        type : actionTypes.EDIT_QUESTION,
        question : {
          id : 0,
          points : 15
        }
      }

      const finalState = reducer(initialState, editQuestionAction)

      expect(finalState.questions[0]).toEqual({
        ...initialState.questions[0],
        points : 15
      })

    })

  })

  describe('ADD_THEMES action handling tests :', () => {

    it('should update state with 8 themes', () => {

      const addThemesAction = {
        type : actionTypes.ADD_THEMES,
        themeAmount : 8
      }

      expect(reducer(undefined, addThemesAction).themes.length).toBe(8)
    })

  })

  describe('EDIT_THEME action handling tests :', () => {

    it('should edit theme\'s text field', () => {

      const initialState = {
        questions: [],
        themes : [
          {
            id : 0,
            text : "old text"
          }
        ]
      }

      const editThemeAction = {
        type : actionTypes.EDIT_THEME,
        theme : {
          id : 0,
          text : "new text"
        }
      }

      expect(reducer(initialState, editThemeAction).themes[0]).toEqual({
        id : 0,
        text : "new text"
      })

    })

  })

})
