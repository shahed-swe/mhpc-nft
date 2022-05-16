import { useState, useEffect } from 'react'

const Header = () => {
    return (
        <div className='header-main'>
            <div className="header-section">
                {/* <Image src={HeaderImage} alt="background" className='background' width={data.innerWidth} /> */}
                <div className='inner-section' style={{backgroundImage: '@/public/background.png'}}>

                    <h1>A Unique, Allegorical Collction of NFTs</h1>
                    <button className='inner-button'>MINT</button>
                </div>
            </div>
            <div className='header-last-section'></div>
        </div>

    )
}

export default Header