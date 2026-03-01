import { useState, useEffect } from 'react'
import './Projects.css'

const GITHUB_USER = 'MonishaVijay24'
const API_URL = `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&type=public`

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

function RepoCard({ repo }) {
  return (
    <article className="repo-card">
      <div className="repo-card__header">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="repo-card__name"
        >
          {repo.name}
        </a>
        {repo.stargazers_count > 0 && (
          <span className="repo-card__stars">
            ★ {repo.stargazers_count}
          </span>
        )}
      </div>

      {repo.description && (
        <p className="repo-card__desc">{repo.description}</p>
      )}

      <div className="repo-card__meta">
        {repo.language && (
          <span className="repo-card__lang">
            <span className="repo-card__lang-dot" aria-hidden="true" />
            {repo.language}
          </span>
        )}
        <span className="repo-card__updated">
          Updated {formatDate(repo.updated_at)}
        </span>
      </div>
    </article>
  )
}

export default function Projects() {
  const [repos, setRepos] = useState([])
  const [status, setStatus] = useState('loading') // 'loading' | 'success' | 'error'
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    setStatus('loading')

    fetch(API_URL)
      .then(res => {
        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`)
        return res.json()
      })
      .then(data => {
        if (cancelled) return
        const filtered = data
          .filter(r => !r.fork)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
        setRepos(filtered)
        setStatus('success')
      })
      .catch(err => {
        if (cancelled) return
        setError(err.message)
        setStatus('error')
      })

    return () => { cancelled = true }
  }, [])

  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      <p className="projects__subtitle">
        Public repositories from{' '}
        <a href={`https://github.com/${GITHUB_USER}`} target="_blank" rel="noreferrer">
          @{GITHUB_USER}
        </a>
      </p>

      {status === 'loading' && (
        <div className="projects__state">
          <div className="spinner" aria-label="Loading repositories…" />
          <p>Loading repositories…</p>
        </div>
      )}

      {status === 'error' && (
        <div className="projects__state projects__state--error">
          <p>⚠️ Could not load repositories.</p>
          <p className="projects__error-detail">{error}</p>
        </div>
      )}

      {status === 'success' && repos.length === 0 && (
        <div className="projects__state">
          <p>No public repositories found.</p>
        </div>
      )}

      {status === 'success' && repos.length > 0 && (
        <div className="projects__grid">
          {repos.map(repo => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      )}
    </section>
  )
}
