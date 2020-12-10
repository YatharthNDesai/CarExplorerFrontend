import React from "react"
import {DisplayVehicleComponent} from "../vehicle/display-vehicle-component";


export class DisplayModelComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            displayVehicles: false
        }
    }

    render() {
        return (
            <div>
                <br/>
                <li className="list-group-item">{this.props.model.modelName}
                    <button style={{float: "right", position: "relative"}}
                            onClick={() => this.props.removeModel(this.props.model.modelId)}
                            className="btn btn-danger" type="button">Remove model
                    </button>
                    <br/>
                    {
                        !this.state.displayVehicles &&
                    <button className="btn btn-primary" onClick={() => this.setState({
                        displayVehicles:true
                    })}>
                        Display Vehicles
                    </button>
                    }
                    <br/>
                    {
                        this.state.displayVehicles &&
                            <>
                                <DisplayVehicleComponent
                                admin={true}
                                modelId={this.props.model.modelId}
                                />
                        <button className="btn btn-primary" onClick={() => this.setState({
                            displayVehicles:false
                        })}>
                            Hide Vehicles
                        </button>
                        </>
                    }
                </li>
            </div>
        )
    }
}


