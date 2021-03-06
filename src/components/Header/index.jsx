import Logo from '../Logo';
import Menu from '../Menu';

export default function Header() {
  return (
    <header className="header container" aria-label="Header">
      <Logo />
      <Menu />
    </header>
  );
}
