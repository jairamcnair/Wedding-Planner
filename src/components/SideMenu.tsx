import React from 'react';
// source: https://galaxies.dev/quickwin/react-router-typescript
// source: https://www.dhiwise.com/post/react-router-dom-typescript-simplifying-complex-navigation



// dynamic link
import { Link } from 'react-router-dom';

function SideMenu(){
        <>
            <div className="side-menu">

                <div className="side-menu-section">
                    <h1> Budget + Guest List</h1>
                    <span className="side-menu-span"> <Link to="/Budget.tsx"> Budget </Link></span>
                    <span className="side-menu-span"> <Link to="/Chart.tsx"> Guest List </Link></span>
                </div>

                <div className="side-menu-section">
                    <h1> Facility + Food </h1>
                    <span className="side-menu-span"> <a href="#"> Facility </a></span>
                    <span className="side-menu-span"> <a href="#"> Food </a></span>
                </div>

                <div className="side-menu-section">
                    <h1> Function + Entertainment </h1>
                    <span className="side-menu-span"> <a href="#"> Vendor Checklist </a></span>
                </div>

                <div className="side-menu-section">
                    <h1> Fashion </h1>
                    <span className="side-menu-span"> <a href="#"> Apparel Checklist </a></span>
                </div>

                <div className="side-menu-section">
                    <h1> Festivities, Cards + Gifts </h1>
                    <span className="side-menu-span"> <a href="#"> Gift Checklist </a></span>
                    <span className="side-menu-span"> <a href="#"> Invitations </a></span>
                    <span className="side-menu-span"> <a href="#"> Festivities </a></span>
                </div>

                <div className="side-menu-section">
                    <h1> Honeymoon </h1>
                    <span className="side-menu-span"> <a href="#"> Honeymoon Checklist </a></span>
                </div>


            </div>
        
        </>
}






export default SideMenu;