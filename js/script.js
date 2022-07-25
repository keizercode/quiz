const quizData = [
  {
    question: 'Tahun berapakah Luqman lahir?',
    a: '2001',
    b: '2000',
    c: '1999',
    d: '1998',
    correct: 'a',
  },
  {
    question: 'Di daerah manakah Luqman lahir?',
    a: 'Surabaya',
    b: 'Makassar',
    c: 'Bandung',
    d: 'Kediri',
    correct: 'd',
  },
  {
    question: 'Luqman orang yang seperti apa',
    a: 'Pemalu',
    b: 'Sabar',
    c: 'Humoris',
    d: 'Romantis',
    correct: 'a',
  },
  {
    question: 'Love language Luqman yang paling disuka',
    a: 'Acts of Service',
    b: 'Quality Time',
    c: 'Receiving Gifts',
    d: 'Physical Touch',
    correct: 'd',
  },
  {
    question: 'Makanan yang paling disukai Luqman',
    a: 'Sayur Asem',
    b: 'Sate Ayam',
    c: 'Pecel Ayam',
    d: 'Ketoprak',
    correct: 'a',
  },
  {
    question: 'Buah yang tidak disukai Luqman',
    a: 'Buah Mangga',
    b: 'Buah Naga',
    c: 'Buah Durian',
    d: 'Buah Khuldi',
    correct: 'd',
  },
  {
    question: 'Seperti apa style Fashion Luqman',
    a: 'Casual',
    b: 'Classy',
    c: 'Edgy',
    d: 'none of the above',
    correct: 'd',
  },
]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
  deselectAnswers()

  const currentQuizData = quizData[currentQuiz]

  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}

function getSelected() {
  let answer = undefined

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id
    }
  })

  return answer
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false
  })
}

submitBtn.addEventListener('click', () => {
  // check to see the answer
  const answer = getSelected()

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++
    }

    currentQuiz++
    if (currentQuiz < quizData.length) {
      loadQuiz()
    } else {
      quiz.innerHTML = `
                <h2>    You answered correctly at ${score}/ ${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `
    }
  }
})
