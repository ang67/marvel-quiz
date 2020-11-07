import React, { Fragment, useState, useEffect } from 'react';
import  {GiTrophyCup} from 'react-icons/gi'
import Loader from '../Loader';
import Modal from '../Modal';
import axios from 'axios'

const QuizOver = React.forwardRef((props, ref) => {

    const {
        levelNames,
        score,
        maxQuestions,
        quizLevel,
        percent,
        loadLevelQuestions
    } = props;

    const API_PUBLIC_KEY = process.env.REACT_APP_MARVEL_API_KEY;
    const hash ='bc63d774e5be857fe74707a03236aa84';

    const [asked, setAsked] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [characterInfos, setCharacterInfos] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log(asked);
    useEffect(() => {
        setAsked(ref.current)
    }, [ref])

    const showModal = id => {
        setOpenModal(true);

        axios
        .get(`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=${API_PUBLIC_KEY}&hash=${hash}`)
        .then( response => {
            console.log(response);
            setCharacterInfos(response.data);
            setLoading(false);
        })
        .catch(error => {
            console.log(error);
        })
    }

    const hideModal = () => {
        setOpenModal(false);
        setLoading(true);
    }

    const averageGrade = maxQuestions / 2;

    if (score < averageGrade) {
        //setTimeout(() => {loadLevelQuestions(0)}, 3000)
        setTimeout(() => {loadLevelQuestions(quizLevel)}, 3000)
    }
    const decision = score >= averageGrade ? (
        <Fragment>
            <div className="stepsBtnContainer">
            {
                quizLevel < levelNames.length ? (
                    <Fragment>
                        <p className="successMsg">Bravo, passer au niveau suivant !</p>
                        <button className="btnResult success"
                        onClick={() => loadLevelQuestions(quizLevel)}> Niveau suivant</button>
                    </Fragment>
                )
                :
                (
                    <Fragment>
                        <p className="successMsg">
                            <GiTrophyCup size="50px" /> Bravo, vous êtes un expert !</p>
                        <button className="btnResult gameOver"
                        onClick={() => loadLevelQuestions(0)}
                        > Accueil</button>
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
                        <button 
                            className="btnInfo" 
                            onClick={() => showModal(question.heroId) }
                        >Infos</button>
                    </td>
                </tr>
            )
            })
        )
        :
        (
            <tr>
                
                <td colSpan="3">
                    <Loader 
                    loadingMsg={"Pas de réponse !"}
                    styling={{textAlign: 'center', color: 'red'}} />
                </td>
            </tr>
        )
    
    const resultsInModal = !loading ?
    (
        <Fragment>
            <div className="modalHeader">
                <h2>{characterInfos.data.results[0].name}</h2>
            </div>
            <div className="modalBody">
                <h3>Titre 2</h3>
            </div>

            <div className="modalFooter">
                <button className="modalBtn">Fermer</button>
            </div>
        </Fragment>
    )
    :
    (
        <Fragment>
            <div className="modalHeader">
                <h2>Réponse de Marvel ...</h2>
            </div>
            <div className="modalBody">
                <Loader />
    
            </div>

            <div className="modalFooter">
                <button className="modalBtn">Fermer</button>
            </div>
        </Fragment>
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
            <Modal showModal={openModal} hideModal={hideModal}>
                {resultsInModal}
            </Modal>
        </Fragment>
    )
}
)


export default React.memo(QuizOver);