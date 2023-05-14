// import React from 'react';
// import Typical from 'react-typical'
// import ScrollService from '../../../utilities/ScrollService'
// import './Profile.css'


// export default function Profile(props) {
//   return (
//     <div className='profile-container'>
//       <div className='profile-parent'>
//         <div className='profile-details'>
//           <div className='colz'>
//             <div className='colz-icon'>
//               <a href='https://github.com/AaronSMiller'>
//                 <i className='fa fa-github-square'></i>
//               </a>
//             </div>
//           </div>
//           <div className="profile-details-name">
//             <span className='primary-text'>
//               {" "}
//               Hello, I'm <span className="highlighted-text">Aaron</span>
//             </span>
//           </div>
//           <div className='profile-details-role'>
//             <span className='primary-text'>
//               {" "}
//               <h1>
//                 {" "}
//                 <Typical
//                   loop={Infinity}
//                   steps={[
//                     "Enthusiastic Dev 👍",
//                     2000,
//                     "Fullstack Developer 💻",
//                     2000,
//                     "MERN Stack Dev ⚛️",
//                     2000,
//                     "Team Oriented Engineer 👏",
//                     2000,
//                   ]}
//                 />
//               </h1>
//               <span className="profile-role-tagline">
//                 Passion for building Fullstack applications
//               </span>
//             </span>
//           </div>
//           <div className='profile-options'>
//             <button className='btn primary-btn'
//             onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
//             > Hire Me {" "}
//             </button>
//             <a href='AaronMillerResumeWebsite.pdf'>
//               <button className='btn highlighted-btn'>Get Resume</button>
//             </a>
//           </div>
//         </div>
//         <div className='profile-picture'>
//           <div className='profile-picture-background'></div>
//         </div>
//       </div>
//     </div>
//   );
// }