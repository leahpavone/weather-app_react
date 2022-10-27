// import dummysun from "../assets/dummysun.png";
// import feelslike from "../assets/feels-like.svg";
// import humidity from "../assets/humidity.svg";
// import search from "../assets/search-icon.svg";
// import sunrise from "../assets/sunrise1.svg";
// import sunset from "../assets/sunset1.svg";
// import uv from "../assets/uv-index.svg";

// function DummyData() {
//   return (
//     <div className="container">
//       <div className="content">
//         <form>
//           <div className="form-background">
//             <input
//               type="text"
//               placeholder="Enter City"
//               className="location-input"
//             />
//             <button type="submit" className="search-button">
//               <img src={search} alt="search icon" className="search-icon" />
//             </button>
//           </div>
//         </form>

//         <div className="current-card">
//           <div className="f-symbol">°F</div>
//           <div className="city">Los Angeles, California</div>
//           <div className="date-time-ctr">
//             <div className="date">Friday, September 28</div>
//             <div className="city-time">11:37 AM</div>
//           </div>

//           <div className="temp-desc-ctr">
//             <div className="temp-desc1">
//               <img className="temp-icon" src={dummysun} />
//               <div className="description">Partly Cloudy</div>
//             </div>
//             <div className="temp-desc2">
//               <div className="current-temp">77°</div>

//               <div className="hl-ctr">
//                 <div className="temp-range-ctr">
//                   <div className="temp-range-label">Low</div>
//                   <div className="mintemp">72°</div>
//                 </div>
//                 <div className="temp-range-ctr">
//                   <div className="temp-range-label">High</div>
//                   <div className="maxtemp">84°</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="times-ctr">
//             <div className="time-ctr">
//               <div className="time-item">12 PM</div>
//               <img src={dummysun} alt="temp icon" className="t-icon" />
//               <div className="time-temp">74°</div>
//             </div>
//             <div className="time-ctr">
//               <div className="time-item">12 PM</div>
//               <img src={dummysun} alt="temp icon" className="t-icon" />
//               <div className="time-temp">74°</div>
//             </div>
//             <div className="time-ctr">
//               <div className="time-item">12 PM</div>
//               <img src={dummysun} alt="temp icon" className="t-icon" />
//               <div className="time-temp">74°</div>
//             </div>
//             <div className="time-ctr">
//               <div className="time-item">12 PM</div>
//               <img src={dummysun} alt="temp icon" className="t-icon" />
//               <div className="time-temp">74°</div>
//             </div>
//             <div className="time-ctr">
//               <div className="time-item">12 PM</div>
//               <img src={dummysun} alt="temp icon" className="t-icon" />
//               <div className="time-temp">74°</div>
//             </div>
//             <div className="time-ctr">
//               <div className="time-item">12 PM</div>
//               <img src={dummysun} alt="temp icon" className="t-icon" />
//               <div className="time-temp">74°</div>
//             </div>
//             <div className="time-ctr">
//               <div className="time-item">12 PM</div>
//               <img src={dummysun} alt="temp icon" className="t-icon" />
//               <div className="time-temp">74°</div>
//             </div>
//             <div className="time-ctr">
//               <div className="time-item">12 PM</div>
//               <img src={dummysun} alt="temp icon" className="t-icon" />
//               <div className="time-temp">74°</div>
//             </div>
//             <div className="time-ctr">
//               <div className="time-item">12 PM</div>
//               <img src={dummysun} alt="temp icon" className="t-icon" />
//               <div className="time-temp">74°</div>
//             </div>
//             <div className="time-ctr">
//               <div className="time-item">12 PM</div>
//               <img src={dummysun} alt="temp icon" className="t-icon" />
//               <div className="time-temp">74°</div>
//             </div>
//             <div className="time-ctr">
//               <div className="time-item">12 PM</div>
//               <img src={dummysun} alt="temp icon" className="t-icon" />
//               <div className="time-temp">74°</div>
//             </div>
//             <div className="time-ctr">
//               <div className="time-item">12 PM</div>
//               <img src={dummysun} alt="temp icon" className="t-icon" />
//               <div className="time-temp">74°</div>
//             </div>
//             <div className="time-ctr">
//               <div className="time-item">12 PM</div>
//               <img src={dummysun} alt="temp icon" className="t-icon" />
//               <div className="time-temp">74°</div>
//             </div>
//             <div className="time-ctr">
//               <div className="time-item">12 PM</div>
//               <img src={dummysun} alt="temp icon" className="t-icon" />
//               <div className="time-temp">74°</div>
//             </div>
//             <div className="time-ctr">
//               <div className="time-item">12 PM</div>
//               <img src={dummysun} alt="temp icon" className="t-icon" />
//               <div className="time-temp">74°</div>
//             </div>
//             <div className="time-ctr">
//               <div className="time-item">12 PM</div>
//               <img src={dummysun} alt="temp icon" className="t-icon" />
//               <div className="time-temp">74°</div>
//             </div>
//             <div className="time-ctr">
//               <div className="time-item">12 PM</div>
//               <img src={dummysun} alt="temp icon" className="t-icon" />
//               <div className="time-temp">74°</div>
//             </div>
//             <div className="time-ctr">
//               <div className="time-item">12 PM</div>
//               <img src={dummysun} alt="temp icon" className="t-icon" />
//               <div className="time-temp">74°</div>
//             </div>
//             <div className="time-ctr">
//               <div className="time-item">12 PM</div>
//               <img src={dummysun} alt="temp icon" className="t-icon" />
//               <div className="time-temp">74°</div>
//             </div>
//             <div className="time-ctr">
//               <div className="time-item">12 PM</div>
//               <img src={dummysun} alt="temp icon" className="t-icon" />
//               <div className="time-temp">74°</div>
//             </div>
//             <div className="time-ctr">
//               <div className="time-item">12 PM</div>
//               <img src={dummysun} alt="temp icon" className="t-icon" />
//               <div className="time-temp">74°</div>
//             </div>
//             <div className="time-ctr">
//               <div className="time-item">12 PM</div>
//               <img src={dummysun} alt="temp icon" className="t-icon" />
//               <div className="time-temp">74°</div>
//             </div>
//             <div className="time-ctr">
//               <div className="time-item">12 PM</div>
//               <img src={dummysun} alt="temp icon" className="t-icon" />
//               <div className="time-temp">74°</div>
//             </div>
//             <div className="time-ctr">
//               <div className="time-item">12 PM</div>
//               <img src={dummysun} alt="temp icon" className="t-icon" />
//               <div className="time-temp">74°</div>
//             </div>
//           </div>
//         </div>

