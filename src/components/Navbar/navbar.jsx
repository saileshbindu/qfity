import React from "react";
import './navbar.css';
import { useTheme } from '@mui/material/styles';
import SearchBar from '../searchBar/Search';

import Button from '../button/Button';
import Logo from "../logo/Logo";



const Navbar = () =>{
    const theme = useTheme();
    return(
       <div>
        <nav className="navbarBg">
            <Logo />
            <SearchBar/>
            <Button />
        </nav>
       </div>
    )
}

export default Navbar