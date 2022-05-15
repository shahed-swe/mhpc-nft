import { useState, useEffect } from 'react'

import HeaderImage from '@/public/background.png'
import Image from 'next/image'

const Header = () => {
    const [data, setData] = useState({})

    useEffect(() => {
        setData(window)
    }, [])
    return (
        <>
            <div className="header-section">
                <Image src={HeaderImage} alt="background" className='background' width={data.innerWidth} />
                <div className='inner-section'>
                    <h1>A Unique, Allegorical Collction of NFTs</h1>
                    <button className='inner-button'>MINT</button>
                </div>
            </div>
            <div className='header-last-section'></div>
        </>

    )
}

export default Header