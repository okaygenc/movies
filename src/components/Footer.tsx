import React from 'react';
import { Link } from "react-router-dom";
import { ReactComponent as Facebook } from '../img/social/facebook-white.svg'
import { ReactComponent as Twitter } from "../img/social/twitter-white.svg";
import { ReactComponent as Instagram } from "../img/social/instagram-white.svg";
import { ReactComponent as AppStore } from "../img/store/app-store.svg";
import { ReactComponent as GooglePlay } from "../img/store/play-store.svg";
import { ReactComponent as Windows } from "../img/store/windows-store.svg";

const Footer: React.FC = () => {
    return (
        <div className="container-fluid footer-container">
            <div className="container">
                <div className="row">
                    <div className="footer-menu">
                        <Link to={''} className="text-white">Home </Link>
                        <Link to={''} className="text-white">Terms and Conditions </Link>
                        <Link to={''} className="text-white">Privacy Policy </Link>
                        <Link to={''} className="text-white">Collection Statement </Link>
                        <Link to={''} className="text-white">Help </Link>
                        <Link to={''} className="text-white">Manage Account </Link>
                    </div>
                </div>
                <div className="row">
                    <p className="copyright">
                        Copyright © 2016 DEMO Streaming. All Rights Reserved.
                    </p>
                </div>
                <div className="row d-flex flex-row justify-content-between mt-3">
                    <div className="d-flex flex-row align-items-center">
                        <Facebook className="facebook-white" />
                        <Twitter className="twitter-white" />
                        <Instagram className="instagram-white" />
                    </div>
                    <div className="d-flex flex-row align-items-center stores">
                        <AppStore className="appstore" />
                        <GooglePlay className="playstore" />
                        <Windows className="microsoft" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;