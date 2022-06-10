export default function Button (name, className) {
  return (
    <a href="/" className={`c-button ${className ? `c-button--${className}` : ''}`}>
      <span className="c-button__span">{name}</span>
    </a>
  );
}