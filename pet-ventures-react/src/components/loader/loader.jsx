import React, { Component } from 'react';
import "./loader.css";
class Loader extends Component {
    render() {
        return (
            // if loading is true, then show this, if not deactivate
            <div className={`preloader ${this.props.loading ? '' : 'preloader-deactivate'}`}>
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="spinner">
                            <div className="rect1"></div>
                            <div className="rect2"></div>
                            <div className="rect3"></div>
                            <div className="rect4"></div>
                            <div className="rect5"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Loader;