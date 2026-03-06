import './PageHero.css'

export default function PageHero({ kicker, title, description, className = '' }) {
  return (
    <header className={`page-hero ${className}`}>
      {kicker && <p className="page-hero-kicker">{kicker}</p>}
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </header>
  )
}
