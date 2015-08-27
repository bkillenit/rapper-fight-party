// debugger;

$(document).ready(function(){
  window.rappers = [];
  $('#addRapperButton').on('click', function(event) {
    var rapper = new Rapper(
      window.innerHeight*0.4+Math.random()*40,
      window.innerWidth*0.45+Math.random()*100,
      Math.random()*1000
    )
  });
  $('#addkanyewestButton').on('click', function(event) {
    var rapper = new KanyeWest(
      window.innerHeight*0.4+Math.random()*40,
      window.innerWidth*0.45+Math.random()*100,
      Math.random()*1000
    )
    });
  $('#addrickrossButton').on('click', function(event) {
      var rapper = new RickRoss( 
      window.innerHeight*0.4+Math.random()*40,
      window.innerWidth*0.45+Math.random()*100,
      Math.random()*1000
      )
    });
  $('#addschoolboyqButton').on('click', function(event) {
      var rapper = new SchoolBoyQ(
      window.innerHeight*0.4+Math.random()*40,
      window.innerWidth*0.45+Math.random()*100,
      Math.random()*1000
      )
    });
  $('#addsnoopButton').on('click', function(event) {
      var rapper = new Snoop( 
      window.innerHeight*0.4+Math.random()*40,
      window.innerWidth*0.45+Math.random()*100,
      Math.random()*1000
      )
    });
  $('#addtupacButton').on('click', function(event) {
    var rapper = new TuPac( 
      window.innerHeight*0.4+Math.random()*40,
      window.innerWidth*0.45+Math.random()*100,
      Math.random()*1000
    )
  });
  $('#addeminemButton').on('click', function(event) {
    var rapper = new Eminem( 
      window.innerHeight*0.4+Math.random()*40,
      window.innerWidth*0.45+Math.random()*100,
      Math.random()*1000
    )
  });
});

