import React from "react"
import {createStaff} from "../../../service/staff-services";
import {changeManager} from "../../../service/showroom-services";
import {BrandsComponent} from "../../user/brands-component";

export class DisplayShowroom extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            staff: [],
            staffName: '',
            staffSex: '',
            addStaff: false,
            addVehicle:false
        }
        this.addStaff = this.addStaff.bind(this)
    }

    componentDidMount() {
        this.setState({
            staff: this.props.showroom.staffList
        })
    }

    addStaff(staff, showroomId) {
        createStaff(staff, showroomId)
            .then(staff => this.setState({
                staff: [...this.state.staff, staff]
            }))
    }

    makeManager(staffId) {
        changeManager(this.props.showroom.showroomId, staffId)
            .then(showroom => this.setState({
                staff: showroom.staffList
            }))
    }


    render() {
        return (
            <div>
                <li className="list-group-item">
                    <ul>
                        <li className="list-group-item"><b>Showroom Name : </b> {this.props.showroom.showroomName}</li>
                        <li className="list-group-item"><b>Showroom Address : </b> {this.props.showroom.address}</li>
                        {/*<li className="list-group-item"><b>Manager : </b> {this.props.showroom.manager}</li>*/}
                        <li className="list-group-item"><b>Staff list : </b> {
                            <ul className="list-group">
                                {this.state.staff.map(staff =>
                                    <>
                                        <li className="list-group-item">{staff.staffName}
                                            {staff.manager === true && <b> (Manager)</b>}
                                            <button
                                                onClick={() => this.makeManager(staff.staffId)}
                                                className="btn btn-primary float-right">Make Manager
                                            </button>
                                        </li>
                                    </>
                                )}
                            </ul>

                        }
                            {this.state.addStaff &&
                            <>
                                <b>Name : </b>
                                <input type="text" onChange={(e) =>
                                    this.setState({
                                        staffName: e.target.value
                                    })}/>
                                <select onChange={(e) =>

                                    this.setState({
                                        staffSex: e.target.value
                                    })}>
                                    <option value="">No selection</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="NonBinary">Non Binary</option>
                                </select>
                                <button onClick={() => this.addStaff({
                                    staffName: this.state.staffName,
                                    staffSex: this.state.staffSex
                                }, this.props.showroom.showroomId)}>Save
                                </button>
                                <button onClick={() => this.setState({
                                        addStaff: false
                                    }
                                )
                                }
                                >Cancel
                                </button>
                            </>
                            }
                            <br/>
                            {
                                !this.state.addStaff &&
                                <button onClick={() => {
                                    this.setState({
                                        addStaff: true
                                    })
                                }} className="btn btn-primary">
                                    Add staff
                                </button>

                            }
                            <br/>
                        <br/>

                            {!this.state.addVehicle &&
                            <button onClick={() => {
                                this.setState({
                                    addVehicle: true
                                })
                            }} className="btn btn-primary">
                                Add Vehicle
                            </button>}

                            {this.state.addVehicle &&
                                <>
                                <BrandsComponent/>
                                <button onClick={() => this.setState({
                                        addVehicle: false
                                    }
                                )
                                }
                                >Cancel
                                </button>
                            </>}
                        </li>
                    </ul>


                </li>
            </div>
        )
    }
}