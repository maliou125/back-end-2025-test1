import React from 'react'
import './DescriptionBox.css'

const DiscriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (124)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Découvrez une expérience d'achat en ligne incomparable avec MiMi Store,
           votre destination unique pour tous vos besoins. 
           Nous offrons une large gamme de produits allant des dernières tendances en mode, 
           aux gadgets électroniques, en passant par des articles de maison et de jardin. 
           Notre mission est de rendre le shopping en ligne simple, rapide et agréable pour vous.</p>
           <p>Nous proposons une gamme variée de produits soigneusement sélectionnés pour garantir qualité et satisfaction. Explorez des vêtements stylés, des accessoires uniques.</p>
      </div>
    </div>
  )
}

export default DiscriptionBox
