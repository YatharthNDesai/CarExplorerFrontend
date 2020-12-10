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
            console.log(brand)
            if(brand !== null) {
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
                    <form className="form-inline my-6 my-lg-6">
                        <input className="form-control mr-sm-6" type="search" placeholder="Search" aria-label="Search"
                               onChange={(e) => brand = e.target.value}
                        />
                        <button className="btn btn-outline-success my-2 my-sm-4"  type="button"
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