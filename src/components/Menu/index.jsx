import { menu } from '../../utils/menu';
import { slide as MobileMenu } from 'react-burger-menu';
import iconMenu from '../../assets/sprites-svg/union.svg'

export default function Menu() {
  return (
    <nav className="menu">
      <ul className="menu__unlist">
        <li className="menu__desktop">
          {menu.map(({ name, href }) => (
            <li className="menu__item" key={name}>
              <a className="menu__text" href={href}>
                {name}
              </a>
            </li>
          ))}
        </li>

        <li className="menu__mobile">
          <MobileMenu right customBurgerIcon={<img src={iconMenu} />}>
            {menu.map(({ name, href }) => (
              <li className="menu-item" key={name}>
                <a className="menu__text" href={href}>
                  {name}
                </a>
              </li>
            ))}
          </MobileMenu>
        </li>
      </ul>
    </nav>
  );
}
