import React from 'react'
import App from './App'
import Footer from './Footer'
import {Link} from 'react-router'

class Porta extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            portafolio: []
        }
    }
    componentDidMount(){
        fetch('https://portafolio-luisvilches.herokuapp.com/sites')
        .then(request => {
            return request.json()
        })
        .then(res => {
            this.setState({
                portafolio: res
            })
            console.log(res)
        })
    }
    render(){
        return(
            <div className="container porta">
                <div className="row">
                    <div className="col-md-12">
                        <br/>
                        <br/>   
                        <h2 className="text-center">Mis Trabajos</h2>
                        <hr/>
                    </div>
                    {this.state.portafolio.map((item,index) => {
                    return(
                        <div className="col-sm-6 col-md-4 web" key={index}>
                            <div className="portfolio-item">
                                <div className="hover-bg"> 
                                    <Link href={item.url} title="" rel="">
                                        <div className="hover-text">
                                            <h4>{item.nombre}</h4>
                                            <small>{item.tecnologias}</small> 
                                        </div>
                                        <img src={item.urlImage} className="img-responsive" alt="title" /> 
                                    </Link> 
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

class Portafolios extends React.Component{
    render(){
        return(
            <div>
                <App />
                <Porta />
                <Footer />
            </div>
        )
    }
}

export default Portafolios