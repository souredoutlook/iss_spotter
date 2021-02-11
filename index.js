// index.js

const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes} = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP('108.168.19.76', (error, data) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned coordinates: ', data);
// });

// fetchISSFlyOverTimes({ longitude: -80.4995, latitude: 43.4325 }, (error, data) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned flyover times!: ', data);
// });

