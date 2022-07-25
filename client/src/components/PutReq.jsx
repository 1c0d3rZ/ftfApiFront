import React, { Component } from 'react'
import ReqRes from './ReqRes'
import axios from 'axios'

export default class PutReq extends Component {

    constructor(props) {
        super(props)

        this.state = {
            url: '',
            id: '',
            wins: '',
            losses: '',
            points: '',
            output: [],
            message: ''
        }
        this.handleIdChange = this.handleIdChange.bind(this)
        this.handleWinsChange = this.handleWinsChange.bind(this)
        this.handleLossesChange = this.handleLossesChange.bind(this)
        this.handlePointsChange = this.handlePointsChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleIdChange(event) {
        this.setState({
            id: event.target.value,
        })
    }

    handleWinsChange(event) {
        this.setState({
            wins: event.target.value,
        })
        this.setState({
            output: [],
            message: ''
        })
    }

    handleLossesChange(event) {
        this.setState({
            losses: event.target.value,
        })
        this.setState({
            output: [],
            message: ''
        })
    }

    handlePointsChange(event) {
        this.setState({
            points: event.target.value
        })
        this.setState({
            output: [],
            message: ''
        })
    }

    handleSubmit() {

        var data = {
            "id": Number(this.state.id),
            "wins": Number(this.state.wins),
            "losses": Number(this.state.losses),
            "points_scored": Number(this.state.points)
        };

        var config = {
            method: 'put',
            url: `http://localhost:3000/api/v1/stats/${this.state.id}`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        const self = this

        axios(config)
            .then(function (response) {
                self.setState({ output: response.data })
            })
            .catch(function (error) {
                this.setState({ message: 'Not Found!' })
            });
        }


    render() {
        return (
            <div className="wrapper">
                <div className="tabcontent" id="put">
                    <div className="f-section">
                        <InputEl
                            id={this.state.id}
                            wins={this.state.wins}
                            losses={this.state.losses}
                            points={this.state.points}
                            handleIdChange={this.handleIdChange}
                            handleWinsChange={this.handleWinsChange}
                            handleLossesChange={this.handleLossesChange}
                            handlePointsChange={this.handlePointsChange}
                        />
                    </div>
                    <button onClick={this.handleSubmit}>Send</button>
                </div>
                <ReqRes
                    output={this.state.output.length === 0 ? this.state.message
                        : this.state.output.map(item =>
                            <div key={item.id}>
                                <p><b>Id:</b> {item.id} </p>
                                <p><b>Wins:</b> {item.wins} </p>
                                <p><b>Losses:</b> {item.losses} </p>
                                <p><b>Points Scored:</b> {item.points_scored} </p>
                                <hr />
                            </div>
                        )}
                />
            </div>
        )
    }
}


class InputEl extends Component {
    render() {
        return (
            <div className="f-section">
                <input type="number" min="1" placeholder="Id"
                    value={this.props.id}
                    onChange={this.props.handleIdChange} />
                <input type="number" min="1" placeholder="Wins"
                    value={this.props.wins}
                    onChange={this.props.handleWinsChange} />
                <input type="number" min="1" placeholder="Losses"
                    value={this.props.losses}
                    onChange={this.props.handleLossesChange} />
                <input type="number" min="1" placeholder="Points scored"
                    value={this.props.points}
                    onChange={this.props.handlePointsChange} />
            </div>
        )
    }
}
