import React from "react";
import {NavigationBarComponent} from "../component/user/navigation-bar-component";
import {BrandsComponent} from "../component/user/brands-component";
import {VehiclesComponent} from "../component/user/vehicles-component";
import {FeaturesComponent} from "../component/user/features-component";
import {DisplayVehicleComponent} from "../component/admin/vehicle/display-vehicle-component";
import {AdminComponent} from "../component/admin/admin-component";

export class CarExplorerComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            compares: [0],
            component:"user"
        }
    }

    incrementCompare() {
        if (this.state.compares.length < 3) {
            this.setState({
                compares: [...this.state.compares,0]
            })
        }
    }


    render() {
        console.log("compares array", this.state)
        return (
            <div className="container">
                <h1>Car Explorer</h1>
                <NavigationBarComponent/>
                {/*<VehiclesComponent numOfCompares={this.state.compares}/>*/}
                {/*<button onClick={() =>*/}
                {/*    this.incrementCompare()*/}
                {/*}>+</button>*/}

                {/*<DisplayVehicleComponent/>*/}
                {/*<AdminComponent/>*/}


                <div className="row">
                <ul className="nav nav-tabs" style={{display: "inline"}}>
                    <li className="nav-item" style={{cursor: "pointer", float: "left"}}>
                        <a className="nav-link" onClick={() =>
                            this.setState({
                                component: 'user'
                            })
                        }>
                            User Tab
                        </a>
                    </li>

                    <li className="nav-item" style={{cursor: "pointer", float: "left"}}>
                        <a className="nav-link" onClick={() =>
                            this.setState({
                                component: 'admin'
                            })
                        }>
                            Admin Tab
                        </a>
                    </li>
                </ul>
                </div>

                <br/>
                <div>
                    {
                        this.state.component === "user" &&
                        <>
                            <VehiclesComponent numOfCompares={this.state.compares}/>
                            <button onClick={() =>
                                this.incrementCompare()
                            }>+</button>
                        </>
                    }

                    {
                        this.state.component === "admin" &&
                        <>
                            <AdminComponent/>
                        </>
                    }

                </div>

            </div>
        )
    }
}