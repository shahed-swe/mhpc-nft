import FirstHorse from '@/public/462.png'
import SecondHorse from '@/public/461.png'
import ThirdHorse from '@/public/463.png'
import Cards from './cards';


const Catalogue = () => {

    const fakeData = [
        {
            image: FirstHorse,
            title: "CATALOGUE 1",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            image: SecondHorse,
            title: "CATALOGUE 2",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            image: ThirdHorse,
            title: "CATALOGUE 3",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
    ]

    return (
        <div>
            <div className="catalogue-section">
                <div className="catalogue-innersec">
                    <p className="title">MHPC CATALOGUE</p>
                    <p className="slogan">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="catalogue-cardsec">
                    {fakeData && fakeData.length && fakeData.map((item, index) => {
                        return (
                            <Cards key={index} data={item} />
                        )
                    })}
                </div>
            </div>
            <div className='catalogue-last-section'>
                
            </div>
        </div>
        
    );
};

export default Catalogue;