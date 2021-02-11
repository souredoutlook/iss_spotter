const request = require('request');

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const fetchMyIP = function(callback) {
  // use request to fetch IP address from JSON API
  request('https://api.ipify.org/?format=json', (error, response, body) => {
    if (error) callback(error, null);
    if (response.statusCode !== 200) {
      const msg = `Status code ${response.statusCode} when fetching IP Response : ${body}`;
      callback(Error(msg), null);
    }
    const ip = JSON.parse(body);
    callback(null, ip);
  });
};

const fetchCoordsByIP = function(ip, callback) {
  request(`https://freegeoip.app/json/${ip}`, (error, response, body) =>{
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status code ${response.statusCode} when fetching GEOIP Response : ${body}`;
      callback(Error(msg), null);
      return;
    } else {
      const {longitude, latitude} = JSON.parse(body);
      callback(null, {longitude, latitude});
    }
  });
};

/**
 * Makes a single API request to retrieve upcoming ISS fly over times the for the given lat/lng coordinates.
 * Input:
 *   - An object with keys `latitude` and `longitude`
 *   - A callback (to pass back an error or the array of resulting data)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The fly over times as an array of objects (null if error). Example:
 *     [ { risetime: 134564234, duration: 600 }, ... ]
 */
const fetchISSFlyOverTimes = function(coords, callback) {
  request(`http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`,(error, response, body)=>{
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status code ${response.statusCode} when fetching GEOIP Response : ${body}`;
      callback(Error(msg), null);
      return;
    } else {
      const data = JSON.parse(body);
      callback(null, data.response);
    }
  });
};

module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes};
