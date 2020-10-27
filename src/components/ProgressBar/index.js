import React, { Fragment } from 'react';

const ProgressionBar = ({idQuestion, maxQuestions}) => {
    
    const getWitdth = (totoalQuestions, questionId) =>{
        return (100/totoalQuestions) * questionId
    }

    const actualQuestion = idQuestion + 1
    const progressPercent = getWitdth(maxQuestions, actualQuestion)
    console.log(progressPercent);
    return (
        <Fragment>
            <div className="percentage">
    <div className="progressPercent">{`Questions: ${idQuestion +1}/${maxQuestions}`}</div>
    <div className="progressPercent">{`Progression: ${progressPercent}%`}</div>
            </div>

            <div className="progressBar">
                <div className="progressBarChange" style={{width: `${progressPercent}%`}}></div>
            </div>
        </Fragment>
    );
};

export default React.memo(ProgressionBar);