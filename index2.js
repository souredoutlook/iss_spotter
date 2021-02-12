// index.js

const {nextISSTimesForMyLocation} = require('./iss_promised');

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    let time = new Date(0);
    time.setUTCSeconds(pass.risetime);
    console.log(`Next pass at ${time} for ${pass.duration} seconds!`)
  }
};

nextISSTimesForMyLocation().then((passTimes)=>{
  printPassTimes(passTimes);
})
  .catch((error)=> {
    console.log("It didn't work: ", error.message)
  });
