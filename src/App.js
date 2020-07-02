import React, { Component } from 'react'
import './App.css';
import Flexi from './Flexi.js';



export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      flexiConfig:[],
      person_name:"",
      statename:"",
      statevalue:["Maharashtra","Kerala","Tamil Nadu","Karnataka"]
             }  
             this.onFlexiSubmit = this.onFlexiSubmit.bind(this); 
    }

    onChangePersonName=(e)=>{
      this.setState({
        person_name:e.target.value
      })
    }

    onChangeStateName=(e)=>{
      this.setState({
        statename:e.target.value
      })
    }

    onFlexiSubmit(e){
      e.preventDefault();

      if(this.state.person_name !=="" && this.state.statename !==""){
      const persondata={person_name:this.state.person_name,"personlabel": "Person's Name",
      "personInputtype": "text",statename:this.state.statename,"statelabel": "Person's state",
      "statetype": "DropDown"}

      let flexiConfig=[...this.state.flexiConfig, persondata]
     // console.log(flexiConfig)
      this.setState({
      flexiConfig:flexiConfig,
      person_name:"",
      statename:""
      })
    }
    else{
      alert("enter value")
    }
    }

  
  render() { 
    return (
      <div className="container">
        <form style={{marginTop:"100px"}} >
          <label>Enter the person's Name:</label>
        <input type="text" name="person_name" value={this.state.person_name} onChange={this.onChangePersonName}/>
        <label>Enter the State Name:</label>
             <select value={this.state.statename} onChange={this.onChangeStateName}>
                 <option>Select State</option>
                 {
                   this.state.statevalue.map((val,index)=>{
                     return(
                      <option value={val}>{val}</option>
                     )
                   })
                 }
                
             </select>
             </form>
             <Flexi onSubmit={this.onFlexiSubmit} config={this.state.flexiConfig}/>  
      </div>
    )
  }
}
