import React from 'react'


class Contact extends React.Component {
    render(){
        return(
            <div id="contact" className="text-center">
                <div className="container">
                    <div className="section-title center">
                    <h2>Contacto</h2>
                    <hr/>
                    </div>
                    <div className="col-md-8 col-md-offset-2">
                    <div className="col-md-4"> <i className="fa fa-map-marker fa-2x"></i>
                        <p>Quilicura,<br/>
                        Santiago de Chile</p>
                    </div>
                    <div className="col-md-4"> <i className="fa fa-envelope-o fa-2x"></i>
                        <p>luis@luisvilches.cl</p>
                    </div>
                    <div className="col-md-4"> <i className="fa fa-phone fa-2x"></i>
                        <p> +56 9 8492 3552</p>
                    </div>
                    <div className="clearfix"></div>
                    </div>
                    <div className="col-md-8 col-md-offset-2">
                    <h3>¿TIENES UN PROYECTO EN MENTE?</h3>
                    <h5>CONTÁCTAME AHORA!</h5>
                    <form name="sentMessage" id="contactForm" novalidate>
                        <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                            <input type="text" id="name" className="form-control" placeholder="Nombre" required="required" />
                            <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                            <input type="email" id="email" className="form-control" placeholder="Correo" required="required"/>
                            <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        </div>
                        <div className="form-group">
                        <textarea name="message" id="message" className="form-control" rows="4" placeholder="Mensaje" required></textarea>
                        <p className="help-block text-danger"></p>
                        </div>
                        <div id="success"></div>
                        <button type="submit" className="btn btn-default">Enviar Mensaje</button>
                    </form>
                    <div className="social">
                        <ul>
                        <li><a href="https://www.facebook.com/lvilches21"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="https://twitter.com/lvilches21"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="http://github.com/luisvilches"><i className="fa fa-github"></i></a></li>
                        <li><a href="https://www.instagram.com/luisvilchesa/"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="www.linkedin.com/in/luisvilchesa"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact