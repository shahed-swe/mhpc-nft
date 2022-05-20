import { useState, useEffect } from 'react'
import LastImage from '@/public/lastimage.png'
import Image from 'next/image'


const Mining = () => {
    const [width, setWidth] = useState()
    useEffect(() => {
        setWidth(window.innerWidth)
    },[width])

    return (
        <div className='mining-main' >
            <div className="mining-section">
                <div className='inner-section'>
                    <h1 className='top-text'>ENTER THE MHPC</h1>
                    <h1 className='bottom-text'>0000/X000 Minted </h1>
                    <button className='inner-button'>MINT</button>
                </div>
            </div>
            <div className='mining-last-section'></div>
        </div>
    )
}

export default Mining