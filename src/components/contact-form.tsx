import { ChangeEvent, FocusEvent, FormEvent, useRef, useState } from "react";

type Options = {
  removeOnly?: boolean;
  live?: boolean;
};

function ContactForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const touched = useRef<boolean>(false);

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const validateEmail = (el: HTMLInputElement, opts?: Options) => {
    const email = el.value.trim();
    const isEmpty = email === "";

    if (isEmpty) {
      updateField(el, !isEmpty, "Can't be blank.", opts);
    } else {
      const isValid = emailRegex.test(email);
      const errorMessage = !isValid ? "Whoops, make sure it’s an email" : "";
      updateField(el, isValid, errorMessage, opts);
    }
  };

  const updateField = (
    el: HTMLInputElement,
    isValid: boolean,
    errorMessage: string,
    opts?: Options
  ) => {
    const removeOnly = opts?.removeOnly;
    const isLive = opts?.live;
    const elError = el.nextElementSibling;

    if (isValid) {
      setError("");
      el.removeAttribute("aria-invalid");
    } else if (!removeOnly) {
      setError(errorMessage);
      elError?.setAttribute("aria-live", isLive ? "assertive" : "off");
      el.setAttribute("aria-invalid", "true");
    }
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const elEmail = e.currentTarget.email;
    validateEmail(elEmail);
  };

  const onBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (email !== "") touched.current = true;

    if (touched.current) {
      validateEmail(e.target, { live: true });
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    validateEmail(e.target, { removeOnly: true });
  };

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="email" className="visually-hidden">
          Email address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email address"
          value={email}
          onChange={onChange}
          onBlur={onBlur}
        />
        <div id="email-error" className="error">
          <div style={{ overflow: "hidden" }}>
            <p>{error}</p>
          </div>
        </div>
      </div>
      <button className="btn tertiary">Contact Us</button>
    </form>
  );
}

export default ContactForm;
