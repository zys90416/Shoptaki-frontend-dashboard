import React, {useState} from "react";
import { MenuItems } from './MenuItems';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DropdownForUserProfile.css';
import { Link } from 'react-router-dom';


function BasicButtonExample() {
    /*Code from DropdownList.js
     * ------------------------------*/
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    /* ------------------------------*/
    return(
        <DropdownButton id="dropdown-basic-button" title="Hi there, Lu" className='userButton' variant='my' >
            <React.Fragment>
                {MenuItems.map((item,index)=>{
                    return(
                        <Dropdown.Item eventKey={index} className={item.cName} onClick={item.clickFuc} href={item.path}>{item.title}</Dropdown.Item>
                    );
                })}
            </React.Fragment>
        </DropdownButton>
    );


}

export default BasicButtonExample;

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// function NavbarDarkExample() {
//   return (
//     <Navbar variant="black" bg="white" expand="lg">
//       <Container fluid>
//        <Navbar.Toggle aria-controls="navbar-dark-example" />
//         <Navbar.Collapse id="navbar-dark-example">
//           <Nav className='userButton'>

//             <NavDropdown
//                 id="nav-dropdown-dark-example"
//                 title="Hi there"
//                 menuVariant="white"
                
//             >    
//               <NavDropdown.Item href="#action/3.1">
//                   Dashboard
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Data Market
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">
//                   placeholder
//              </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.4">
//                 Logout
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavbarDarkExample;