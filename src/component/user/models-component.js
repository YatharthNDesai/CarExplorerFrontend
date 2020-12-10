import React from "react"
import {VehiclesComponent} from "./vehicles-component";
import {FeaturesComponent} from "./features-component";
import {createVehicle} from "../../service/vehicle-services";
import {addFeaturesToVehicle} from "../../service/feature-services";

export class ModelsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            model: "",
            color:"",
            cost:0
        }
    }


    createVehicle(vehicle, mid,features) {
        createVehicle(vehicle,mid)
            .then(vehicle => {

                    addFeaturesToVehicle(vehicle.vehicleId,features).then(res => alert("Vehicle Created"))
            })


    }

    render() {
        console.log(this.props.modelList)
        console.log(this.state.model)
        let model = this.props.modelList.filter((model) =>
            model.modelName === this.state.model
        )[0]
        // let cost = model.modelPrice
        return (

            <div className="form-group">
                {this.props.modelList.length !== 0 &&
                <select
                    className="form-control"
                    onChange={(e) => {
                    this.setState({
                        model: e.target.value
                    })
                }
                }
                >
                    <option value="No selection">No Selection</option>
                    {this.props.modelList.map((model) =>
                        <option key={model.modelId} value={model.modelName}>{model.modelName}</option>)}
                </select>
                }
                <br/>
                {this.state.model !== "" &&
                    <select
                        className="form-control"
                        onChange={(e) => {
                        this.setState({
                            color: e.target.value
                        })
                    }
                    }>
                        <option value="No selection">No Selection</option>
                        <option value="Red">Red</option>
                        <option value="Blue">Blue</option>
                        <option value="Green">Green</option>
                        <option value="Yellow">Yellow</option>

                    </select>
                }
                {console.log("Current model", model)}
            <br/>
                {this.state.color !== "" &&
                    <FeaturesComponent
                    createVehicle={this.createVehicle}
                    model={model}
                    color={this.state.color}
                />}
            </div>
        );
    }
}