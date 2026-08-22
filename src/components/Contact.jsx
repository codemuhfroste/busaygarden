import { CONTACT_NAME, LOCATION, PHONE_DISPLAY, PHONE_TEL } from '../constants'

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container contact-inner">
        <div className="contact-card">
          <span className="section-eyebrow">Get In Touch</span>
          <h2 className="section-heading">Order fresh greens this week</h2>
          <p className="section-sub">
            Reach out to place an order, ask about availability, or arrange
            pickup at the garden.
          </p>

          <dl className="contact-details">
            <div>
              <dt>Contact Person</dt>
              <dd>{CONTACT_NAME}</dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>
                <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
              </dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{LOCATION}</dd>
            </div>
          </dl>

          <a href={`tel:${PHONE_TEL}`} className="btn btn-primary">
            Call {PHONE_DISPLAY}
          </a>
        </div>

        <div className="contact-map">
          <iframe
            title="Map of Daraga, Albay"
            src="https://www.openstreetmap.org/export/embed.html?bbox=123.6474%2C13.1049%2C123.7274%2C13.1849&layer=mapnik&marker=13.1449%2C123.6874"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            className="map-link"
            href="https://www.google.com/maps/search/?api=1&query=Busay%2C+Daraga%2C+Albay"
            target="_blank"
            rel="noreferrer"
          >
            Open in Google Maps &rarr;
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
