import LeafIcon from './LeafIcon'
import { LOCATION, PHONE_TEL } from '../constants'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="section-eyebrow hero-eyebrow">
            Grown fresh &middot; {LOCATION}
          </span>
          <h1>
            Crisp hydroponic
            <br />
            lettuce &amp; arugula,
            <br />
            harvested to order.
          </h1>
          <p className="hero-sub">
            Busay Garden grows clean, pesticide-light salad greens using
            hydroponic NFT channels right here in Busay, Daraga, Albay.
            Freshly cut and ready for your table, market stall, or restaurant.
          </p>
          <div className="hero-actions">
            <a href={`tel:${PHONE_TEL}`} className="btn btn-primary">
              Call to Order
            </a>
            <a href="#products" className="btn btn-outline-dark">
              See What We Grow
            </a>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="hero-blob" />
          <LeafIcon size={220} color="#7cb928" className="hero-leaf" />
          <LeafIcon size={110} color="#1c3b12" className="hero-leaf-small" />
        </div>
      </div>
    </section>
  )
}

export default Hero
