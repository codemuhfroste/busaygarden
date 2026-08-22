import LeafIcon from './LeafIcon'

const PRODUCTS = [
  {
    name: 'Olmetie Lettuce',
    tagline: 'Butterhead-style salad lettuce',
    description:
      'Tender, mild-flavored lettuce grown in our hydroponic channels. Harvested with the roots trimmed fresh so it stays crisp for days.',
  },
  {
    name: 'Arugula',
    tagline: 'Peppery salad rocket',
    description:
      'Fast-growing, nutrient-dense greens with a signature peppery bite. Perfect for salads, sandwiches, and garnish.',
  },
]

function Products() {
  return (
    <section id="products" className="section products">
      <div className="container">
        <span className="section-eyebrow">What We Supply</span>
        <h2 className="section-heading">
          Two salad greens, grown the hydroponic way
        </h2>
        <p className="section-sub">
          Every head is grown in nutrient-fed water channels under careful
          watch, then harvested at peak freshness for delivery or pickup.
        </p>

        <div className="product-grid">
          {PRODUCTS.map((product) => (
            <article className="product-card" key={product.name}>
              <div className="product-icon">
                <LeafIcon size={40} color="#7cb928" />
              </div>
              <h3>{product.name}</h3>
              <p className="product-tagline">{product.tagline}</p>
              <p>{product.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
