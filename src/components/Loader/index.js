import React, { Fragment } from 'react';

const Loader = ({loadingMsg, styling}) => {
    return (
        <Fragment>
            <div>
                <div className="loader"></div>
                <p style={styling}>
                    { loadingMsg }
                </p>
   
            </div>
        </Fragment>
    );
};

export default Loader;