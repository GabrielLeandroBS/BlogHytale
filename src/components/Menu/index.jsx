import { menu } from '../../utils/menu';

export default function Menu() {
  return (
    <ul className="menu">
      {menu.map(({ name, href }) => (
        <li className="menu__item" key={name}>
          <a className='menu__text' href={href}>{name}</a>
        </li>
      ))}
    </ul>
  );
}
