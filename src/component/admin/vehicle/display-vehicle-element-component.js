import React, {Fragment} from "react"
import {getModelByVehicleId} from "../../../service/model-services";
import {getBrandByModelId} from "../../../service/brand-services";

export class DisplayVehicleElementComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            model: {},
            brand: {},
            editFeatures:false
        }
    }

    componentDidMount() {
        getModelByVehicleId(this.props.vehicle.vehicleId)
            .then(model => this.setState({
                model: model
            })).then(res => getBrandByModelId(this.state.model.modelId)
            .then(brand => this.setState({
                brand: brand
            })))


    }

    render() {
        return (
            <div>

                <form>
                    <div className="form-group">
                        <h3 htmlFor="exampleInputEmail1">Brand : {this.state.brand.brandName}</h3>
                        {/*<label>{this.state.brand.brandName}</label>*/}

                    </div>
                    <div className="form-group">
                        <h3 htmlFor="exampleInputEmail1">Model : {this.state.model.modelName}</h3>
                        {/*<label>{this.state.model.modelName}</label>*/}
                    </div>
                    <div className="form-group">
                        <h3 htmlFor="exampleInputEmail1">Color : {this.props.vehicle.color}</h3>
                        {/*<label>{this.props.vehicle.color}</label>*/}
                    </div>
                    <div className="form-group">
                        <h3>Features : </h3>
                        {
                            this.props.vehicle.featureList.length !== 0 &&
                            this.props.vehicle.featureList.map((feature) => <li key={feature.featureId}
                                                                                className="list-group-item"><b>{feature.featureName}</b></li>
                            )
                        }
                    </div>
                    <button onClick={() => this.props.deleteVehicle(this.props.vehicle.vehicleId)}
                        className="btn btn-danger" type="button">Delete Vehicle</button>
                </form>
            </div>
        )
    }
}