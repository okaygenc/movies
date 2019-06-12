import React from 'react';
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <div className='container-fluid header-container'>
            <div className="container">
                <div className="row d-flex flex-row align-items-center justify-content-between header-h">
                    <Link to={'/'}>DEMO Streaming</Link>
                    <div className="d-flex flex-row align-items-center justify-content-between">
                        <p className="text-white m-0">Log in</p>
                        <button className='trial-button'>Start your free trial</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;