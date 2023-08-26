import React from 'react'
import styles from '../styles/products.module.scss'
import { useFetchAllProducts } from '../hooks/products/useFetchProducts'
import { useNavigate } from 'react-router-dom'
import Loader from './utilities/Loader'

export default function Products() {
  const { allProducts, isLoading, isError } = useFetchAllProducts()
  const navigate = useNavigate()
  const singleProduct = (id) => {
    navigate(`/product?number=${id}`)
    window.location.replace(`http://localhost:8082/product?number=${id}`)
  }
  return (
    <div className={styles.Products}>
      <h1 className={styles.title}>Products</h1>
      {!allProducts ? (
        <div className={styles.Loader}>
          <Loader />
        </div>
      ) : (
        <div className={styles.items}>
          {allProducts?.map((item) => {
            return (
              <div className={styles.itemCart} key={item.id}>
                <span className={styles.title}>{item.title}</span>
                <img src={item.image} />
                <div className={styles.bottom}>
                  <span className={styles.price}>
                    {item.price} <small>$</small>
                  </span>
                  <div>
                    {/* <button>add to cart</button> */}
                    <button onClick={() => singleProduct(item.id)}>
                      More..
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
