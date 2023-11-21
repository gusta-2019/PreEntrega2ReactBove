import ItemCount from "../ItemCount/ItemCount"
import styles from "./ItemDetail.module.css"

export default function ItemDetail({id, winery, wine, location, image, category, price, stock}) {
    return (
        <article className={styles.CardItem}>
          <header className={styles.Header}>
            <h2 className={styles.ItemHeader}>
              {wine}
            </h2>
          </header>
          
      
          <section className={styles.data}>
          <picture>
            <img src={image} alt={winery} className={styles.ItemImg} />
          </picture>
          <div>
            <p className={styles.Info}>
              Bodega: {winery}
            </p>
            <p className={styles.Info}>
              Ubicacion: {location}
            </p>
            <p className={styles.Info}>
              Precio: ${price}
            </p>
            <p className={styles.Info}>
              Categoría: {category}
            </p>
            <p className={styles.Info}>
              Stock: {stock}
            </p>
          </div>
          </section>
          <footer className={styles.ItemFooter}>
            <div className={styles.CountControls}>
              <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad Agregada ', quantity)} />
            </div>
            
            <button className={styles.BuyNowButton}>Comprar Ahora</button>
          </footer>
      </article>
      
    )
  }