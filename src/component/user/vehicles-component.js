import React from "react"
import {BrandsComponent} from "./brands-component";
import {FeaturesComponent} from "./features-component";
import {createVehicle} from "../../service/vehicle-services";
import {DisplayVehicleComponent} from "../admin/vehicle/display-vehicle-component";

export class VehiclesComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            compares: [0],
            component: "explore"
        }
        this.incrementCompare = this.incrementCompare.bind(this)
    }


    incrementCompare() {
        if (this.state.compares.length < 3) {
            this.setState({
                compares: [...this.state.compares,0]
            })
        }
    }


    render() {
        console.log(this.state.compares)
        return (
            <div>
                <div className="block">
                    <ul className="nav nav-tabs" style={{display: "inline"}}>
                        <li className="nav-item" style={{cursor: "pointer", float: "left"}}>
                            <a className="nav-link" onClick={() =>
                                this.setState({
                                    component: 'explore'
                                })
                            }>
                                Explore Tab
                            </a>
                        </li>

                        <li className="nav-item" style={{cursor: "pointer", float: "left"}}>
                            <a className="nav-link" onClick={() =>
                                this.setState({
                                    component: 'view'
                                })
                            }>
                                View Tab
                            </a>
                        </li>
                    </ul>
                </div>
                <br/>
                <br/>
                <div>
                    <div className="row">
                        {this.state.component === "explore" && this.state.compares.map(() => {
                                return (
                                    <div className="col-4">
                                        <BrandsComponent/>
                                        <br/>
                                    </div>
                                )
                            }
                        )
                        }
                    </div>

                    <>
                        <button
                            className="btn btn-primary"
                            onClick={() =>
                                this.incrementCompare()
                            }>
                            +
                        </button>
                    </>
                </div>
                <>
                    {this.state.component === "view" &&

                    <DisplayVehicleComponent/>}
                </>
            </div>
        )
    }
}