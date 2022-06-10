import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Card({ date, title, subtitle, image, alt, slug }) {
  return (
    <a
      href={slug}
      title={`Go to ${slug}`}
      className="c-card"
      target="_blank"
      rel="noopener"
    >
      <article className="c-card__article">
        <div className="c-card__container">
          <div className="c-card__wrapper">
            <span className="c-card__date">{date}</span>
            <h2 className="c-card__title">{title}</h2>
            <p className="c-card__subtitle">{subtitle}</p>
          </div>
          <figure className="c-card__figure">
            <LazyLoadImage
              className="c-card__image"
              alt={alt}
              effect="blur"
              src={image}
            />
          </figure>
        </div>
      </article>
    </a>
  );
}