import React from 'react';

interface Props {
    title: string
}

const TitleBand: React.FC<Props> = ({ title }) => {
    return (
        <div className="container-fluid" style={{backgroundColor: '#414141'}}>
            <div className="container">
                <div className="row d-flex align-items-center height-50">
                     <h4 className="text-white">{title}</h4>
                </div>
            </div>
        </div>
    );
};

export default TitleBand;