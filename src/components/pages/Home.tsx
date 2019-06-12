import React from 'react';
import TitleBand from "../common/TitleBand";
import history from '../../history';

const Home: React.FC = () => (
    <>
        <TitleBand title={'Popular Titles'} />
        <div className="container">
            <div className="row mt-5 mb-5">
                <div className="home" onClick={() => {history.push('/serieslist')}}>
                    <div className="background d-flex align-items-center justify-content-center">
                        <p className="movies-title">SERIES</p>
                    </div>
                    <p className="movies-description">Popular Series</p>
                </div>
                <div className="home" onClick={() => {history.push('/movieslist')}}>
                    <div className="background d-flex align-items-center justify-content-center">
                        <p className="movies-title">MOVIES</p>
                    </div>
                    <p className="movies-description">Popular Movies</p>
                </div>
            </div>
        </div>
    </>
);

export default Home;