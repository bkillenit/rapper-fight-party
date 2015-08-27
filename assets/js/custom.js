// debugger;

$(document).ready(function(){
  window.rappers = [];
  window.battle = false;
  $('#addRapperButton').on('click', function(event) {
    var rapper = new Rapper(null,
      window.innerHeight*.20,
      window.innerWidth*.43,
      Math.random()*400+200
    )
    rappers.push(rapper);
  });
  $('#addkanyewestButton').on('click', function(event) {
    var rapper = new KanyeWest(
      window.innerHeight*.20,
      window.innerWidth*.43,
      Math.random()*400+200
    )
    rappers.push(rapper);
  });
  $('#addrickrossButton').on('click', function(event) {
      var rapper = new RickRoss( 
      window.innerHeight*.20,
      window.innerWidth*.43,
      Math.random()*704+302
      )
    rappers.push(rapper);
  });
  $('#addschoolboyqButton').on('click', function(event) {
      var rapper = new SchoolBoyQ(
      window.innerHeight*.20,
      window.innerWidth*.43,
      Math.random()*704+302
      )
    rappers.push(rapper);
  });

  $('#addsnoopButton').on('click', function(event) {
      var rapper = new Snoop( 
      window.innerHeight*.20,
      window.innerWidth*.43,
      Math.random()*704+302
      )
    rappers.push(rapper);
  });
  $('#addtupacButton').on('click', function(event) {
    var rapper = new TuPac( 
      window.innerHeight*.20,
      window.innerWidth*.43,
      Math.random()*400+200
    )
    rappers.push(rapper);
  });
  $('#addeminemButton').on('click', function(event) {
    var rapper = new Eminem( 
      window.innerHeight*.20,
      window.innerWidth*.43,
      Math.random()*400+200
    )
    rappers.push(rapper);
  });
  $('#lineup').on('click', function(event) {  
    battle = !battle;
    console.log('is this running?')
    for(var i=0; i<rappers.length; i++) {
      if(rappers[i].left<window.innerWidth/2) {
        console.log(i, 'left')
        rappers[i].lean = window.innerWidth*(0.3-rappers[i].depthfactor/.65*0.1);
        // rappers[i].walk(window.innerHeight*rappers[i].depth, left);
      } else {  
        console.log(i, 'right')
        rappers[i].lean = window.innerWidth*(rappers[i].depthfactor/.65*0.1+0.7);
        // rappers[i].walk(window.innerHeight*rappers[i].depth, left);
      }
    }
  });
});

