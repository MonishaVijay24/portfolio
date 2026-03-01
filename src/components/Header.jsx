import { useState, useEffect } from 'react'
import './Header.css'

const NAV_LINKS = ['about', 'skills', 'projects', 'contact']

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
        <a href="#hero" className="nav__brand">MV</a>
        <button
          className={`nav__burger${menuOpen ? ' nav__burger--open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
        <ul className={`nav__links${menuOpen ? ' nav__links--open' : ''}`}>
          {NAV_LINKS.map(link => (
            <li key={link}>
              <a href={`#${link}`} onClick={() => setMenuOpen(false)}>
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section id="hero" className="hero">
        <div className="hero__content">
          <p className="hero__greeting">Hi, I&apos;m</p>
          <h1 className="hero__name">Monisha Vijay</h1>
          <p className="hero__subtitle">Software Developer &amp; Open Source Enthusiast</p>
          <div className="hero__cta">
            <a href="#projects" className="btn btn--primary">View Projects</a>
            <a href="#contact" className="btn btn--outline">Contact Me</a>
          </div>
        </div>
        <div className="hero__bg" aria-hidden="true" />
      </section>
    </>
  )
}
