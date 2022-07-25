import React, { Component } from 'react'
import axios from 'axios'

export default class AllStats extends Component {

    constructor(props) {
        super(props)

        this.state = {
            output: [],
            url: '',
            message: '',
            refresh: 'First Time Refresh'
        }

        this.handleRefresh = this.handleRefresh.bind(this)
        this.handleEnter = this.handleEnter.bind(this)
    }

    handleEnter() {
        this.handleRefresh()
    }

    handleRefresh() {

        this.setState({
            refresh: 'Refresh'
        })

        var self = this

        axios.get("http://localhost:3000/api/v1/stats")
            .then(function (response) {
                self.setState({
                    output: response.data
                })
            })
            .catch(function (error) {
                console.log(error);
                self.setState({
                    message: 'Connection Error! Please Refresh'
                })
            });
    }

    render() {
        return (
            <div className='output'>
                <button onClick={this.handleEnter} style={{
                    border: 'none',
                    padding: "8px 19px",
                    cursor: 'pointer',
                    borderRadius: '6px',
                    fontWeight: '900'
                }}>
                    {this.state.refresh}
                </button>
                <div className="eltDiv">
                    {// Rendering the output
                        this.state.output.length === 0 ? this.state.message
                            : this.state.output.map(item =>
                                <div key={item.id}>
                                    <p><b>Id:</b> {item.id} </p>
                                    <p><b>Wins:</b> {item.wins} </p>
                                    <p><b>Losses:</b> {item.losses} </p>
                                    <p><b>Points Scored:</b> {item.points_scored} </p>
                                    <hr />
                                </div>
                            )}
                </div>
            </div>
        )
    }
}