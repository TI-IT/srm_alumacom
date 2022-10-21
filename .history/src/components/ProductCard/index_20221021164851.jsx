import React from 'react'
import notImage from '../../assets/img/notImage.jpg'

function ProductCard({
  product_id,
  category_id,
  finishing,
  suppliers_id,
  vendor_code,
  product_name,
  unit,
  price,
  image_url
}) {
  const [activeType, setActivType] = React.useState(0)
  const [activeSize, setActivSize] = React.useState(0)
  const typeNames = ['тонкое', 'традиционное']

  if (image_url === 'none' || image_url) {
    image_url = notImage
    console.log(image_url)
  }

  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <h5 className="">{product_name}</h5>
        <img className="pizza-block__image" src={image_url} alt="product" />

        <div className="pizza-block__selector"></div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">{price} ₽</div>
          <button className="button button--outline button--add">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            <i>0</i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard