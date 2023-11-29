import Footer from "../components/Footer";
import Header from "../components/Header";

function HomeLayout({ children }) {
  return (
    <div className="min-h-[90vh]">
      <Header />
      <div className="pt-14">{children}</div>
      <Footer />
    </div>
  );
}

export default HomeLayout;
