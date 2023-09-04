import React from 'react'
import styles from '../styles/products.module.scss'
import { useFetchSingleProducts } from '../hooks/products/useFetchProducts'
import Loader from './utilities/Loader'
// import { useDispatch } from 'react-redux'
// import { addToCart } from '../redux/cartSlice'

export default function SingleProduct() {
  let id = window.location.search
  const productId = id.slice(id.indexOf('=') + 1)
  const { allProducts, isLoading, isError } = useFetchSingleProducts(productId)
  // const dispatch = useDispatch()
  return (
    <>
      {!allProducts ? (
        <div className={styles.Loader}>
          <Loader />
        </div>
      ) : (
        <div className={styles.singleProduct}>
          <h3>{allProducts?.title}</h3>
          <img src={allProducts?.image} />
          <p className={styles.price}>
            Price: <span>{allProducts?.price}$</span>
          </p>
          <button>Add to Cart</button>

          <p>{allProducts?.description}</p>
        </div>
      )}
    </>
  )
}
