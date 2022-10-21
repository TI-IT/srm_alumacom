import React from 'react'

import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton'

const Home = () => {
  const [items, setItems] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [categoryId, setcategoryId] = React.useState(0)
  const [sortType, setSortType] = React.useState(0)

  //Загрузка один раз
  React.useEffect(() => {
    setIsLoading(true)
    fetch('https://63427733ba4478d4783c44ef.mockapi.io/items?category=' + categoryId + '&')
      .then(res => {
        return res.json()
      })
      .then(arr => {
        setItems(arr)
        setIsLoading(false)
      })
    window.scrollTo(0, 0) // при первой загрузке скролит вверх
  }, [categoryId])
  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={id => setcategoryId(id)} />
        <Sort sortValue={sortType} onChangeSort={id => setSortType(id)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map(obj => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  )
}

export default Home
