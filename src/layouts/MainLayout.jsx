import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "./MainLayout.css";

const MainLayout = ({ children }) => {
  return (
    <div className='MainLayout'>
      <Header />
      <section className='ContentLayout'>{children}</section>
      <Footer />
    </div>
  );
};

export default MainLayout;
