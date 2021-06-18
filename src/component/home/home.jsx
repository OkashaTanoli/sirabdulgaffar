import React, { useState } from 'react'
import Header from '../small components/header/header'
// import Cat from '../small components/categories/categories'
import Cau from '../small components/caurosel/caurosel'
import './home.css'
import Img from '../../images/mobile.png'
import Footer from '../small components/footer/footer'


const settingEllipse = (para) => {
    var spli = para.split('')
    var arr = []
    for (var i = 0; i <= 80; i++) {
        arr = [...arr, para[i]]
    }
    var complete = arr.join('')
    var add = complete + '...'

    return add
}

function Home() {

    const para = 'Chemical reaction, a process in which one or more substances, the reactants, are converted to one or more different substances, the products. Substances are either chemical elements or compounds. A chemical reaction rearranges the constituent atoms of the reactants to create different substances as products.'
    const [getFresh, setFresh] = useState(para)
    return (
        <div className='homeMainDiv'>
            <Header />
            <div className='mainContainer'>
                {/* <Cat /> */}
                <Cau />
                <div>
                    <p style={{ fontSize: '25px' }}>Featured</p>
                    <div className='featureDiv'>
                        <div style={{border:'1px solid #c7c7c7'}}>
                            <div style={{ height: '160px', width: '100%', display: 'flex', justifyContent: 'center', paddingTop: '10px', paddingBottom: '10px' }}>
                                <img src={Img} alt="" width='auto' height='100%' />
                            </div>
                            <div style={{ width: '100%' }}>
                                <p style={{ marginLeft: '20px', marginRight: '20px', color: 'rgb(34,156,202)', fontSize: '20px', fontWeight: '700' }}>iPhone</p>
                                <p style={{ fontSize: '14px', color: 'gray', marginLeft: '20px', marginRight: '20px', height: '60px' }}>{settingEllipse(para)}</p>
                                <p style={{marginLeft:'20px',fontSize:'15px',color:'#333333',fontWeight:'600'}}>RS : 400</p>
                            </div>
                        </div>
                        <div style={{border:'1px solid #c7c7c7'}}>
                            <div style={{ height: '160px', width: '100%', display: 'flex', justifyContent: 'center', paddingTop: '10px', paddingBottom: '10px' }}>
                                <img src={Img} alt="" width='auto' height='100%' />
                            </div>
                            <div style={{ width: '100%' }}>
                                <p style={{ marginLeft: '20px', marginRight: '20px', color: 'rgb(34,156,202)', fontSize: '20px', fontWeight: '700' }}>iPhone</p>
                                <p style={{ fontSize: '14px', color: 'gray', marginLeft: '20px', marginRight: '20px', height: '60px' }}>{settingEllipse(para)}</p>
                                <p style={{marginLeft:'20px',fontSize:'15px',color:'#333333',fontWeight:'600'}}>RS : 400</p>
                            </div>
                        </div>
                        <div style={{border:'1px solid #c7c7c7'}}>
                            <div style={{ height: '160px', width: '100%', display: 'flex', justifyContent: 'center', paddingTop: '10px', paddingBottom: '10px' }}>
                                <img src={Img} alt="" width='auto' height='100%' />
                            </div>
                            <div style={{ width: '100%' }}>
                                <p style={{ marginLeft: '20px', marginRight: '20px', color: 'rgb(34,156,202)', fontSize: '20px', fontWeight: '700' }}>iPhone</p>
                                <p style={{ fontSize: '14px', color: 'gray', marginLeft: '20px', marginRight: '20px', height: '60px' }}>{settingEllipse(para)}</p>
                                <p style={{marginLeft:'20px',fontSize:'15px',color:'#333333',fontWeight:'600'}}>RS : 400</p>
                            </div>
                        </div>
                        <div style={{border:'1px solid #c7c7c7'}}>
                            <div style={{ height: '160px', width: '100%', display: 'flex', justifyContent: 'center', paddingTop: '10px', paddingBottom: '10px' }}>
                                <img src={Img} alt="" width='auto' height='100%' />
                            </div>
                            <div style={{ width: '100%' }}>
                                <p style={{ marginLeft: '20px', marginRight: '20px', color: 'rgb(34,156,202)', fontSize: '20px', fontWeight: '700' }}>iPhone</p>
                                <p style={{ fontSize: '14px', color: 'gray', marginLeft: '20px', marginRight: '20px', height: '60px' }}>{settingEllipse(para)}</p>
                                <p style={{marginLeft:'20px',fontSize:'15px',color:'#333333',fontWeight:'600'}}>RS : 400</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>


    )
}

export default Home
