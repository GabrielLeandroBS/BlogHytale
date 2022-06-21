import Footer from '../components/Footer';
import Header from '../components/Header';
import Newsletter from '../components/Newsletter';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Newsletter />
      <Footer />
    </>
  );
}
