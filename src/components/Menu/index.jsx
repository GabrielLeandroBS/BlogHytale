import { MENU as menu } from '../../utils/menu';
import { slide as MobileMenu } from 'react-burger-menu';
import iconMenu from '../../assets/sprites-svg/union.svg';

export default function Menu() {
  return (
    <section className="menu">
      <nav className="menu__navigation" role="navigation">
        <ul className="menu__desktop" role="menu">
          {menu.map(({ name, href }) => (
            <li className="menu__item" key={name}>
              <a className="menu__text" href={href}>
                {name}
              </a>
            </li>
          ))}
        </ul>

        <ul className="menu__mobile" role="menu">
          <MobileMenu right customBurgerIcon={<img src={iconMenu} />}>
            {menu.map(({ name, href }) => (
              <li role="presentation" className="menu-item" key={name}>
                <a role="menuitem" className="menu__text" href={href}>
                  {name}
                </a>
              </li>
            ))}
          </MobileMenu>
        </ul>
      </nav>
    </section>
  );
}
