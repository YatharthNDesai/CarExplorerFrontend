import React from "react"
import {getAllShowrooms} from "../../../service/showroom-services";
import {DisplayShowroom} from "./display-showroom";

export class ShowroomComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showrooms:[]
        }
    }

    componentDidMount() {
        getAllShowrooms()
            .then(showrooms => this.setState({
                showrooms:showrooms
            }))
    }


    render() {
        return (
            <div>
                <ul className="list-group">
                    {this.state.showrooms.map(showroom => <DisplayShowroom
                    showroom={showroom}
                    />) }
                </ul>


            </div>
        )
    }
}