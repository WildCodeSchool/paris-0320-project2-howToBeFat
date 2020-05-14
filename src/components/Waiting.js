import React from 'react'
import './Waiting.css'
import logo from './images/onlyCat.png'

class Waiting extends React.Component {

    componentWillUnmount() {
        clearInterval(this.right)
        clearInterval(this.left)
    }

    componentDidMount() {
        this.run()
    }

    run() {
        let delay = 30

        const rotateEyeRight = () => {
            const eye = document.getElementById("right")
            eye.style.transform = `rotateZ(-${delay}deg)`
            delay++
        }

        const rotateEyeLeft = () => {
            const eye = document.getElementById("left")
            eye.style.transform = `rotateZ(${delay}deg)`
            delay++
        }
        this.right = setInterval(rotateEyeRight, 10)
        this.left = setInterval(rotateEyeLeft, 10)
    }

    render() {
        return (
            <div className="wait">
                <div id="right" className="eyesLeft"><div className="pupille"></div></div>
                <div id="left" className="eyesRight"><div className="pupille"></div></div>
                <img id='img' alt="" src={logo}></img>
            </div>
        )
    }
}

export default Waiting