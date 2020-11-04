import React, { useState, useEffect } from 'react';
import './BallotStatusScreen.css'
import Nav from "../../components/shared/Nav/Nav";
import { getRequests} from '../../services/ballotConnect';
import Lilguy from "../../Assets/lilguy.png"
import TrackingBar from "../../components/trackingbar/TrackingBar"
import ArrowImg from '../../Assets/left-arrow.svg';
import { Link } from "react-router-dom"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

class BallotStatusScreen extends React.Component {
  state = {
    percent: 0
  };
  updateProgress = (field, val) => {
    this.setState({ [field]: val });
  };
  // setInterval(onClick(), 1000);
// setInterval({this.updateProgress("percent", this.state.percent + 0.2)}, 1000);
  
render() {
  
    return (
      <div >
        <div>
          <Nav />
          <div className='subHeader'>
            <Link to='/'>
              <img className='arrow' src={ArrowImg} alt='arrow' height='25' weight='25' />
            </Link>
            <p className="headline">Track Your Vote</p>
          </div>
        </div>
        <div className='logo-background'>
        <div className="progress-bar">
          <img src={Lilguy} className="lilguy" alt="lilguy" />
          <div className="div">
            <TrackingBar width={400} percent={this.state.percent} />
            <button onClick={() =>
              this.updateProgress("percent", this.state.percent + 0.2)
            }>
              More Progress
          </button>
            
          </div>
        </div>
        <div className='status'>
          
          </div>
          <div className='text-status'>
            <p className='vote-date'>
              <span>Your vote is set to be processed and counted by  </span>
              <span style={{ fontWeight: "bold" }}>November 3rd, 2020</span>
            </p>
            <p className='notifications-text' >
              <span>You have no notifications at this time</span>
            </p>
            <div className='ballot-status'>
              <div className='bullet'>
                <br />
                <FiberManualRecordIcon />
              </div>
              <p className='ballot-p'>
                <span>Oct 5th </span>
                <span>1:43pm </span>
              </p>
              <div className='ballot-text'>
                <p>
                
                  <span style={{ fontWeight: "bold" }}> Ballot Status</span>
                  <span> | This is text <br /> updating you about <br /> your ballot status</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BallotStatusScreen;