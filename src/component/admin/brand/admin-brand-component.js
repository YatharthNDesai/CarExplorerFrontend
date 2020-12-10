import React from "react"
import {createBrand, deleteBrand, getAllBrands} from "../../../service/brand-services";
import {DisplayBrandComponent} from "./display-brand-component";
import {CreateBrandComponent} from "./create-brand-component";

export class AdminBrandComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            brands: [],
            edit: false

        }
        this.removeBrand = this.removeBrand.bind(this)
        this.createBrand = this.createBrand.bind(this)
    }

    componentDidMount() {
        getAllBrands()
            .then(brands => this.setState({
                brands: brands
            }))
    }

    removeBrand(brandId) {
        deleteBrand(brandId)
            .then(res =>
                this.setState({
                brands: this.state.brands.filter(brand => brand.brandId !== brandId)
            })
            )
    }

    createBrand(brand) {
        createBrand(brand)
            .then(res => this.setState({
                brands:[...this.state.brands,res]
            }))
    }

    render() {
        return (
            <ul className="list-group">
                {this.state.brands.map((brand) =>
                    <>
                        <br/>
                    <DisplayBrandComponent
                    brand={brand}
                    removeBrand={this.removeBrand}
                />
                </>)}
                <br/>
                {!this.state.edit && <button onClick={() => this.setState({
                    edit: true
                })} className="btn btn-primary">
                    Add Brand
                </button>}
                {this.state.edit &&

                <>
                    <CreateBrandComponent
                        createBrand={this.createBrand}
                        brandId={this.props.brandId}
                    />
                    <br/>
                    <button onClick={() => this.setState({
                        edit: false
                    })} className="btn btn-dark">
                        Minimize Brand
                    </button>
                </>
                }
            </ul>
        )
    }
}