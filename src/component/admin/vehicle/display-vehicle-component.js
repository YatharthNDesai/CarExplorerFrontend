import React from "react"
import {deleteVehicle, getAllVehicles, getVehiclesForModel} from "../../../service/vehicle-services";
import {DisplayVehicleElementComponent} from "./display-vehicle-element-component";

export class DisplayVehicleComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vehicles: []
        }
        this.deleteVehicle = this.deleteVehicle.bind(this)
    }

    componentDidMount() {
        if(this.props.admin === true){
            getVehiclesForModel(this.props.modelId).then((vehicles) =>
                this.setState({
                    vehicles: vehicles,

                })
            )
        }
        else {
            getAllVehicles()
                .then((vehicles) =>
                    this.setState({
                        vehicles: vehicles,

                    })
                )
        }
    }

    deleteVehicle(vid) {
        deleteVehicle(vid)
            .then((res) => this.setState({
                vehicles : this.state.vehicles.filter(vehicle => vehicle.vehicleId !== vid)
            })

            )
    }

    render() {
        console.log(this.state.vehicles)

        return (
            <div>
                <ul className="list-group">
                    {this.state.vehicles.map((vehicle) =>
                        <li key={vehicle.vehicleId} className="list-group-item"><DisplayVehicleElementComponent
                            vehicle={vehicle}
                            deleteVehicle={this.deleteVehicle}
                        /></li>
                    )
                    }
                </ul>
            </div>
        )

    }
}