import React from 'react'
import App from './App'
import Footer from './Footer'

class Content extends React.Component {
    render(){
        return(
            <div id="about">
                <div className="container">
                    <div className="section-title text-center center">
                        <h2>¿Quien soy?</h2>
                        <hr/>
                    </div>
                <div className="row">
                    <div className="col-md-12 text-center"><img src="img/me.jpg" className="img-responsive" /></div>
                        <div className="col-md-8 col-md-offset-2">
                            <div className="about-text">
                            <p>Mi nombre es Luis Vilches, 27 años, Fullstack JS Developer & Android Developer, ubicado en Santiago de Chile. Me encanta crear experiencias web que se vean y funcionen bien, también disfruto codear interfaces web que lleven retos, me encanta la lógica y estructura del código.</p>
                            <p>Siempre estoy en aprendizaje continuo sobre las últimas tendencias en tecnología web para ofrecer un trabajo acorde a los tiempos.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

class About extends React.Component{
    render(){
        return(
            <div>
                <App />
                <Content/>
                <Footer />
            </div>
        )
    }
}

export default About