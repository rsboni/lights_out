import React, { Component } from 'react'
import "./LightGrid.css"
import LightBox from "./LightBox"

export default class LightGrid extends Component {
    static defaultProps = {
        nRow: 5,
        nCol: 5,
        percentLight: 0.25
    }
    constructor(props){
        super(props);
        this.state = {board: this.randomOn()};
        this.createElements = this.createElements.bind(this)
        this.randomOn = this.randomOn.bind(this)
        this.toogleLight = this.toogleLight.bind(this)
        // this.toogleLight = this.toogleLight.bind(this)
    }

    randomOn(){
        let board =[];
        for(let r = 0; r < this.props.nRow; r++ ){
            let row = []
            for(let c = 0; c < this.props.nCol; c++){
                row.push(Math.random() < this.props.percentLight)
            }
            board.push(row);
        }
        return board;
    }

    toogleLight(cel){
  
        let [x, y] = cel.split("-").map(Number);
        console.log("fliping" + x + " " + y)
        console.log(x + "+" + y)
        let newboard = this.state.board;
        newboard[x][y] = !newboard[x][y];
        if(x > 0){
            newboard[x-1][y] = !newboard[x-1][y];

        }
        if(x < this.props.nCol-1){
        newboard[x+1][y] = !newboard[x+1][y];

        }
        if(y > 0){
        newboard[x][y-1] = !newboard[x][y-1];
            
        }
        if(y < this.props.nRow-1){
        newboard[x][y+1] = !newboard[x][y+1];

        }
        this.setState({board: newboard})
    }
    

    createElements(n){
        let elements = [];
        
        for(let r = 0; r < this.props.nRow; r++){
            for(let c = 0; c < this.props.nCol; c++){
                let i = `${r}-${c}`
                elements.push(<LightBox key={i}  isOn={this.state.board[r][c]} toogleLighton={() => this.toogleLight(i)} />);
                
            }
        }
        return elements;
    }
    render() {
        return ( 
            <div className="LightGrid">
                {this.createElements()}
            </div>
    )
        }
    }