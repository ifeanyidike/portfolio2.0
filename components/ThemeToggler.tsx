import React, { useState } from 'react'
import { ThemeBallContainer, ThemeToggleContainer } from '../styles/ThemeStyles'
import { GiFlowerStar } from 'react-icons/gi'
import { IoSunnySharp } from 'react-icons/io5'
import { HiMoon } from 'react-icons/hi'
import { GiNightSleep } from 'react-icons/gi'

interface Props {

}

interface BallProps {
    translate: any
}


const ThemeBall: React.FC<BallProps> = ({ translate }) => {
    return (
        <ThemeBallContainer translate={translate} />
    )
}

const ThemeToggler: React.FC<Props> = () => {
    const [toggleMode, setToggleMode] = useState(false)

    return (
        <ThemeToggleContainer onClick={() => setToggleMode(!toggleMode)}>

            <ThemeBall translate={toggleMode ? '30px' : '0px'} />
            <div className="leftItems">
                <GiNightSleep className='togglerIcon moon' style={{ display: toggleMode ? 'block' : 'none' }} />
            </div>
            <div className="rightItems">
                <IoSunnySharp className='togglerIcon' style={{ display: toggleMode ? 'none' : 'block' }} />
            </div>

        </ThemeToggleContainer>
    );
}
export default ThemeToggler