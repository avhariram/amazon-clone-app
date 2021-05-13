import React from 'react';
import Product from './Product'
import './Home.css'

function Home(){
    return(
        <div className ="home">
            <div className="home__container" >
                <img 
                className="home__image" 
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                alt="Background" 
                />
                {/* put the products into separate rows */}
                <div className="home__row">
                    <Product 
                    id="1"
                    title="The Lean startup"
                    price={19.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
                    rating={5} 
                    />
                    <Product
                    id="2"
                    title="Kenwood kiMix stand mixer for baking and all that good stuff"
                    image="https://images-eu.ssl-images-amazon.com/images/I/61RkA9I2vZL.__AC_SY300_SX300_QL70_ML2_.jpg" 
                    price={29.99}
                    rating={3}
                    />
                </div>
                <div className="home__row">
                <Product
                    id="3"
                    title="This is an amazon echo"
                    image="https://www.mytrendyphone.eu/images/Amazon-Echo-Dot-3-Smart-Speaker-with-Alexa-and-Alarm-Clock-Black-0841667160306-17112020-01-p.jpg" 
                    price={129.99}
                    rating={3}
                    />
                <Product
                id="4"
                title="New apple iPod I guess"
                price={200}
                image="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipod-touch-select-2019_GEO_HK?wid=404&hei=543&fmt=jpeg&qlt=95&.v=1612810418000"
                rating={2}
                />
                <Product
                id="5"
                title="Whats this you ask"
                price={183}
                image="https://miro.medium.com/max/4038/1*KoZPn1bF5q29om6skmeENg.png"
                rating={5}
                 />
                </div>
                <div className="home__row">
                <Product 
                id="7"
                title="The main attraction"
                price={2000}
                image="https://i.pinimg.com/originals/51/59/59/51595948f28cfccc915b9bef7bbe9412.png"
                rating={7}
                />
                </div>
            </div>
        </div>
    )
} 

export default Home