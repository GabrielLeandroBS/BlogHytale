import Footer from '../components/Footer';
import Header from '../components/Header';
import Input from '../components/Input'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Input />
      <Footer />
    </>
  );
}
