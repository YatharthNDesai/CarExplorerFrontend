import React from "react"
import {BrandsComponent} from "./brands-component";
import {FeaturesComponent} from "./features-component";
import {createVehicle} from "../service/vehicle-services";

export class VehiclesComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numOfCompares: this.props.numOfCompares
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.numOfCompares.length !== this.props.numOfCompares.length) {
            this.setState({
                numOfCompares: this.props.numOfCompares
            })
        }
    }



    render() {
        console.log(this.state.numOfCompares)
        return (
            <div className="row">
                {this.state.numOfCompares.map(() => {
                        return (
                            <div className="col-4">
                                <BrandsComponent/>
                            </div>
                        )
                    }
                )
                }



            </div>
        )
    }
}