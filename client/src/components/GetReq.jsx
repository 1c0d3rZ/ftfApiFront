import React, { Component } from 'react'
import ReqRes from './ReqRes'
import axios from 'axios'

export class GetReq extends Component {
    // Constructor props for GetReq
    constructor(props) {
        super(props)

        this.state = {
            statInput: '',
            url: '',
            stat: [],
            message: ''
        }
        this.handleEnter = this.handleEnter.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    // function to send the request
    handleEnter() {
        this.handleGet(this.state.url)
    }
    // Function that retrieves request values
    handleChange(event) {
        this.setState({
            statInput: event.target.value
        });
        this.setState((state) => ({
            url: `http://localhost:3000/api/v1/stats/${state.statInput}`
        }))
        this.setState({
            stat: [],
            message: ''
        })
    };
    // Function containing the axios request function
    handleGet(url) {

        var self = this

        axios.get(url)
            .then((res) => {
                self.setState({ stat: res.data });
            })
            .catch(err => {
                self.setState({ message: "404! Not Found" });
            })
    }

    render() {

        return (
            <div className='wrapper'>
                <div className="tabcontent" id="get">
                    {/* Getting and auto update the input value */}
                    <Input input={this.state.statInput} handleChange={this.handleChange} />
                    {/* This button will execute the send the request */}
                    <button id="sendGet" onClick={this.handleEnter} >Send</button>
                </div>
                {/* Rendering section */}
                <ReqRes
                    output={
                        // Rendering the output
                        this.state.stat.length === 0 ? this.state.message 
                         :
                        this.state.stat !== [] ? this.state.stat.map(item =>
                            <div key={item.id}>
                                <p><b>Id:</b> {item.id} </p>
                                <p><b>Wins:</b> {item.wins} </p>
                                <p><b>Losses:</b> {item.losses} </p>
                                <p><b>Points Scored:</b> {item.points_scored} </p>
                                <hr />
                            </div>
                        )
                        :  ''
                    }
                />
            </div>
        )
    }
}

export default GetReq


// Class Of the input elements
class Input extends Component {
    render() {
        return (
            // Input Elements
            <input type="number" min="0" placeholder="Id"
                value={this.props.input}
                onChange={this.props.handleChange}
            />
        )
    }
}
