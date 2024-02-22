import ContactForm from "./contact-form";

function CtaSection() {
  return (
    <section className="cta">
      <div className="wrapper">
        <h2 className="visually-hidden">Contact Us</h2>
        <p className="eyebrow">35,000+ already joined</p>
        <p className="title">Stay up-to-date with what we're doing</p>
        <ContactForm />
      </div>
    </section>
  );
}

export default CtaSection;
