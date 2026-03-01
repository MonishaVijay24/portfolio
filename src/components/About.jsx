import './About.css'

export default function About() {
  return (
    <section id="about">
      <h2 className="section-title">About Me</h2>
      <div className="about__grid">
        <div className="about__avatar" aria-hidden="true">
          <span className="about__initials">MV</span>
        </div>
        <div className="about__text">
          <p>
            Hello! I&apos;m <strong>Monisha Vijay</strong>, a passionate software developer
            who loves building clean, efficient, and user-friendly applications.
          </p>
          <p>
            I enjoy working across the full stack — from crafting intuitive UIs to designing
            scalable back-end systems. I&apos;m always learning new technologies and contributing
            to open source projects.
          </p>
          <p>
            When I&apos;m not coding, you&apos;ll find me exploring the latest trends in tech,
            reading, or collaborating with the developer community.
          </p>
          <div className="about__links">
            <a
              href="https://github.com/MonishaVijay24"
              target="_blank"
              rel="noreferrer"
              className="btn btn--primary"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
