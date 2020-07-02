import React, { Component } from 'react'

export default class Flexi extends Component {
    constructor(props){
        super(props)
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <form onSubmit={this.props.onSubmit}>
                <button type="submit">Submit</button>
                </form>
                {this.props.config.map((val,index)=>{
                    return(
                        <div className="todostyle fontstyle">
                            <h3>{val.person_name}</h3>
                            <p>{val.statename}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}
