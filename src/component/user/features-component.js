import React from "react"
import {getAllFeatures} from "../../service/feature-services";

export class FeaturesComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            features: [],
            featuresToAdd: [],
            totalCost: 0
        }
    }

    componentDidMount() {
        this.setState({
            totalCost: this.props.model.modelPrice
        })
        getAllFeatures()
            .then(features => this.setState({
                features: features
            }))
    }

    handleChange = (e) => {
        let value = Array.from(e.target.selectedOptions, option => option.value);
        let newFeature = this.state.features.filter((feature) => value.some((v) => v === feature.featureName))
        this.setState({featuresToAdd: newFeature});
    }


    render() {
        let sum = this.state.totalCost
        let featurePrice
        for (let feature of this.state.featuresToAdd) {
            console.log(feature.featureCost)
            sum += feature.featureCost
            console.log(sum)
        }

        return (
            <div className="form-group">
                <select
                    className="form-control"
                    multiple={true} onChange={this.handleChange}>
                    {this.state.features.map((f) =>
                        <option value={f.featureName}>{f.featureName}</option>
                    )}
                </select>
                <button className="btn btn-primary" onClick={() => this.setState({
                    totalCost: sum
                })
                }>Add Features
                </button>
                <br/>
                <br/>
                <b>Cost : </b> {this.state.totalCost}
                <br/>
                <button className="btn btn-success"
                        onClick={() => this.props.createVehicle({
                            color: this.props.color,
                            vehiclePrice: this.state.totalCost
                        }, this.props.model.modelId, this.state.featuresToAdd)}>Save
                    Vehicle
                </button>
            </div>
        )
    }
}