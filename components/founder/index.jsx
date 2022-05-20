import User1 from '@/public/user1.png'
import User2 from '@/public/user2.png'
import User3 from '@/public/user3.png'
import User4 from '@/public/user4.png'
import Cards from './cards';


const Founder = () => {

    const fakeData = [
        {
            image: User1,
            title: "FOUNDER 1",
            founder_title: "FOUNDER TITLE",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            image: User2,
            title: "FOUNDER 2",
            founder_title: "FOUNDER TITLE",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            image: User3,
            title: "FOUNDER 3",
            founder_title: "FOUNDER TITLE",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            image: User4,
            title: "FOUNDER 3",
            founder_title: "FOUNDER TITLE",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
    ]

    return (
        <div>
            <div className="founder-section">
                <div className="founder-innersec">
                    <p className="title">MEET OUR FOUNDERS</p>
                    <p className="slogan">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="founder-cardsec">
                    {fakeData && fakeData.length && fakeData.map((item, index) => {
                        return (
                            <Cards key={index} data={item} />
                        )
                    })}
                </div>
            </div>
            <div className='founder-last-section'>

            </div>
        </div>

    );
};

export default Founder;