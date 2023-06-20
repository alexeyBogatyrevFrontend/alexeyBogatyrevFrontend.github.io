import React, { useEffect, useState } from 'react'
import { Block } from './Block'
import './index.scss'

function App() {
    const [fromCurrency, setFfromCurrency] = useState('RUB')
    const [toCurrency, setToCurrency] = useState('USD')

    const [fromPrice, setFromPrice] = useState(0)
    const [toPrice, setToPrice] = useState(1)

    // const [rates, setRates] = useState({})

    const rates = {
        RUB: 60.524998,
        USD: 1,
        EUR: 0.98161,
        KZT: 448.63,
    }

    // useEffect(() => {
    //     fetch('https://cdn.cur.su/api/latest.json')
    //         .then((res) => res.json())
    //         .then((json) => {
    //             setRates(json)
    //             console.log(json)
    //         })
    //         .catch((err) => {
    //             console.warn(err)
    //             alert('Не удалось получить информацию')
    //         })
    // }, [])

    const onChangeFromPrice = (value) => {
        const price = value / rates[fromCurrency]
        const result = price * rates[toCurrency]

        setToPrice(result.toFixed(2))
        setFromPrice(value)
    }

    const onChangeToPrice = (value) => {
        const result = (rates[fromCurrency] / rates[toCurrency]) * value
        setFromPrice(result.toFixed(2))

        setToPrice(value)
    }

    useEffect(() => {
        onChangeFromPrice(fromPrice)
    }, [fromCurrency])

    useEffect(() => {
        onChangeToPrice(toPrice)
    }, [toCurrency])

    return (
        <div className="App">
            <Block
                value={fromPrice}
                currency={fromCurrency}
                onChangeCurrency={setFfromCurrency}
                onChangeValue={onChangeFromPrice}
            />
            <Block
                value={toPrice}
                currency={toCurrency}
                onChangeCurrency={setToCurrency}
                onChangeValue={onChangeToPrice}
            />
        </div>
    )
}

export default App
