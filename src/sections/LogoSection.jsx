import React from 'react';
import {logoIconsList} from "../constants/index.js";

const LogoIcon = ({ icon }) => {
return (
    <div className="flex-none flex-center marquee-item">
        <img src={icon.imgPath} alt={icon.name} />
    </div>
)
}

const LogoSection = () => {
    return (
        <div className="md:my-20 my-10 relative">
            <h1 className="flex justify-items-center pl-35 font-bold text-4xl">Clients</h1>
            <div className="gradient-edge"/>
            <div className="gradient-edge" />

            <div className="marquee h-52">
                <div className="marquee-box md:gap-60 gap-75">
                    {logoIconsList.map((icon) => (
                        <LogoIcon key={icon.name} icon={icon}/>
                    ))}  {logoIconsList.map((icon) => (
                        <LogoIcon key={icon.name} icon={icon}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LogoSection;
