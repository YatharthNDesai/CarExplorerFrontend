import React from "react"
import Select from 'react-select'

import {getAllBrands} from "../../service/brand-services";
import {ModelsComponent} from "./models-component";

export class BrandsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            brand: {},
            model:{}
        }
    }

    componentDidMount() {
        getAllBrands()
            .then(list => {
                    if (list !== null) {
                        this.setState({
                            list: list
                        })
                    }
                }
            )
    }



    render() {

        let brand = this.state.list.filter((brand) =>
            brand.brandName === this.state.brand
        )[0]
        return (

            <div className="form-group">
                <select className="form-control"
                    onChange={(e) => this.setState({
                    brand: e.target.value
                })} defaultValue={(e) => e.target.value} >
                    <option value="No selection">No Selection</option>
                    {this.state.list.map((brand) => {
                        return (
                            <option key={brand.brandId} value={brand.brandName}>{brand.brandName}</option>
                        )
                    })}
                </select>
                {brand !== undefined &&
                    <>
                        <br/>
                <ModelsComponent
                    modelList={brand.modelList}
                />
                <br/>
                </>
                }

            </div>
        )
    }
}