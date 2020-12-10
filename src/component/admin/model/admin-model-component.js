import React from "react"
import {
    createModel,
    deleteModel,
    getAllModels,
    getAllModelsByBrand,
    getModelByVehicleId
} from "../../../service/model-services";
import {DisplayModelComponent} from "./display-model-component";
import {CreateModelComponent} from "./create-model-component";
import {getBrandByModelId} from "../../../service/brand-services";

export class AdminModelComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            models: [],
            edit: false

        }
        this.removeModel = this.removeModel.bind(this)
        this.createModel = this.createModel.bind(this)
    }

    componentDidMount() {
        getAllModelsByBrand(this.props.brandId)
            .then(models =>
                this.setState({
                models: models
            })
            )
    }

    removeModel(modelId) {
            deleteModel(modelId)
                .then(res => this.setState({
                    models: this.state.models.filter(model => model.modelId !== modelId)
                }))
    }

    //
    createModel(model, brandId) {
            createModel(model, brandId)
                .then(res => this.setState({
                    models:[...this.state.models,res]
                }))
    }

    render() {
        return (
            <ul className="list-group">
                {this.state.models.length!== 0 && this.state.models.map((model) => <DisplayModelComponent
                    brandId={this.props.brandId}
                    model={model}
                    removeModel={this.removeModel}
                />)}
                <br/>
                {!this.state.edit && <button onClick={() => this.setState({
                    edit: true
                })} className="btn btn-success">
                    Create New Model
                </button>}
                <br/>
                {this.state.edit &&

                <>
                    <CreateModelComponent
                        brandId={this.props.brandId}
                        createModel={this.createModel}
                    />
                    <br/>
                    <br/>
                    <button onClick={() => this.setState({
                        edit: false
                    })} className="btn btn-success">
                        Minimize
                    </button>
                </>
                }
            </ul>
        )
    }
}