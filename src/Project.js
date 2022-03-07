import React from "react";
import "./Project.css";
import Project1 from './img/img1.jpg';
import Project2 from './img/img2.png';
import Project3 from './img/img3.jpg';
import Project4 from './img/img4.jpg';
import Project5 from './img/img5.jpg';
import Project6 from './img/img6.jpg';

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My Latest Projects</h1>
        <p className="heading p__color">
          What i've made
        </p>
        
      </div>
       <div className="container">
           <div className="row">
             
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Electronic Gadget Website</h5>
                     <h4 className="project__text">Using HTML,CSS</h4>
                     <a href="https://gallant-payne-e90c2c.netlify.app" className="project__btn" target='_blank'>View Project</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project2} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Realtime Chat App</h5>
                     <h4 className="project__text">Using Nodejs,Expressjs</h4>
                     <a href="https://github.com/purnimakatiyar/realtimechat" className="project__btn" target='_blank'>View Project</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project3} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Salary Predictor</h5>
                     <h4 className="project__text">Using Python,ML</h4>
                     <a href="https://github.com/purnimakatiyar/salarypredictor" className="project__btn" target='_blank'>View Project</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project4} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Drum Kit</h5>
                     <h4 className="project__text">Using Javascript</h4>
                     <a href="https://drum-kitpk.vercel.app/" className="project__btn" target='_blank'>View Project</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project5} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Order Food Online</h5>
                     <h4 className="project__text">Using HTML,CSS</h4>
                     <a href="https://order-food-onlinepk.vercel.app/" className="project__btn" target='_blank'>View Project</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project6} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">DisneyWorld</h5>
                     <h4 className="project__text">Using HTML</h4>
                     <a href="https://github.com/purnimakatiyar/disneyworld" className="project__btn" target='_blank'>View Project</a>
                     </div>
                 </div>
             </div>
             
             <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
             <button className="view__more pointer btn">View more</button>
             </div>

           </div>
       </div>
    </div>
  );
}

export default Project;