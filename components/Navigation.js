import Link from "next/link";
import { Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
   return (
      <Navbar fixed="top" bg="dark" variant="dark">
         <Navbar.Brand>MyBlog</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
               <Link href="/" passHref>
                  <Nav.Link>Home</Nav.Link>
               </Link>
               <Link href="/posts" passHref>
                  <Nav.Link>Posts</Nav.Link>
               </Link>
            </Nav>
         </Navbar.Collapse>
      </Navbar>

      // <nav className="navbar navbar-expand-lg navbar-light bg-light">
      //    <div className="container-fluid">
      //       <Link href="/">
      //          <a className="navbar-brand">My Blog</a>
      //       </Link>
      //       <div>
      //          <ul className="navbar-nav">
      //             <li className="nav-item">
      //                <Link href="/">
      //                   <a className="nav-link active">Home</a>
      //                </Link>
      //             </li>
      //             <li className="nav-item">
      //                <Link href="/posts">
      //                   <a className="nav-link active">Posts</a>
      //                </Link>
      //             </li>
      //          </ul>
      //       </div>
      //    </div>
      // </nav>
   );
};

export default Navigation;
