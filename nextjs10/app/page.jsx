
import axios from 'axios'

export default async function Home() {
  let products = []

  try {
    const response = await axios.get(
      'https://fakestoreapi.com/products'
    )
    products = response.data
  } catch (error) {
    console.error('Ошибка загрузки товаров:', error)
  }

  return (
    <main className="shop">
      <header className="shop-header">
        <a href="/" className="shop-logo">
          LUXE<span>.</span>
        </a>

        <a href="#products" className="shop-button">
          Смотреть каталог ↗
        </a>
      </header>

      <section className="shop-hero">
        <p className="shop-label">НОВАЯ КОЛЛЕКЦИЯ</p>
        <h1>
          Найди свой
          <br />
          <span>стиль.</span>
        </h1>
        <p className="shop-description">
          Открой для себя коллекцию товаров
          и выбери то, что подходит именно тебе.
        </p>
        <a href="#products" className="shop-cta">
          Смотреть товары →
        </a>
      </section>

      <section id="products" className="products-section">
        <div className="products-heading">
          <div>
            <p className="shop-label">НАША КОЛЛЕКЦИЯ</p>
            <h2>Популярные товары<span>.</span></h2>
          </div>
          <p className="products-total">
            {products.length} товаров
          </p>
        </div>

        {products.length > 0 ? (
          <div className="products-grid">
            {products.map((product) => (
              <article
                className="product-card"
                key={product.id}
              >
                <div className="product-image">
                  <img
                    src={product.image}
                    alt={product.title}
                  />
                  <span className="product-category">
                    {product.category}
                  </span>
                </div>

                <div className="product-info">
                  <h3>{product.title}</h3>

                  <p className="product-rating">
                    <span>★</span> {product.rating.rate}
                    <span className="rating-count">
                      ({product.rating.count})
                    </span>
                  </p>

                  <div className="product-bottom">
                    <strong>
                      ${product.price.toFixed(2)}
                    </strong>

                    <a
                      href={`https://fakestoreapi.com/products/${product.id}`}
                      target="_blank"
                      rel="noreferrer"
                      className="product-link"
                    >
                      ↗
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="products-error">
            Не удалось загрузить товары. Обнови страницу позже.
          </p>
        )}
      </section>

      <footer className="shop-footer">
        <a href="/" className="shop-logo">
          LUXE<span>.</span>
        </a>
        <p>Хороший вкус начинается с деталей.</p>
      </footer>
    </main>
  )
}
