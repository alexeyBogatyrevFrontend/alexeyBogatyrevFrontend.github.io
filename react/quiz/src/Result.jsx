import React from 'react'

const Result = ({ setStep, answers, questions, setAnswers }) => {
    return (
        <div className="result">
            <img
                src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
                alt=""
            />
            <h2>
                Вы отгадали {answers} ответа из {questions.length}
            </h2>
            <button
                onClick={() => {
                    setStep(0)
                    setAnswers(0)
                }}
            >
                Попробовать снова
            </button>
        </div>
    )
}

export default Result
