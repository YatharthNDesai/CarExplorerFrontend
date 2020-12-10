import React from "react"

export class DisplayStaffComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div>
                <li className="list-group-item">{this.props.staff.staffName}
                    <button style={{float: "right", position: "relative"}} onClick={() => this.props.removeStaff(this.props.staff.staffId)}
                    className="btn btn-danger" type="button">Remove staff</button>
                </li>
            </div>
        )
    }
}