//         <div className="weather-content">
//           <div className="weather-desc-ctr">
//             <img className="feels-like-img" src={feelslike} />
//             <div className="weather-desc-text">79° F</div>
//           </div>

//           <div className="weather-desc-ctr">
//             <img className="uv-img" src={uv} />
//             <div className="weather-desc-text">6</div>
//           </div>

//           <div className="weather-desc-ctr">
//             <img className="avg-humidity-img" src={humidity} />
//             <div className="weather-desc-text">66%</div>
//           </div>

//           <div className="weather-desc-ctr">
//             <img src={sunrise} alt="sunrise icon" className="sun-icon" />
//             <div className="weather-desc-text">11:02 AM</div>
//           </div>

//           <div className="weather-desc-ctr">
//             <img src={sunset} alt="sunset icon" className="sun-icon" />
//             <div className="weather-desc-text">10:55 PM</div>
//           </div>
//         </div>

//         <div className="forecast-ctr">
//           <div className="forecast">
//             <div className="forecast-content">
//               <div className="forecast-description-ctr">
//                 <div className="forecast-date">Monday 10/26</div>
//                 <img className="forecast-temp-icon" src={dummysun} />
//               </div>
//               <div className="forecast-description">Cloudy</div>

//               <div className="forecast-lh">
//                 <div className="forecast-it-ctr">
//                   <div className="forecast-temp-label">Low</div>
//                   <div className="forecast-mintemp">64°</div>
//                 </div>
//                 <div className="forecast-it-ctr">
//                   <div className="forecast-temp-label">High</div>
//                   <div className="forecast-maxtemp">70°</div>
//                 </div>
//               </div>
//               <div className="forecast-weather-ctr">
//                 <div className="weather-list">
//                   <div className="forecast-weather-desc-ctr">
//                     <img
//                       src={sunrise}
//                       alt="sunrise icon"
//                       className="forecast-sun-icon"
//                     />
//                     <div className="forecast-sunrise">07:02 AM</div>
//                   </div>
//                   <div className="forecast-weather-desc-ctr">
//                     <img
//                       src={sunset}
//                       alt="sunset icon"
//                       className="forecast-sun-icon"
//                     />
//                     <div className="forecast-sunset">09:45 PM</div>
//                   </div>
//                 </div>
//                 <div className="top-wd-ctr">
//                   <div className="wd-ctr">
//                     <div className="wd-img-ctr">
//                       <img
//                         className="forecast-avg-humidity-img"
//                         src={humidity}
//                       />
//                     </div>
//                     <div className="forecast-avg-humidity">54%</div>
//                   </div>
//                   <div className="wd-ctr">
//                     <div className="wd-img-ctr">
//                       <img className="forecast-uv-img" src={uv} />
//                     </div>
//                     <div className="forecast-uv-index">7</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="forecast-times-ctr">
//               <div className="forecast-time-ctr">
//                 <div className="forecast-time">12 AM</div>
//                 <div className="forecast-temp">80°</div>
//               </div>
//               <div className="forecast-time-ctr">
//                 <div className="forecast-time">12 AM</div>
//                 <div className="forecast-temp">80°</div>
//               </div>
//               <div className="forecast-time-ctr">
//                 <div className="forecast-time">12 AM</div>
//                 <div className="forecast-temp">80°</div>
//               </div>
//               <div className="forecast-time-ctr">
//                 <div className="forecast-time">12 AM</div>
//                 <div className="forecast-temp">80°</div>
//               </div>
//               <div className="forecast-time-ctr">
//                 <div className="forecast-time">12 AM</div>
//                 <div className="forecast-temp">80°</div>
//               </div>
//               <div className="forecast-time-ctr">
//                 <div className="forecast-time">12 AM</div>
//                 <div className="forecast-temp">80°</div>
//               </div>
//               <div className="forecast-time-ctr">
//                 <div className="forecast-time">12 AM</div>
//                 <div className="forecast-temp">80°</div>
//               </div>
//               <div className="forecast-time-ctr">
//                 <div className="forecast-time">12 AM</div>
//                 <div className="forecast-temp">80°</div>
//               </div>
//               <div className="forecast-time-ctr">
//                 <div className="forecast-time">12 AM</div>
//                 <div className="forecast-temp">80°</div>
//               </div>
//               <div className="forecast-time-ctr">
//                 <div className="forecast-time">12 AM</div>
//                 <div className="forecast-temp">80°</div>
//               </div>
//               <div className="forecast-time-ctr">
//                 <div className="forecast-time">12 AM</div>
//                 <div className="forecast-temp">80°</div>
//               </div>
//               <div className="forecast-time-ctr">
//                 <div className="forecast-time">12 AM</div>
//                 <div className="forecast-temp">80°</div>
//               </div>
//               <div className="forecast-time-ctr">
//                 <div className="forecast-time">12 AM</div>
//                 <div className="forecast-temp">80°</div>
//               </div>
//               <div className="forecast-time-ctr">
//                 <div className="forecast-time">12 AM</div>
//                 <div className="forecast-temp">80°</div>
//               </div>
//               <div className="forecast-time-ctr">
//                 <div className="forecast-time">12 AM</div>
//                 <div className="forecast-temp">80°</div>
//               </div>
//               <div className="forecast-time-ctr">
//                 <div className="forecast-time">12 AM</div>
//                 <div className="forecast-temp">80°</div>
//               </div>
//               <div className="forecast-time-ctr">
//                 <div className="forecast-time">12 AM</div>
//                 <div className="forecast-temp">80°</div>
//               </div>
//               <div className="forecast-time-ctr">
//                 <div className="forecast-time">12 AM</div>
//                 <div className="forecast-temp">80°</div>
//               </div>
//               <div className="forecast-time-ctr">
//                 <div className="forecast-time">12 AM</div>
//                 <div className="forecast-temp">80°</div>
//               </div>
//               <div className="forecast-time-ctr">
//                 <div className="forecast-time">12 AM</div>
//                 <div className="forecast-temp">80°</div>
//               </div>
//               <div className="forecast-time-ctr">
//                 <div className="forecast-time">12 AM</div>
//                 <div className="forecast-temp">80°</div>
//               </div>
//               <div className="forecast-time-ctr">
//                 <div className="forecast-time">12 AM</div>
//                 <div className="forecast-temp">80°</div>
//               </div>
//               <div className="forecast-time-ctr">
//                 <div className="forecast-time">12 AM</div>
//                 <div className="forecast-temp">80°</div>
//               </div>
//               <div className="forecast-time-ctr">
//                 <div className="forecast-time">12 AM</div>
//                 <div className="forecast-temp">80°</div>
//               </div>
//             </div>
//           </div>

//           <div className="forecast">
//             <div className="forecast-content">
//               <div className="forecast-description-ctr">
//                 <div className="forecast-date">Tuesday 10/27</div>
//                 <img className="forecast-temp-icon" src={dummysun} />
//               </div>
//               <div className="forecast-description">Cloudy</div>

//               <div className="forecast-lh">
//                 <div className="forecast-it-ctr">
//                   <div className="forecast-temp-label">Low</div>
//                   <div className="forecast-mintemp">64°</div>
//                 </div>
//                 <div className="forecast-it-ctr">
//                   <div className="forecast-temp-label">High</div>
//                   <div className="forecast-maxtemp">70°</div>
//                 </div>
//               </div>
//               <div className="forecast-weather-ctr">
//                 <div className="weather-list">
//                   <div className="forecast-weather-desc-ctr">
//                     <img
//                       src={sunrise}
//                       alt="sunrise icon"
//                       className="forecast-sun-icon"
//                     />
//                     <div className="forecast-sunrise">07:02 AM</div>
//                   </div>
//                   <div className="forecast-weather-desc-ctr">
//                     <img
//                       src={sunset}
//                       alt="sunset icon"
//                       className="forecast-sun-icon"
//                     />
//                     <div className="forecast-sunset">09:45 PM</div>
//                   </div>
//                 </div>
//                 <div className="top-wd-ctr">
//                   <div className="wd-ctr">
//                     <div className="wd-img-ctr">
//                       <img
//                         className="forecast-avg-humidity-img"
//                         src={humidity}
//                       />
//                     </div>
//                     <div className="forecast-avg-humidity">54%</div>
//                   </div>
//                   <div className="wd-ctr">
//                     <div className="wd-img-ctr">
//                       <img className="forecast-uv-img" src={uv} />
//                     </div>
//                     <div className="forecast-uv-index">7</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="forecast-times-ctr">
//               <div className="forecast-time-ctr">
//                 <div className="forecast-time">12 AM</div>
//                 <div className="forecast-temp">80°</div>
//               </div>
//               <div className="forecast-time-ctr">
//                 <div className="forecast-time">12 AM</div>
//                 <div className="forecast-temp">80°</div>
//               </div>
//               <div className="forecast-time-ctr">
//                 <div className="forecast-time">12 AM</div>
//                 <div className="forecast-temp">80°</div>
//               </div>
//               <div className="forecast-time-ctr">
//                 <div className="forecast-time">12 AM</div>
//                 <div className="forecast-temp">80°</div>
//               </div>
//               <div className="forecast-time-ctr">
//                 <div className="forecast-time">12 AM</div>
//                 <div className="forecast-temp">80°</div>
//               </div>
//               <div className="forecast-time-ctr">
//                 <div className="forecast-time">12 AM</div>
//                 <div className="forecast-temp">80°</div>
//               </div>
//               <div className="forecast-time-ctr">
//                 <div className="forecast-time">12 AM</div>
//                 <div className="forecast-temp">80°</div>
//               </div>
//               <div className="forecast-time-ctr">
//                 <div className="forecast-time">12 AM</div>
//                 <div className="forecast-temp">80°</div>
//               </div>
//               <div className="forecast-time-ctr">
//                 <div className="forecast-time">12 AM</div>
//                 <div className="forecast-temp">80°</div>
//               </div>
//               <div className="forecast-time-ctr">
//                 <div className="forecast-time">12 AM</div>
//                 <div className="forecast-temp">80°</div>
//               </div>
//               <div className="forecast-time-ctr">
//                 <div className="forecast-time">12 AM</div>
//                 <div className="forecast-temp">80°</div>
//               </div>
//               <div className="forecast-time-ctr">
//                 <div className="forecast-time">12 AM</div>
//                 <div className="forecast-temp">80°</div>
//               </div>
//               <div className="forecast-time-ctr">
//                 <div className="forecast-time">12 AM</div>
//                 <div className="forecast-temp">80°</div>
//               </div>
//               <div className="forecast-time-ctr">
//                 <div className="forecast-time">12 AM</div>
//                 <div className="forecast-temp">80°</div>
//               </div>
//               <div className="forecast-time-ctr">
//                 <div className="forecast-time">12 AM</div>
//                 <div className="forecast-temp">80°</div>
//               </div>
//               <div className="forecast-time-ctr">
//                 <div className="forecast-time">12 AM</div>
//                 <div className="forecast-temp">80°</div>
//               </div>
//               <div className="forecast-time-ctr">
//                 <div className="forecast-time">12 AM</div>
//                 <div className="forecast-temp">80°</div>
//               </div>
//               <div className="forecast-time-ctr">
//                 <div className="forecast-time">12 AM</div>
//                 <div className="forecast-temp">80°</div>
//               </div>
//               <div className="forecast-time-ctr">
//                 <div className="forecast-time">12 AM</div>
//                 <div className="forecast-temp">80°</div>
//               </div>
//               <div className="forecast-time-ctr">
//                 <div className="forecast-time">12 AM</div>
//                 <div className="forecast-temp">80°</div>
//               </div>
//               <div className="forecast-time-ctr">
//                 <div className="forecast-time">12 AM</div>
//                 <div className="forecast-temp">80°</div>
//               </div>
//               <div className="forecast-time-ctr">
//                 <div className="forecast-time">12 AM</div>
//                 <div className="forecast-temp">80°</div>
//               </div>
//               <div className="forecast-time-ctr">
//                 <div className="forecast-time">12 AM</div>
//                 <div className="forecast-temp">80°</div>
//               </div>
//               <div className="forecast-time-ctr">
//                 <div className="forecast-time">12 AM</div>
//                 <div className="forecast-temp">80°</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DummyData;
