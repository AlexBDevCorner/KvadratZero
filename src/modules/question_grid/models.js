export const createQuestion = (question = {}) => ({
  id : question.id || 0,
  text : question.text || "текст вопроса",
  events : question.events || [],
  points : question.points || 0
})

export const createTheme = (theme = {}) => ({
  id : theme.id || 0,
  text : theme.text || "текст темы"
})
