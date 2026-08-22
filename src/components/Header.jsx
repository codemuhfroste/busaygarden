import { useState } from 'react'
import LeafIcon from './LeafIcon'
import { PHONE_DISPLAY, PHONE_TEL } from '../constants'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#home" className="brand">
          <LeafIcon size={28} color="#7cb928" />
          <span>
            Busay <em>Gardens</em>
          </span>
        </a>

        <nav className={`nav ${open ? 'nav-open' : ''}`}>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href={`tel:${PHONE_TEL}`} className="header-phone">
          {PHONE_DISPLAY}
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Header
