import React from "react"
import {getAllFeatures} from "../../service/featuresService";

export class FeaturesComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            features: [],
            featuresToAdd: []
        }
    }

    componentDidMount() {
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

        return (
            <div>
                <select multiple={true} onChange={this.handleChange}>
                    {this.state.features.map((f) =>
                        <option value={f.featureName}>{f.featureName}</option>
                    )}
                </select>
                <button className="btn btn-success"
                    onClick={() => this.props.createVehicle({color: this.props.color}, this.props.model.modelId, this.state.featuresToAdd)}>Save
                    Vehicle
                </button>
            </div>
        )
    }
}