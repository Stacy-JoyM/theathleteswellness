import './FaqPage.css'

const faqItems = [
  {
    question: 'How quickly can I get started?',
    answer:
      'You can review available packages and begin enrollment online in minutes. Our team guides you through each step.',
  },
  {
    question: 'Are there waiting periods before benefits start?',
    answer:
      'Waiting periods may vary by package and benefit type. We provide clear terms during enrollment so you understand exactly when cover begins.',
  },
  {
    question: 'Can I upgrade my package later?',
    answer:
      'Yes. Members can review and upgrade to a higher package based on evolving needs, subject to package terms and eligibility checks.',
  },
  {
    question: 'Do you support team or club enrollment?',
    answer:
      'Yes. We offer structured options for teams, academies, and sports organizations with scalable benefits and coordinated support.',
  },
  {
    question: 'Which payment options are available?',
    answer:
      'We support common payment arrangements based on package terms, including recurring payment plans where applicable.',
  },
  {
    question: 'How do renewals work?',
    answer:
      'Before expiry, members receive renewal guidance and can review package options to continue coverage without service interruption.',
  },
]

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
          {faqItems.map((item) => (
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
