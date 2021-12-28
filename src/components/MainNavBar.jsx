import { Badge } from "@material-ui/core"
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive";
import {sliderItems} from "../data"
import { Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import logo from '../landing-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const img = styled.img`
height: 50px;
`

// const Nav = styled.nav`
//     background: white;
// `

// const NavDropdown = styled.div`
//     background: white;
// `

// const Container  =  styled.div`
//     height: 60px;
//     background: black;
//     color: white;
//     ${mobile({ height: "100px" })}
// `
// const Wrapper = styled.div `
//     padding: 10px 20px;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     ${mobile({ padding: "10px 0px" })}
// `

// const Left = styled.div`
// flex: 1;
// display: flex;
// align-items: center;
// `

// const Language = styled.span`
//     font-size: 14px;
//     ${mobile({ display: "none" })}
// `

// const SearchContainer = styled.div`
//     border: 1px solid lightgray;
//     display: flex;
//     align-items: center;
//     ${'' /* margin-left: 25px; */}
//     padding: 5px;
// `


// const img = styled.img`
// height: 50px;
// `

// const Input =  styled.input`
//     border: none;
//     background: transparent;
//     color: white;
//     width: 75px;
//     ${mobile({ width: "50px" })}
// `


// const Center = styled.div`
// flex: 1;
// text-align: center;
// `

// const Logo = styled.h1`
//     font-weight: bold;
//     ${mobile({ fontSize: "24px" })}
// `
// const Right = styled.div`
// flex: 1;
// display: flex;
// align-items: center;
// justify-content: flex-end;
// ${mobile({ flex: 2, justifyContent: "center" })}
// `

// const MenuItem = styled.div`
//     font-size: 14px;
//     cursor: pointer;
//     margin-left: 25px;
//     ${mobile({ fontSize: "12px", marginLeft: "10px" })}
// `

const MainNavbar = () => {
    return (
        // <Container>
        //    <Wrapper>
        //        <Left>
        //        {/* <Language>EN</Language> */}
        //        <SearchContainer>
        //            <Input placeholder="search"/>
        //            <Search style={{color:"gray", fontSize:16}}/>
        //        </SearchContainer>
        //        </Left>
        //        {sliderItems.map(item=>(
        //         <Center><Logo><Image className="landingImg" src={item.logo}/></Logo></Center>
                
        //     ))}

        //        <Right>
        //            <MenuItem>REGISTER</MenuItem>
        //            <MenuItem>SIGN IN</MenuItem>
        //            <MenuItem>
        //             <Badge badgeContent={1} color="primary">
        //                 <ShoppingCartOutlined/>
        //             </Badge>
        //            </MenuItem>
        //        </Right>
        //    </Wrapper>   
        // </Container>

   
        <Navbar expand="lg" sticky="top" variant="dark">
            <Navbar.Brand  variant="dark" href="#home">
                <img src={logo} alt="logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            {/* <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav> */}
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MainNavbar

