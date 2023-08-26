import React from 'react'
import styles from '../styles/products.module.scss'
import { useFetchAllProducts } from '../hooks/products/useFetchProducts'

export default function Products() {
  const { allProducts, isLoading, isError } = useFetchAllProducts()
  const singleProduct = (id) => {
    console.log(id)
  }
  return (
    <div className={styles.Products}>
      <h1 className={styles.title}>Products</h1>
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
                  <button onClick={() => singleProduct(item.id)}>More..</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
