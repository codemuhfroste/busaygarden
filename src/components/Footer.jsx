import LeafIcon from './LeafIcon'
import { CONTACT_NAME, LOCATION, PHONE_DISPLAY, PHONE_TEL } from '../constants'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#home" className="brand brand-light">
          <LeafIcon size={24} color="#7cb928" />
          <span>
            Busay <em>Garden</em>
          </span>
        </a>

        <p className="footer-tagline">
          Fresh hydroponic lettuce &amp; arugula from {LOCATION}.
        </p>

        <p className="footer-contact">
          {CONTACT_NAME} &middot;{' '}
          <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
        </p>

        <p className="footer-copy">
          &copy; {year} Busay Garden. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
