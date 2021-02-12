// iss_promised.js
const request = require('request-promise-native');

const fetchMyIP = function() {
  return request('https://api.ipify.org/?format=json');
};

const fetchCoordsByIP = function(body) {
  return request(`https://freegeoip.app/json/${JSON.parse(body).ip}`)
}

const fetchISSFlyoverTimes = function(body) {
  const {latitude, longitude} = JSON.parse(body);
  return request(`http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`)
}

const nextISSTimesForMyLocation = function(){
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyoverTimes)
    .then((data)=>{
      const {response} = JSON.parse(data);
      return response;
    });
};

module.exports = {nextISSTimesForMyLocation};
