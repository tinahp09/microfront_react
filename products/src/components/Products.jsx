import React from 'react'
import styles from '../styles/products.module.scss'
import { useFetchAllProducts } from '../hooks/products/useFetchProducts'
import Loader from './utilities/Loader'
import { useStore } from 'store/redux/store'

export default function Products() {
  const { allProducts, isLoading, isError } = useFetchAllProducts()
  // const cartItems = useSelector((state) => state.cart)
  const { count, increment } = useStore()
  const singleProduct = (id) => {
    if (id) {
      window.open(`http://localhost:8082/product?number=${id}`, '_blank')
    }
  }
  return (
    <div className={styles.Products}>
      <h4>count store(new) : {count}</h4>
      <button onClick={() => increment()}>new increment</button>
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
