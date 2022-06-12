export default function Heading({ title, subtitle }) {
  return (
    <section className="heading container">
      <h1 className="heading__title">{title}</h1>
      <p className="heading__subtitle">{subtitle}</p>
    </section>
  );
}
