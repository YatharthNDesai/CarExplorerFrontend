import React from "react"

export class CreateFeatureComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            featureName: "",
            featureCost: 0
        }
    }

    render() {

        return (
            <div className="row">
                <form className="col-12">
                    <h1>{this.state.featureName}</h1>
                    <label className="col-3">Name :
                        <input onChange={event => this.setState({
                            featureName: event.target.value
                        })} className="col-7"  style={{margin: "0 0 0 10px"}} type="text"/>
                    </label>
                    <label className="col-3">Price :
                        <input onChange={event => this.setState({
                            featureCost: event.target.value
                        })} className="col-7"  style={{margin: "0 0 0 10px"}} type="text"/>
                    </label>
                    <button onClick={() => this.props.createFeature({
                        featureName: this.state.featureName,
                        featureCost: this.state.featureCost
                    })}
                            className="btn btn-success col-2"
                            type="button"
                    >Save
                    </button>

                </form>
                <br/>
            </div>
        )
    }
}