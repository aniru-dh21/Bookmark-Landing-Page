import { faqs } from "../data.json";
import Accordion from "./accordion";

function FaqSection() {
  return (
    <section className="faq region" aria-labelledby="faq-label">
      <div className="wrapper">
        <h2 id="faq-label">Frequently Asked Questions</h2>
        <p>
          Here are some of our FAQs. If you have any other questions you'd like
          answered please feel free to email us.
        </p>
        <ul role="list">
          {faqs.map((faq) => (
            <li key={faq.id}>
              <Accordion faq={faq} />
            </li>
          ))}
        </ul>
        <a href="#" className="btn primary">
          More Info
        </a>
      </div>
    </section>
  );
}

export default FaqSection;
