import React from 'react'
import Contact from './Contact'

class Footer extends React.Component {
    render(){
        return (
            <div>
                <Contact />
                <div id="footer">
                    <div className="container text-center">
                        <div className="fnav">
                        <p>Copyright &copy; 2016 Luis Vilches <a href="http://www.dowhile.cl" rel="nofollow">Dowhile</a></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer