import Image from 'next/image'
const Cards = (props) => {
    const { image, title, text } = props.data
    return (
        <div className='card'>
            <div className='card_image'>
                <Image src={image} alt="image" height={410} width={410} />
            </div>
            <div className='card-title'>{title}</div>
            <div className='card-text'>{text}</div>
        </div>
    )
}

export default Cards