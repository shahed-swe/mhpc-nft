import GolderHorse from '@/public/golder.png'
import WhiteHorse from '@/public/whitebig.png'
import Image from 'next/image'

const About  = () => {
    return (
        <div className="about-section" >
            <div className='about-innersec'>
                <div className='golden-horse'>
                    <Image src={GolderHorse} alt="golden-horse" />
                </div>
                <div className='inner-about'>
                    <h1 className='about-head'>ABOUT MHPC</h1>
                    <span className='main-text'>
                        Polychain Monsters aims to create a cross-chain digital collectible and gaming ecosystem with mainstream appeal. At its core, Polymon are beautifully animated NFTs, which can be unpacked from digital booster packs with $PMON on Ethereum, BNB Chain, and Polygon.
                    </span>
                </div>
                <div className='white-horse'>
                    <Image src={WhiteHorse} alt="white-horse" />
                </div>
            </div>
            <div className='about-last-section'></div>
        </div>
    )
}

export default About