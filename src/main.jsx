import React from 'react'
import ReactDOM from 'react-dom/client'
import { restaurants } from './constants/mock'

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
  <>
    <section className='restaurant' id={restaurants[0].id}>
      <h1 className='restaurant-name'>{restaurants[0].name}</h1>
      <div className='menu'>
        <h2 className='menu-header'>Menu</h2>
        <ul className='menu-list'>
          <li className='menu-item' id={restaurants[0].menu[0].id}>{restaurants[0].menu[0].name}</li>
          <li className='menu-item' id={restaurants[0].menu[1].id}>{restaurants[0].menu[1].name}</li>
          <li className='menu-item' id={restaurants[0].menu[2].id}>{restaurants[0].menu[2].name}</li>
        </ul>
      </div>
      <div className='reviews'>
        <h2 className='reviews-header'>Reviews</h2>
        <ul className='reviews-list'>
          <li className='reviews-item' id={restaurants[0].reviews[0].id}>{restaurants[0].reviews[0].text}</li>
          <li className='reviews-item' id={restaurants[0].reviews[1].id}>{restaurants[0].reviews[1].text}</li>
        </ul>
      </div>
    </section>
    <hr />
    <section className='restaurant' id={restaurants[1].id}>
      <h1 className='restaurant-name'>{restaurants[1].name}</h1>
      <div className='menu'>
        <h2 className='menu-header'>Menu</h2>
        <ul className='menu-list'>
          <li className='menu-item' id={restaurants[1].menu[0].id}>{restaurants[1].menu[0].name}</li>
          <li className='menu-item' id={restaurants[1].menu[1].id}>{restaurants[1].menu[1].name}</li>
        </ul>
      </div>
      <div className='reviews'>
        <h2 className='reviews-header'>Reviews</h2>
        <ul className='reviews-list'>
          <li className='reviews-item' id={restaurants[1].reviews[0].id}>{restaurants[1].reviews[0].text}</li>
          <li className='reviews-item' id={restaurants[1].reviews[1].id}>{restaurants[1].reviews[1].text}</li>
          <li className='reviews-item' id={restaurants[1].reviews[2].id}>{restaurants[1].reviews[2].text}</li>
        </ul>
      </div>
    </section>
    <hr />
    <section className='restaurant' id={restaurants[2].id}>
      <h1 className='restaurant-name'>{restaurants[2].name}</h1>
      <div className='menu'>
        <h2 className='menu-header'>Menu</h2>
        <ul className='menu-list'>
          <li className='menu-item' id={restaurants[2].menu[0].id}>{restaurants[2].menu[0].name}</li>
          <li className='menu-item' id={restaurants[2].menu[1].id}>{restaurants[2].menu[1].name}</li>
          <li className='menu-item' id={restaurants[2].menu[2].id}>{restaurants[2].menu[2].name}</li>
        </ul>
      </div>
      <div className='reviews'>
        <h2 className='reviews-header'>Reviews</h2>
        <ul className='reviews-list'>
          <li className='reviews-item' id={restaurants[2].reviews[0].id}>{restaurants[2].reviews[0].text}</li>
        </ul>
      </div>
    </section>
    <hr />
    <section className='restaurant' id={restaurants[3].id}>
      <h1 className='restaurant-name'>{restaurants[3].name}</h1>
      <div className='menu'>
        <h2 className='menu-header'>Menu</h2>
        <ul className='menu-list'>
          <li className='menu-item' id={restaurants[3].menu[0].id}>{restaurants[3].menu[0].name}</li>
          <li className='menu-item' id={restaurants[3].menu[1].id}>{restaurants[3].menu[1].name}</li>
        </ul>
      </div>
      <div className='reviews'>
        <h2 className='reviews-header'>Reviews</h2>
        <ul className='reviews-list'>
          <li className='reviews-item' id={restaurants[3].reviews[0].id}>{restaurants[3].reviews[0].text}</li>
          <li className='reviews-item' id={restaurants[3].reviews[1].id}>{restaurants[3].reviews[1].text}</li>
        </ul>
      </div>
    </section>
  </>
)
