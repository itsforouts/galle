import React from 'react'
import ProductItem from './ProductItem'
import Bread from '../../../Components/BreadCrumb/Bread'

export default function Products() {
    return (
        <div className="body-wrapper">
            <div className="container-fluid">
                <div className="position-relative overflow-hidden">
                    <div className="shop-part d-flex w-100">
                        <div className="card-body pb-0 pt-4">
                            <div className="row">
                                <ProductItem/>
                                <ProductItem/>
                                <ProductItem/>
                                <ProductItem/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
