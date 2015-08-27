// debugger;

$(document).ready(function(){  
  window.rappers = [];
  $('#addRapperButton').on('click', function(event) {
    var rapper = new Rapper(null,
      160,
      900,
      Math.random()*400+200
    )
    rappers.push(rapper);
  });
  $('#addkanyewestButton').on('click', function(event) {
    var rapper = new KanyeWest(
      160,
      900,
      Math.random()*400+200
    )
    rappers.push(rapper);
  });
  $('#addrickrossButton').on('click', function(event) {
      var rapper = new RickRoss( 
      160,
      900,
      Math.random()*704+302
      )
    rappers.push(rapper);
  });
  $('#addschoolboyqButton').on('click', function(event) {
      var rapper = new SchoolBoyQ(
      160,
      900,
      Math.random()*704+302
      )
    rappers.push(rapper);
  });

  $('#addsnoopButton').on('click', function(event) {
      var rapper = new Snoop( 
      160,
      900,
      Math.random()*704+302
      )
    rappers.push(rapper);
  });
  $('#addtupacButton').on('click', function(event) {
    var rapper = new TuPac( 
      160,
      900,
      Math.random()*400+200
    )
    rappers.push(rapper);
  });
  $('#addeminemButton').on('click', function(event) {
    var rapper = new Eminem( 
      160,
      900,
      Math.random()*400+200
    )
    rappers.push(rapper);
  });
  $('#lineup').on('click', function(event) {
    console.log('is this running?')
    for(var i=0; i<rappers.length; i++) {
      if(rappers[i].left<window.innerWidth/2) {
        var left = window.innerWidth*(0.3-rappers[i].depth/.65*0.1);
        rappers[i].walk(window.innerHeight*rappers[i].depth, left);
      } else {  
        var left = window.innerWidth*(rappers[i].depth/.65*0.1+0.7);
        rappers[i].walk(window.innerHeight*rappers[i].depth, left);
      }
    }
  });
});

