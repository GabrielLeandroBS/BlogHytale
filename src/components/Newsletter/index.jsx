import InputNewsletter from '../Inputs/Newsletter';

export default function Newsletter() {
  return (
    <section className="c-newsletter" aria-label='newsletter'>
      <h3 className="c-newsletter__title">Informativo Quinzenal</h3>
      <p className="c-newsletter__subtitle">
        Um boletim informativo quinzenal para você ficar atualizado sobre o que acontece no seu país e no mundo.
      </p>
      <InputNewsletter />
    </section>
  );
}
