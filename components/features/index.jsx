import Cards from "./cards"
import YellowHorse from '@/public/yellow.png';
import GrayHorse from '@/public/gray.png';
import WhiteHorse from '@/public/white.png';
import BlackHorse from '@/public/black.png';

const Features = () => {

    const fakeData = [
        {
            image: YellowHorse,
            title: "CONTENT",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's "
        },
        {
            image: GrayHorse,
            title: "CONTENT",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's "
        },
        {
            image: WhiteHorse,
            title: "CONTENT",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's "
        },
        {
            image: BlackHorse,
            title: "CONTENT",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's "
        },
        
    ]

    return (
        <div>
            <div className="feature-section">
                <div className="feature-innersec">
                    <p>MHPC FEATURES</p>
                </div>
                <div className="feature-cardsec">
                    {fakeData && fakeData.length && fakeData.map((item, index) => {
                        return (
                            <Cards data={item} key={index}/>
                        )
                    })}
                </div>
            </div>
            <div className="feature-last-section"></div>
        </div>
    )
}

export default Features