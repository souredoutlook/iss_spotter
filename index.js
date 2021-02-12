// index.js

const {nextISSTimesForMyLocation} = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  for (const pass of passTimes) {
    let time = new Date(0);
    time.setUTCSeconds(pass.risetime);
    console.log(`Next pass at ${time} for ${pass.duration} seconds!`);
  }
});

