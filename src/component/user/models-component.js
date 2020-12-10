import React from "react"
import {VehiclesComponent} from "./vehicles-component";
import {FeaturesComponent} from "./features-component";
import {createVehicle} from "../../service/vehicle-services";
import {addFeaturesToVehicle} from "../../service/featuresService";

export class ModelsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            model: "",
            color:""
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
        return (

            <div>
                {this.props.modelList.length !== 0 &&
                <select onChange={(e) => {
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
                {this.state.model !== "" &&
                    <select onChange={(e) => {
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