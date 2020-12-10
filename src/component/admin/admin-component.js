import React from "react"
import {AdminStaffComponent} from "./staff/admin-staff-component";
import {AdminBrandComponent} from "./brand/admin-brand-component";

export class AdminComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            component: "vehicle"
        }
    }

    render() {
        return (
            <div>
                <div className="row">
                <ul className="nav nav-tabs" style={{display: "inline"}}>
                    <li className="nav-item" style={{cursor: "pointer", float: "left"}}>
                        <a className="nav-link" onClick={() =>
                            this.setState({
                                component: 'vehicle'
                            })
                        }>
                            Vehicle Tab
                        </a>
                    </li>
                    <li className="nav-item" style={{cursor: "pointer", float: "left"}}>
                        <a className="nav-link" onClick={() =>
                            this.setState({
                                component: 'staff'
                            })
                        }>
                            Staff Tab
                        </a>
                    </li>
                </ul>
                </div>

                <br/>
                {this.state.component === "staff" && <AdminStaffComponent/>}
                {this.state.component === "vehicle" && <AdminBrandComponent/>}
            </div>
        )
    }
}