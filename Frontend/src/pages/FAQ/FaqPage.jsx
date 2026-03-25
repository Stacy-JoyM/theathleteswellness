import { FAQ_ITEMS } from '../../constants'
import './FaqPage.css'

function FaqPage() {
  return (
    <section className="faq-page">
      <div className="faq-container">
        <p className="faq-kicker">FAQ Section</p>
        <h1>Frequently Asked Questions</h1>
        <p className="faq-intro">
          Find quick answers about our insurance packages, enrollment process, and ongoing support.
        </p>

        <div className="faq-list">
          {FAQ_ITEMS.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary className="faq-question">{item.question}</summary>
              <div className="faq-answer-wrap">
                <p className="faq-answer">{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FaqPage
