import React from 'react';
import batman from '../../images/batman.png'

const centerH2 = {
    textAlign: 'center',
    marginTop: '50px'
}

const centerImg = {
    display: "block",
    margin: "40px auto"
}
const ErrorPage = () => {
    return (
        <div className="quiz-bg">
            <div className="container">
                <h2 style={centerH2}>Oups, Cette page n'existe pas!</h2>
                <img src={batman} alt="error page" style={centerImg}/>
            </div>
        </div>
    );
};

export default ErrorPage;