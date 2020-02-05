//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const awayScore = 32;
  const homeScore = 32;
  const [countAway, setAwayCount] = useState(awayScore);
  const [countHome, setHomeCount] = useState(homeScore);

  // Adjust Scores with Buttons
  const onClickAwayFG = () => setAwayCount(countAway + 3);
  const onClickHomeFG = () => setHomeCount(countHome + 3);
  const onClickAwayTD = () => setAwayCount(countAway + 7);
  const onClickHomeTD = () => setHomeCount(countHome + 7);

  // Reset scores
  const resetAwayScore = () => setAwayCount(awayScore);
  const resetHomeScore = () => setHomeCount(homeScore);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{countHome}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{countAway}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
            <button className="homeButtons__touchdown" onClick={onClickHomeTD}>Home Touchdown</button>
            <button className="homeButtons__fieldGoal" onClick={onClickHomeFG}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={onClickAwayTD}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={onClickAwayFG}>Away Field Goal</button>
        </div>
      </section>
      <section className="buttons">
        <div className="homeButtons">
            <button className="reset_home_score" onClick={resetHomeScore}>Reset Home</button>
        </div>
        <div className="awayButtons">
          <button className="reset_away_score" onClick={resetAwayScore}>Reset Away</button>
        </div>
      </section>
    </div>
  );
}

export default App;
