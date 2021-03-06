import React, { useState, useEffect } from 'react';
import can0 from '../../assets/images/cans/can00.png';
import can1 from '../../assets/images/cans/can01.png';
import can2 from '../../assets/images/cans/can02.png';
import can3 from '../../assets/images/cans/can03.png';
import can4 from '../../assets/images/cans/can04.png';
import './EnergyDrink.scss';

const EnergyDrink = props => {
    const [image, setImage] = useState(can0);

    const sleep =(ms)=> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    useEffect(() => {
        const images = [can0, can1, can2, can3, can4];

        const cycleImages = async () => {
            for (let i of images) {
                setImage(i);
                await sleep(250);
            }

            for (let i = images.length - 1; i > -1;i--) {
                setImage(images[i]);
                await sleep(200);
            }

            cycleImages();
        }
        cycleImages();
    }, []);

    return (
        <div className="EnergyDrink"> <img src={image} alt='Energy Drink' /></div>
    );
};

export default EnergyDrink;