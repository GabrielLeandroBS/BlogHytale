export default function InputNewsletter({ email }) {
  return (
    <label className="c-input c-input-newsletter">
      <input
        className="c-input__input"
        type="email"
        name="email"
        placeholder="Email adress"
        id="newsletter-input"
        aria-label="Your e-mail"
        autoComplete="true"
        aria-autocomplete="true"
      />
      <button className="c-input__button">Inscrever-se</button>
    </label>
  );
}
