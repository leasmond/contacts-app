import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const Main = ({ children, contactsCount }) => {
  return (
    <div className="main-page">
      <Header />
      <div>{children}</div>
      <Footer contactsCount={contactsCount} />
    </div>
  );
};
