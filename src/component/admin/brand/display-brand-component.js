import React from "react"
import {getAllModels} from "../../../service/model-services";
import {AdminModelComponent} from "../model/admin-model-component";


export class DisplayBrandComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            displayModels: false,
        }
    }

    // componentDidMount() {
    //     getAllModels()
    //         .then((models) => this.setState({
    //             models: models
    //         }))
    // }

    render() {
        return (
            <div>
                {/*{this.props.brand.brandId}*/}
                <li className="list-group-item">{this.props.brand.brandName}
                    <button style={{float: "right", position: "relative"}}
                            onClick={() => this.props.removeBrand(this.props.brand.brandId)}
                            className="btn btn-danger" type="button">Remove brand
                    </button>
                    <br/>
                    {!this.state.displayModels &&
                    <button onClick={() => this.setState({
                        displayModels: true
                    })}
                    className="btn btn-success block">
                        Display Models
                    </button>
                    }
                    {this.state.displayModels &&
                    <>
                        <AdminModelComponent
                        brandId={this.props.brand.brandId}
                        />
                        <br/>
                        <button onClick={() => this.setState({
                            displayModels: false
                        })}
                        className="btn btn-dark"
                        >
                            Hide Models
                        </button>
                    </>
                    }
                </li>
            </div>
        )
    }
}


