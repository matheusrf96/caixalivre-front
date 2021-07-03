import React from 'react';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container">
                <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Logo</a>
                        </li>
                    </ul>
                </div>

                <div className="mx-auto order-0">
                    <a className="navbar-brand mx-auto" href="#">CaixaLivre</a>
                </div>

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2"></div>
            </div>
        </nav>
    )
}

export default Navbar