import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";

export default function MainLayout({ children }) {
   return (
      <div>
         <Navigation />
         <Container className="mt-5">{children}</Container>
         <Footer />
      </div>
   );
}
