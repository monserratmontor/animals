import { useState } from "react";

import bird from './assets/svg/bird.svg'
import dog from './assets/svg/bird.svg'
import cat from './assets/svg/bird.svg'
import cow from './assets/svg/bird.svg'
import gastor from './assets/svg/bird.svg'
import heart from './assets/svg/bird.svg'
import horse from './assets/svg/bird.svg'

import './AnimalsShow.css'

const svgMap = {
    bird,
    dog,
    cat,
    cow,
    gastor,
    horse
}

function AnimalsShow({type}){
    const [clicks, setClicks] = useState(0)

    const handleClick = () => {
        setClicks(clicks + 1)
    }

    return(
        <div
        onClick={handleClick}
        className="animals-show"
        >
    <img
    src={svgMap[type]}
    alt="animal"
    className="heart"
    />
    <img
    src={heart}
    alt="heart"
    style={{ width: 10 + 10 * clicks + 'px'}}
    className="heart"
    />
    </div>
    )
}

export default AnimalsShow