import React from "react"

export class CreateBrandComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            brandName: ""
        }
    }

    render() {

        return (
            <div className="row">
                <form className="col-12">
                    <h1>{this.state.brandName}</h1>
                    <label className="col-3" >Name :
                        <input style={{margin: "0 0 0 10px"}} onChange={event => this.setState({
                            brandName: event.target.value
                        })} className="col-7" type="text"/>
                    </label>
                    <button onClick={() => this.props.createBrand({brandName: this.state.brandName})}
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