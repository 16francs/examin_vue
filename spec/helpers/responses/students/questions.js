const get = {
  '/students/problems/1': {
    questions: [
      { id: 1, sentence: 'read', correct: '読む' },
      { id: 2, sentence: 'walk', correct: '歩く' }
    ]
  },
  '/students/problems/1/questions/random?count=10': {
    questions: [
      { id: 1, sentence: 'read', correct: '読む' },
      { id: 2, sentence: 'walk', correct: '歩く' }
    ]
  }
}

export default {
  get
}
