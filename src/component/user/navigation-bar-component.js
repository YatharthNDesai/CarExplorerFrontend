import React from "react";
import {getBrandByName} from "../../service/brand-services";
import {bindReporter} from "web-vitals/dist/lib/bindReporter";

export class NavigationBarComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
    }

    getBrandByName(name) {
        getBrandByName(name).
        then(brand => {
            if(brand !== undefined) {
                this.setState({
                    name: brand.brandName
                }
                )
        }
            }
        )
    }

    render() {
        let brand = ""
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <form className="form-inline p-2">
                        <input className="form-control" type="search" placeholder="Search" aria-label="Search"
                               onChange={(e) => brand = e.target.value}
                        />
                        <button className="btn btn-outline-success p-2"  type="button"
                        onClick={() => this.getBrandByName(brand)}
                        >Search</button>
                    </form>
                </nav>
                {console.log(this.state.name)}
                <label>{this.state.name}</label>
            </div>
        )
    }
}