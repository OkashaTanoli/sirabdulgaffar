import React from 'react'
import './footer.css'

function Footer(){
    return(
        <div className="footer">
                    <h3 style={{ fontFamily: 'okasha', color: 'rgb(70, 70, 70)' }}>CATEGORIES</h3>
                    <div className='footerCat' style={{ width:'700px',margin:'0 auto',display: 'flex', fontSize: '15px', color: 'gray', justifyContent: 'center', flexWrap: 'wrap' }}>

                        <div className='footerText'>
                        Men Fashion
                    </div>
                        <div style={{ marginLeft: '15px', marginRight: '15px' }}>/</div>
                        <div className='footerText'>
                        Women Fashion
                    </div>
                        <div style={{ marginLeft: '15px', marginRight: '15px' }}>/</div>
                        <div className='footerText'>
                        Automobile and Motor Bikes
                    </div>
                        <div style={{ marginLeft: '15px', marginRight: '15px' }}>/</div>
                        <div className='footerText'>
                        Mobile Accessories
                    </div>
                        <div style={{ marginLeft: '15px', marginRight: '15px' }}>/</div>
                        <div className='footerText'>
                        New and Unique
                    </div>
                        <div style={{ marginLeft: '15px', marginRight: '15px' }}>/</div>
                        <div className='footerText'>
                        Home Appliances
                    </div>
                        <div style={{ marginLeft: '15px', marginRight: '15px' }}>/</div>
                        <div className='footerText'>
                        Watch Bags and Jewelery
                    </div>
                        <div style={{ marginLeft: '15px', marginRight: '15px' }}>/</div>
                        <div className='footerText'>
                        Health and Beauty
                    </div>
                        <div style={{ marginLeft: '15px', marginRight: '15px' }}>/</div>
                        <div className='footerText'>
                        Home and Lights
                    </div>
                        <div style={{ marginLeft: '15px', marginRight: '15px' }}>/</div>
                        <div className='footerText'>
                        Baby Products
                    </div>
                        <div style={{ marginLeft: '15px', marginRight: '15px' }}>/</div>
                        <div className='footerText'>
                        Gift Center
                    </div>
                        
                    </div>
                    <h3 style={{ fontFamily: 'okasha', color: 'rgb(70, 70, 70)', marginTop: '30px' }}>INFORMATION</h3>
                    <div style={{ display: 'flex', fontSize: '15px', color: 'gray', justifyContent: 'center', flexWrap: 'wrap' }}>

                        <div className='footerText'>
                        About Us
                    </div>
                        <div style={{ marginLeft: '15px', marginRight: '15px' }}>/</div>
                        <div className='footerText'>
                        Contact Us
                    </div>
                    </div>

                </div>
    )
}


export default Footer