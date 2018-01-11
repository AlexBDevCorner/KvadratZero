import * as models from '../models'

describe('question grid models tests :', () => {

  describe('question model tests :', () => {

    it('should create default question object', () => {

      const expectedObject = {
        id : 0,
        text : "текст вопроса",
        events : [],
        points : 0
      }

      expect(models.createQuestion()).toEqual(expectedObject)

    })

    it('should create question object with input data', () => {

      const expectedObject = {
        id : 15,
        text : "What's up?",
        events : ['event'],
        points : 200
      }

      expect(models.createQuestion({
        id : 15,
        text : "What's up?",
        events : ['event'],
        points : 200
      })).toEqual(expectedObject)

    })

  })

  describe('theme model tests :', () => {

    it('should create default theme object', () => {

      const expectedObject = {
        id : 0,
        text : "текст темы"
      }

      expect(models.createTheme()).toEqual(expectedObject)

    })

    it('should create theme object with input data', () => {

      const expectedObject = {
        id : 8,
        text : "cool theme"
      }

      expect(models.createTheme({
        id : 8,
        text : "cool theme"
      })).toEqual(expectedObject)

    })

  })

})
