import './InsuranceDealCard.css'

export default function InsuranceDealCard({ deal }) {
  return (
    <article className="insurance-deal-card">
      <h3>{deal.title}</h3>
      <p>{deal.summary}</p>
      <ul>
        {deal.details.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  )
}
