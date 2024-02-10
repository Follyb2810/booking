import React from 'react'
import Slider from "react-slick";
import {workDoneProps,SkilDataType, ServicesProps} from './../../constant'
import "/node_modules/slick-carousel/slick/slick.css"; 
import "/node_modules/slick-carousel/slick/slick-theme.css";



interface SkillProps {
    skillData: Array<SkilDataType | workDoneProps | ServicesProps>;
  }
  
  
  const Skill: React.FC<SkillProps> = ({ skillData }) => {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
  
    return (
      <Slider {...settings}>
        {skillData.map((data, index) => (
          <div key={index} className='h-40'>
            <div key={index} className='bg-slate-600 h-full text-white shadow-md mx-2 p-3 rounded-lg'>
              <h3>{('name' in data) ? data.name : data.title}</h3>
              <h3>{('level' in data) ? data.level : ''}</h3>
            </div>
          </div>
        ))}
      </Slider>
    );
  }
  
  export default Skill;
