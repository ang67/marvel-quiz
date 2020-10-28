import React, { Fragment, useState, useEffect } from 'react';

const QuizOver = React.forwardRef((props, ref) => {

    const {
        levelNames,
        score,
        maxQuestions,
        quizLevel,
        percent
    } = props;

    const [asked, setAsked] = useState([])
    console.log(asked);
    useEffect(() => {
        setAsked(ref.current)
    }, [ref])

    const averageGrade = maxQuestions / 2;
    const decision = score >= averageGrade ? (
        <Fragment>
            <div className="stepsBtnContainer">
            {
                quizLevel < levelNames.length ? (
                    <Fragment>
                        <p className="successMsg"> Passer au niveau suivant !</p>
                        <button className="btnResult success"> Niveau suivant</button>
                    </Fragment>
                )
                :
                (
                    <Fragment>
                        <p className="successMsg"> Bravo vous êtes un expert !</p>
                        <button className="btnResult gameOver"> Niveau suivant</button>
                    </Fragment>
                )
            }
            </div>

            <div className="percentage">
        <div className="progressPercent">Réussite: {percent}%</div>
        <div className="progressPercent">Note: {score}/{maxQuestions}</div>
            </div>
        </Fragment>
    )
    :
    (
        <Fragment>
            <div className="stepsBtnContainer">
                <p className="failureMsg"> Vous avez échoué !</p>
            </div>
        
            <div className="percentage">
                <div className="progressPercent">Réussite: {percent}%</div>
                <div className="progressPercent">Note: {score}/{maxQuestions}</div>
            </div>
        </Fragment>
    )
    const questionAnswer = score >= averageGrade ? (
        asked.map( question =>{
        
            return (
                <tr key={question.id}>
                    <td>{question.question}</td>
                    <td>{question.answer}</td>
                    <td>
                        <button className="btnInfo">Infos</button>
                    </td>
                </tr>
            )
            })
        )
        :
        (
            <tr>
                
                <td colSpan="3">
                    <p style={{textAlign: "center", color: 'red'}}>Pas de réponses !</p>
                </td>
            </tr>
        )
    

    return (
        <Fragment>
            {decision}

            <hr/>
            <p>Les réponses aux questions posées</p>

            <div className="answerContainer">
                <table className="answers">
                    <thead>
                        <tr>
                            <th>question</th>
                            <th>Réponses</th>
                            <th>Infos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {questionAnswer}
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}
)


export default React.memo(QuizOver);