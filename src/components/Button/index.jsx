export default function Button (name, className) {
  return (
    <a href="/" aria-label="button" className={`c-button ${className ? `c-button--${className}` : ''}`}>
      <span className="c-button__span">{name}</span>
    </a>
  );
}