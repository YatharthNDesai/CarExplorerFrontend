import React from "react"
import {deleteStaff, getAllStaff} from "../../../service/staff-services";
import {DisplayStaffComponent} from "./display-staff-component";

export class AdminStaffComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            staff:[]
        }
        this.removeStaff = this.removeStaff.bind(this)
    }

    componentDidMount() {
        getAllStaff()
            .then(staff => this.setState({
                staff:staff
            }))
    }

    removeStaff(staffId) {
        deleteStaff(staffId)
            .then(res => this.setState({
                staff: this.state.staff.filter(staff => staff.staffId !== staffId)
            }))
    }

    render() {
        return(
            <ul className="list-group">
                {this.state.staff.map((staff) => <DisplayStaffComponent
                staff={staff}
                removeStaff={this.removeStaff}
                />)}
                <button className="btn btn-success">+</button>
            </ul>
        )
    }
}