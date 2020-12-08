import React, {Fragment} from "react"
import {getModelByVehicleId} from "../service/model-services";
import {getBrandByModelId} from "../service/brandService";

export class DisplayVehicleElementComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            model: {},
            brand: {}
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
                        <h3 htmlFor="exampleInputEmail1">Brand : </h3>
                        <label>{this.state.brand.brandName}</label>

                    </div>
                    <div className="form-group">
                        <h3 htmlFor="exampleInputEmail1">Model : </h3><label>{this.state.model.modelName}</label>
                    </div>
                    <div className="form-group">
                        <h3 htmlFor="exampleInputEmail1">Color : </h3><label>{this.props.vehicle.color}</label>
                    </div>
                    <div className="form-group">
                        <h3>Features : </h3>
                        {
                            this.props.vehicle.featureList.length !== 0 &&
                            this.props.vehicle.featureList.map((feature) => <li
                                className="list-group-item">{feature.featureName}</li>
                            )
                        }
                    </div>
                </form>
            </div>
        )
    }
}