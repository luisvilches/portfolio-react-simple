import React from 'react'
import {Link} from 'react-router'


class Nav extends React.Component{
    render(){
        return(
            <div id="nav">
                <nav className="navbar navbar-custom">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse"> <i className="fa fa-bars"></i> </button>
                            <a className="navbar-brand page-scroll" href="#page-top">Luis Vilches</a> 
                        </div>
                        <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
                            <ul className="nav navbar-nav">
                                <li className="hidden"> <a href="#page-top"></a> </li>
                                <li> <Link className="page-scroll" to="/">¿Quien soy?</Link> </li>
                                <li> <Link className="page-scroll" to="skills">Skills</Link> </li>
                                <li> <Link className="page-scroll" to="portafolio">Portafolio</Link> </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Nav