import { Header } from "../components/Header";

export const Main = ({ children, contactsCount }) => {
  return (
    <div className="main-page">
      <Header />
      {children}
    </div>
  );
};
