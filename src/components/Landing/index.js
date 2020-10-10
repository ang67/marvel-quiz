import { useRef } from "react";
import React, { useEffect, useState, Fragment  } from 'react';

const Landing = () => {

    const [btn, setBtn] = useState(false);
    const refWolverine = useRef(null);

    useEffect(()=>{
        refWolverine.current.classList.add("startingImg");
        setTimeout(()=> {
            refWolverine.current.classList.remove("startingImg");
            setBtn(true);
        }, 1000)
    }, [])

    const displayBtn = btn && (
        <Fragment>
        <div className="leftBox">
        <button className="btn-welcome">Inscription</button>
        </div>
        <div className="rightBox">
            <button className="btn-welcome">Inscription</button>
        </div>
        </Fragment>
    )
     

    return (

        <main ref={refWolverine} className="welcomePage">
            {displayBtn}
        </main>

    )
}
export default Landing;
