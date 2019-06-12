import React from 'react';
import TitleBand from "../common/TitleBand";

const NotFound: React.FC = () => (
    <>
        <TitleBand  title={'Popular Titles'}/>
        <div className='not-found d-flex justify-content-center m-5'>
            <p>Oops, something went wrong...</p>
        </div>
    </>
);

export default NotFound;