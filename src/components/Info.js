import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GameManager from '../GameManager';

//Render game info
class Info extends Component {
    constructor(props){
        super(props);
        this.state = {
            menuVisible: false
        }

        this.showMenu = this.showMenu.bind(this);
    }
    componentDidMount(){

    }
    showMenu(a) {
        if (a === 'show') {
            this.setState({ menuVisible: true });
        }

        if (a === 'hide') {
            this.setState({ menuVisible: false });
        }

        console.log('showMenu', a)
    }

    

    render (){
        let infoStyle = {
            height: 170,
            width: 412,
            padding: 5,
            margin: 'auto',
            display: 'block',
            fontSize: '2em',
            userSelect: 'none',
            fontFamily: 'Kanit'
        }
        let gameTitleStyle = {
            fontFamily: 'Arial',
            display: 'block',
            float: 'left',
            fontWeight: 'bold',
            borderRadius: 4,
            width: 135,
            height: 135,
            padding: '45px 10px',
            color: 'white',
            backgroundColor: '#edcc61',
            //background: 'rgb(237,224,200)',
            //background: 'radial-gradient(circle, rgba(237,224,200,1) 0%, rgba(236,204,100,1) 61%, rgba(246,94,59,1) 68%)'
        }
        let titleStyle = {
            textAlign: 'center',
            fontSize: '1em',
        }
        let infoContainerStyle = {
            display: 'block',
            height: 170,
            width: 405
        }
        let infoRightStyle = {
            display: 'inline-block',
            width: 270,
            height: 170
            
        }

        const { menuVisible } = this.state;

        return (
        <div className='info' style={infoStyle}>
            <Time minutes={this.props.minutes} seconds={this.props.seconds} milisec={this.props.milisec}/>
            <div className="info-container" style={infoContainerStyle}>
                <div className='game-title' style={gameTitleStyle} /*onclick={menuVisible === false ? (()=>{this.showMenu('show')}) : (()=>{this.showMenu('hide')})}*/>
                    <div className='title' style={titleStyle}>{"2048+"}</div>
                </div>
                <div className='info-right' style={infoRightStyle}>
                    <Score score={this.props.score} bestScore={this.props.bestScore}/>
                    <Buttons pressed={false} newGame={this.props.newGame} undo={this.props.undo}/>
                </div>  
            </div>
        </div>
        )
    } 
}

class Time extends Component {
    render (){
        let timeStyle = {
            display: 'block',
            fontFamily: 'arial',
            height: 35,
            width: 403,
            margin: '-17px 0 0 0',
            fontSize: '.7em',
            textShadow: '.3px .3px .3px silver',
            color: '#776e65'
        }
        let digitStyle = {
            textAlign: 'center',
            width: '100%',
            margin: 'auto'
        }

        return (
            <div className='time' style={timeStyle}>
                <div className='time-digits' style={digitStyle}>
                    {this.props.hours !== 0 ? this.props.hours : ' '}
                    {this.props.minutes < 10 ? "0" + this.props.minutes : this.props.minutes}
                    {this.props.seconds < 10 ? ":0" + this.props.seconds : ":" + this.props.seconds}
                    {/*this.props.milisec < 100 ? ".0" + (this.props.milisec < 10 ? "0" + this.props.milisec : this.props.milisec) : "." + this.props.milisec*/}
                </div>
            </div>
        )
    } 
}

class Score extends Component {
    render (){
        let scoreBoxStyle = {
            display: 'inline-block',
            textAlign: 'center',
            //textShadow: '.1px .1px .1px #776e65',
            float: 'right',
            minWidth: 210,
            height: 77,
            padding: '5px 0',
            margin: 'auto',
            color: 'white',
            fontFamily: 'arial'
        }
        let scoreStyle = {
            fontSize: '.79em',
            height: 25
        }
        let titleStyle = {
            fontSize: '.58em',
            height: 22
        }
        let scoreContainerStyle = {
            display: 'inline-block',
            borderRadius: 4,
            padding: '4px 15px',
            height: 60,
            minWidth: 90,
            backgroundColor: '#bbada0',
            color: '#f5f6f5',
            margin: 'auto'
        }
        let bestScoreContainerStyle = {
            display: 'inline-block',
            borderRadius: 4,
            padding: '4px 15px',
            height: 60,
            minWidth: 90,
            backgroundColor: '#bbada0',
            color: '#f5f6f5',
            float: 'right'            
        }
        
        return (
            <div className='score' style={scoreBoxStyle}>
                <div className="score-container" style={scoreContainerStyle}>
                    <div className='score' style={scoreStyle}>
                        {this.props.score}      
                    </div>
                    <div className='score-title' style={titleStyle}>
                        {"Score"}
                    </div>
                </div>

                <div className="best-container" style={bestScoreContainerStyle}>
                    <div className='best-score' style={scoreStyle}>
                        {this.props.bestScore}      
                    </div>
                    <div className='best-title' style={titleStyle}>
                        {"Best"}
                    </div>
                </div>  
            </div>
        )
    } 
}

class Buttons extends Component {
    constructor(props) {
        super(props);
    }

    render (){
        let containerStyle = {
            height: 65,
            width: 195,
            margin: 'auto',
            display: 'block',
            float: 'right',
        }
        let btnStyle = {
            width: 90,
            height: 60,
            backgroundColor: '#775e65',
            color: 'white',
            fontSize: '.7em',
            margin: 'auto',
            display: 'inline-block',
            borderRadius: 4,
            padding: '4px 15px',
            textDecoration: 'none',
            border: 'none'
        }
        let undoStyle = {
            float: 'right'
        }

        return (
            <div className='btnContainer' style={containerStyle}>
                <button className='info-btn info-btn-left newgame-btn' style={btnStyle} onClick={this.props.newGame}>{"New"} </button>
                <button className='info-btn info-btn-right undo-btn' style={{...btnStyle, ...undoStyle}} onClick={this.props.undo}>{"Undo"}</button>
            </div>
        )
    }
}

Info.propTypes = {
    score: PropTypes.number.isRequired
}

export default Info; 