import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const Main = ({ children }) => {
  return (
    <div className="main-page">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};
