import React from "react";
import {NavigationBarComponent} from "../component/navigation-bar-component";
import {BrandsComponent} from "../component/brands-component";
import {VehiclesComponent} from "../component/vehicles-component";
import {FeaturesComponent} from "../component/features-component";
import {DisplayVehicleComponent} from "../component/display-vehicle-component";

export class CarExplorerComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            compares: [0],
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
                <h1>{this.state.num}</h1>
                <NavigationBarComponent/>
                <VehiclesComponent numOfCompares={this.state.compares}/>
                <button onClick={() =>
                    this.incrementCompare()
                }>+</button>

                <DisplayVehicleComponent/>

            </div>
        )
    }
}