import React from 'react'
import App from './App'
import Footer from './Footer'
import CircularProgressbar from 'react-circular-progressbar'

class Skill extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            skills: []
        }
    }
    componentDidMount(){
        fetch('https://portafolio-luisvilches.herokuapp.com/skills')
        .then(request => {
            return request.json()
        })
        .then(res => {
            this.setState({
                skills: res
            })
        })
    }
    render(){
        return(
            <div className="container minH">
                <div className="row">
                    <div className="col-md-12">
                        <br/>
                        <br/>
                        <h2 className="text-center">Mis Skills</h2>
                        <hr/>
                    </div>
                    
                    {this.state.skills.map((item,index) => {
                        return(
                            <div className="col-md-2" key={index}>
                                <br/>
                                <CircularProgressbar percentage={item.porcentaje} initialAnimation={true}/>
                                <br/>
                                <br/>
                                <h4 className="text-center">{item.skill}</h4>
                                <br/>
                                <br/>
                                <br/>
                            </div>
                        )
                    })}

                </div>
            </div>
        )
    }
}

class Skills extends React.Component{
    render(){
        return(
            <div>
                <App />
                <Skill/>
                <Footer />
            </div>
        )
    }
}

export default Skills