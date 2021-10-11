import React from 'react'
import { Menu, CategorPop, Pizzablock } from '../components'
function Home(props) {
  console.log(props.items);

 
  return (
    <div className="container">
      <div className="content__top">
        <Menu
          onClick={(name) => alert(name)}
          items={['Мясные',
            'Вегетарианская',
            'Гриль',
            'Острые',
            'Закрытые']} />
        <CategorPop items={["популярности", "пене", "плфавиту"]} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
        
        props.items.map(item=>(
          <Pizzablock key={item.id} data={item} />
        ))
        
        }
        
      </div>
      </div>
  )
}

export default Home
