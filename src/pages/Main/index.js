import React, { Fragment } from 'react'

import { Navbar } from '../../components/Navbar/Navbar'
import { Products } from '../../components/Products/Products'
import { Purchase } from '../../components/Purchase/Purchase'

const Main = () => {
    return (
        <Fragment>
            <Navbar />

            <div className="container">
                <div className="row">
                    <div className="col-sm-8 content-left">
                        <Products />
                    </div>

                    <div className="col-sm-4 content-right">
                        <Purchase />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Main