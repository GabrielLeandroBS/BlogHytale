const currentYear = new Date
export default function Footer() {
  return (
    <footer className="footer container" aria-label="Footer">
      <span className="footer__span">Copyright {currentYear.getFullYear()} - Gabriel Leandro</span>
    </footer>
  );
}
