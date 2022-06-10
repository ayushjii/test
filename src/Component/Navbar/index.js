import React from 'react';
import {
Nav,
NavLink,
 Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './navistyle';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		 <NavLink to='/about' activeStyle>
			About Us
		 </NavLink>
         <NavLink to='/signup' activeStyle>
		 	Sign Up
		 </NavLink>
         <NavLink to='/blogs' activeStyle>
			Blogs
	 	 </NavLink>
	     <NavLink to='/contact' activeStyle>
		  Contact Us
		 </NavLink>
 
		{/*Second Nav
		<NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
	 <NavBtn>
    	<NavBtnLink to='/signin'>
         Sign In
        </NavBtnLink>
	 </NavBtn>
	</Nav>
   </>
);
};

export default Navbar;
