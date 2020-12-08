import React from "react"
import {getAllVehicles} from "../service/vehicle-services";
import {DisplayVehicleElementComponent} from "./display-vehicle-element-component";

export class DisplayVehicleComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vehicles: []
        }
    }

    componentDidMount() {
        getAllVehicles()
            .then((vehicles) => {
                // console.log(vehicles)
                this.setState({
                    vehicles: vehicles,

            })})
    }

    render() {

        return (
            <div>
                <ul className="list-group">
                    {this.state.vehicles.map((vehicle) =>
                        <li className="list-group-item"><DisplayVehicleElementComponent
                            vehicle={vehicle}
                        /></li>

                        )
                    }
                </ul>
            </div>
        )

    }
}