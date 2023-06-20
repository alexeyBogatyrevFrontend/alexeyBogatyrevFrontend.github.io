import { useState } from 'react'
import Game from './Game'
import Result from './Result'
import './index.scss'

const questions = [
    {
        title: 'React - это ... ?',
        variants: ['библиотека', 'фреймворк', 'приложение'],
        correct: 0,
    },
    {
        title: 'Компонент - это ... ',
        variants: [
            'приложение',
            'часть приложения или страницы',
            'то, что я не знаю что такое',
        ],
        correct: 1,
    },
    {
        title: 'Что такое JSX?',
        variants: [
            'Это простой HTML',
            'Это функция',
            'Это тот же HTML, но с возможностью выполнять JS-код',
        ],
        correct: 2,
    },
]

function App() {
    const [step, setStep] = useState(0)
    let question = questions[step]

    const [answers, setAnswers] = useState(0)

    const onClickVariant = (index) => {
        if (question.correct === index) {
            setAnswers(answers + 1)
        }

        setStep(step + 1)
    }

    return (
        <div className="App">
            {step !== questions.length ? (
                <Game
                    question={question}
                    step={step}
                    questions={questions}
                    onClickVariant={onClickVariant}
                />
            ) : (
                <Result
                    setStep={setStep}
                    answers={answers}
                    questions={questions}
                    setAnswers={setAnswers}
                />
            )}
        </div>
    )
}

export default App
