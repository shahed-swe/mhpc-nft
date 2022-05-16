/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
const Cards = (props) => {
    const { image, title, text } = props.data
    return (
        <div className='card'>
            <img src={image.src} alt="image" className='card-image' />
            <div className='card-title'>{title}</div>
            <div className='card-text'>{text}</div>
        </div>
    )
}

export default Cards