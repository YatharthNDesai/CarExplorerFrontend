import React from "react"

export class CreateModelComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            modelName: "",
            modelPrice: 0
        }
    }

    render() {

        return (
            <div className="row">
                <form className="col-12">
                    <h1>{this.state.modelName}</h1>
                    <label className="col-3">Name :
                        <input onChange={event => this.setState({
                            modelName: event.target.value
                        })} className="col-7"  style={{margin: "0 0 0 10px"}} type="text"/>
                    </label>
                    <label className="col-3">Price :
                        <input onChange={event => this.setState({
                            modelPrice: event.target.value
                        })} className="col-7"  style={{margin: "0 0 0 10px"}} type="text"/>
                    </label>
                    <button onClick={() => this.props.createModel({
                        modelName: this.state.modelName,
                        modelPrice: this.state.modelPrice
                    }, this.props.brandId)}
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