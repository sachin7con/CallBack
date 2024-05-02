// SGN

function OpeningCeremony(callback) {
  setTimeout(() => {
    console.log(“Let the games begin”);
    let score = { red: 0, blue: 0, green: 0, yellow: 0 };
    callback(score, Race100M);
  }, 1000);
  }

function Race100M(score, callback){
  console.log("Race100M begins!");
  setTimeout(() =>{
    const times = {
      red: Math.floor(Math.random() * 6000) + 10000,
      blue: Math.floor(Math.random() * 6000) + 10000,
      green: Math.floor(Math.random() * 6000) + 10000,
      yellow: Math.floor(Math.random() * 6000) + 10000,
    };
    const sortedColors = Object.keys(times).sort((a, b) => times[a] - times[b]);
    score[sortedColors[0]] +=50;
    score[sortedColors[1]] += 25;
    console.log("Updated Scores: ", score);
    callback(score, LongJump);
  }, 3000);

}

function LongJump(score, callback){
  setTimeout(() => {
    const colors = ['red', 'blue', 'green', 'yellow'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    score[randomColor] += 150;
    console.log("Updated scores: ", score);
    callback(score, HighJump);
},2000);
}


function HighJump(score, callback){


  let color = prompt("What colour secured the highest jump -");

  if (color == null || color == "") {
    console.log (”Event was cancelled”);
  }else {
    for(let key in score){
      if(color.toUpperCase() == key.toUpperCase()){
         score[key] += 100;
      }
    }
  }

  console.log("updated scores: ", score);
  callback(score, AwardCeremony);

}

function AwardCeremony(score){
  const sortedColors = Object.keys(score).sort((a, b) => score[b] - score[a]);
  console.log(`${sortedColors[0]} came first with ${score[sortedColors[0]]} points`);
  console.log(`${sortedColors[1]} came second with ${score[sortedColors[1]]} points`);
  console.log(`${sortedColors[2]} came third with ${score[sortedColors[2]]} points`);
}

OpeningCeremony((score, nextEvent) => {
  nextEvent(score, Race100M);
});
