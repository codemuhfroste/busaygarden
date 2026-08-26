import olmetieImg from '../assets/olmetie.jpg'
import arugulaImg from '../assets/arugula.jpg'
import Reveal from './Reveal'

const PRODUCTS = [
  {
    name: 'Olmetie Lettuce',
    tagline: 'Butterhead-style salad lettuce',
    description:
      'Tender, mild-flavored lettuce grown in our hydroponic channels. Harvested with the roots trimmed fresh so it stays crisp for days.',
    image: olmetieImg,
  },
  {
    name: 'Arugula',
    tagline: 'Peppery salad rocket',
    description:
      'Fast-growing, nutrient-dense greens with a signature peppery bite. Perfect for salads, sandwiches, and garnish.',
    image: arugulaImg,
  },
]

function Products() {
  return (
    <section id="products" className="section products">
      <div className="container">
        <Reveal>
          <span className="section-eyebrow">What We Supply</span>
          <h2 className="section-heading">
            Two salad greens, grown the hydroponic way
          </h2>
          <p className="section-sub">
            Every head is grown in nutrient-fed water channels under careful
            watch, then harvested at peak freshness for delivery or pickup.
          </p>
        </Reveal>

        <div className="product-grid">
          {PRODUCTS.map((product, index) => (
            <Reveal
              as="article"
              className="product-card"
              key={product.name}
              delay={index * 120}
              style={{ backgroundImage: `url(${product.image})` }}
            >
              <div className="product-card-overlay" />
              <div className="product-card-content">
                <h3>{product.name}</h3>
                <p className="product-tagline">{product.tagline}</p>
                <p>{product.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
