import React from "react"
import {
    createFeature,
    deleteFeature,
    getAllFeatures,

} from "../../../service/feature-services";
import {DisplayFeatureComponent} from "./display-feature-component";
import {CreateFeatureComponent} from "./create-feature-component";
import {getBrandByFeatureId} from "../../../service/brand-services";
import {getAllFeaturesByVehicle} from "../../../service/feature-services";

export class AdminFeatureComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            features: [],
            edit: false

        }
        // this.removeFeature = this.removeFeature.bind(this)
        this.createFeature = this.createFeature.bind(this)
        this.removeFeature = this.removeFeature.bind(this)
    }

    componentDidMount() {
        // getAllFeaturesByVehicle(this.props.vehicleId)
        //     .then(features =>
        //         this.setState({
        //             features: features
        //         })
        //     )
        getAllFeatures()
            .then(features =>
                    // console.log(features)
                this.setState({
                features: features
            })
            )

    }

    removeFeature(featureId) {
        deleteFeature(featureId)
            .then(res => this.setState({
                features: this.state.features.filter(feature => feature.featureId !== featureId)
            }))
    }
    //
    // //
    createFeature(feature) {
        createFeature(feature)
            .then(res => this.setState({
                features: [...this.state.features, res]
            }))
    }

    render() {
        return (
            <ul className="list-group">
                {this.state.features.length !== 0 && this.state.features.map((feature) =>
                    <DisplayFeatureComponent
                    // brandId={this.props.brandId}
                    feature={feature}
                    removeFeature={this.removeFeature}
                />)}
                <br/>

                {!this.state.edit && <button onClick={() => this.setState({
                    edit: true
                })} className="btn btn-success">
                    Create New Feature
                </button>}
                {this.state.edit &&

                <>
                    <CreateFeatureComponent
                        createFeature={this.createFeature}
                    />
                    <button onClick={() => this.setState({
                        edit: false
                    })} className="btn btn-success">
                        Minimize
                    </button>
                    <br/>
                </>
                }
            </ul>
        )
    }
}