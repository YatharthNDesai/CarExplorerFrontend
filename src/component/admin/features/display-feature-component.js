import React from "react"
import {DisplayVehicleComponent} from "../vehicle/display-vehicle-component";
import {CreateFeatureComponent} from "./create-feature-component";

export class DisplayFeatureComponent extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <br/>
                <li className="list-group-item">
                    <b>Feature Name : </b> {this.props.feature.featureName}
                    <br/>
                    <b>Feature Cost : </b>{this.props.feature.featureCost}

                    <button style={{float: "right", position: "relative"}}
                            onClick={() => this.props.removeFeature(this.props.feature.featureId)}
                            className="btn btn-danger" type="button">Remove feature
                    </button>
                    <br/>


                    {/*{*/}
                    {/*    !this.state.displayVehicles &&*/}
                    {/*    <button className="btn btn-primary" onClick={() => this.setState({*/}
                    {/*        displayVehicles:true*/}
                    {/*    })}>*/}
                    {/*        Display Vehicles*/}
                    {/*    </button>*/}
                    {/*}*/}
                    <br/>
                    {/*{*/}
                    {/*    this.state.displayVehicles &&*/}
                    {/*    <>*/}
                    {/*        <DisplayVehicleComponent*/}
                    {/*            admin={true}*/}
                    {/*            featureId={this.props.feature.featureId}*/}
                    {/*        />*/}
                    {/*        <button className="btn btn-primary" onClick={() => this.setState({*/}
                    {/*            displayVehicles:false*/}
                    {/*        })}>*/}
                    {/*            Hide Vehicles*/}
                    {/*        </button>*/}
                    {/*    </>*/}
                    {/*}*/}
                </li>
            </div>
        )
    }
}