import React, { useEffect, useState } from 'react'
import './index.scss'
import Collection from './Collection'

const cats = [
    { name: 'Все' },
    { name: 'Море' },
    { name: 'Горы' },
    { name: 'Архитектура' },
    { name: 'Города' },
]

function App() {
    const [categoryId, setCategoryId] = useState(0)
    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(true)
    const [searchValue, setSearchValue] = useState('')
    const [colletions, setCollections] = useState([])

    const category = categoryId ? `category=${categoryId}` : ''

    useEffect(() => {
        setIsLoading(true)
        fetch(
            `https://64906e131e6aa71680cb3e6e.mockapi.io/photo_collections?page=${page}&limit=3&${category}`
        )
            .then((res) => res.json())
            .then((json) => {
                setCollections(json)
            })
            .catch((err) => {
                console.warn(err)
                alert('Ошибка при получении данных')
            })
            .finally(() => setIsLoading(false))
    }, [categoryId, page])

    return (
        <div className="App">
            <h1>Моя коллекция фотографий</h1>
            <div className="top">
                <ul className="tags">
                    {cats.map((obj, idx) => (
                        <li
                            onClick={() => setCategoryId(idx)}
                            className={categoryId === idx ? 'active' : ''}
                            key={obj.name}
                        >
                            {obj.name}
                        </li>
                    ))}
                </ul>
                <input
                    className="search-input"
                    placeholder="Поиск по названию"
                    value={searchValue}
                    onChange={(e) => {
                        setSearchValue(e.target.value)
                    }}
                />
            </div>
            <div className="content">
                {isLoading ? (
                    <h2>Идет загрузка...</h2>
                ) : (
                    colletions
                        .filter((item) =>
                            item.name
                                .toLowerCase()
                                .includes(searchValue.toLocaleLowerCase())
                        )
                        .map((item, idx) => (
                            <Collection
                                key={idx}
                                name={item.name}
                                images={item.photos}
                            />
                        ))
                )}
            </div>
            <ul className="pagination">
                {[...Array(3)].map((_, i) => (
                    <li
                        key={i}
                        onClick={() => setPage(i + 1)}
                        className={page === i + 1 ? 'active' : ''}
                    >
                        {i + 1}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default App
