import logo from '../../assets/sprites-svg/logo.svg';

export default function Logo() {
  return (
    <figure className='logo' aria-labelledby="logo">
      <img className='logo__image' src={logo} alt="Logo" id='logo' />
    </figure>
  );
}
