// the main game screen

// importing link and useLocation for navigation
import { Link } from "react-router-dom"
import { useState } from "react";

// adding the useScore and addScore mutatoin
import { useMutation } from "@apollo/client";
import { ADD_SCORE } from "../utils/queries";

// importing the image
import gingerbreadMan from '../assets/sc1.png'

export default function Game() {

    // initializing the score state
     const [score, setScore] = useState(0);

    // using score mutation
    const [addScore, { data }] = useMutation(ADD_SCORE);

    const imgClick = () => {
        // note to self, will need to use the useState hook for database
        setScore(score + 1);
        console.log('Score: ', score)
    }

    const handleAddScore = (newScore) => {
        addScore({ variables: { score: newScore } });
    }

    return (
        // main container that will house the game
        <div className="container">
            <div className="row">

                {/* sub containers that will house the clicker on the left and the status/options on the right */}
                <div id="clicker-side" className="col-9">
                    <img src={gingerbreadMan} alt="gingerbread man" className="gb-m"
                    onClick={imgClick}
                    />
                </div>
                <div id="status-side" className="col-3">
                    <Link to="/">
                        <button type="button" className="btn btn-danger">Exit</button>
                    </Link>
                    <button type="button" className="btn btn-success" onClick={() => handleAddScore(score)}>Save Score</button>
                    <div id="score" className="border border-dark"> Total score: {score}</div>
                    {/* need to add line break here */}

                    <h2>Cookies:</h2>
                    {/* these will be greyed out until the point total is reached */}
                    <h3>Gingerbread Man</h3>
                    <h3>Sugar Cookie</h3>
                    {/* need the font to change to Gingerbread house when the total is reached */}
                    <h3> ??? </h3>
                </div>
            </div>
            </div>
    )
}