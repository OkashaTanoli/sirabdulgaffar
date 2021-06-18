import React, { useState } from 'react'
import './caurosel.css'
import Imgage1 from '../../../images/baby.png'
import Imgage2 from '../../../images/Home-Appliances.jpg'
import Imgage3 from '../../../images/ecommerce.jpg'
import { AiFillLeftCircle } from 'react-icons/ai'
import { AiFillRightCircle } from 'react-icons/ai'

function Cau() {

    const images = [
        {
            image: Imgage1
        },
        {
            image: Imgage2
        },
        {
            image: Imgage3
        }
    ]

    const [current, setCurrent] = useState(0)
    const length = images.length


    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    console.log(current)

    if (!Array.isArray(images) || images.length <= 0) {
        return null
    }

    return (
        <section className='slider'>
            <AiFillLeftCircle className='back' onClick={() => { prevSlide() }} />
            <AiFillRightCircle className='next' onClick={() => { nextSlide() }} />
            {
                images.map((slide, index) => {
                    return (
                        <>
                        {/* <div className='imagediv' key={index}> */}
                            {index === current && (
                                <div className='mainCauroselContainer' style={{width:'100%',overflow:'hidden',backgroundColor:'gray',height:'400px',position:'relative'}}>
                                    <div style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',backgroundColor:'rgba(0,0,0,0.6)'}}></div>
                                    <img src={slide.image} alt="" className='image' />
                                </div>
                            )}
                        {/* </div> */}
                        </>
                    )
                })
            }
        </section>
    )
}
export default Cau