import React, { useState } from 'react'
import './index.scss'
import Modal from './Modal'

function App() {
    const [isModalActive, setIsModalActive] = useState(false)

    return (
        <div className="App">
            <button
                className="open-modal-btn"
                onClick={() => setIsModalActive(true)}
            >
                ✨ Открыть окно
            </button>
            <Modal
                isModalActive={isModalActive}
                setIsModalActive={setIsModalActive}
            />
        </div>
    )
}

export default App
