// debugger;

$(document).ready(function(){
  window.rappers = [];
  $('#addRapperButton').on('click', function(event) {
    var rapper = new Rapper(null,
      160,
      900,
      Math.random()*400+200
    )
  });
  $('#addkanyewestButton').on('click', function(event) {
    var rapper = new KanyeWest(
      160,
      900,
      Math.random()*400+200
    )
    });
  $('#addrickrossButton').on('click', function(event) {
      var rapper = new RickRoss( 
      160,
      900,
      Math.random()*704+302
      )
    });
  $('#addschoolboyqButton').on('click', function(event) {
      var rapper = new SchoolBoyQ(
      160,
      900,
      Math.random()*704+302
      )
    });

  $('#addsnoopButton').on('click', function(event) {
      var rapper = new Snoop( 
      160,
      900,
      Math.random()*704+302
      )
    });
  $('#addtupacButton').on('click', function(event) {
    var rapper = new TuPac( 
      160,
      900,
      Math.random()*400+200
    )
  });
  $('#addeminemButton').on('click', function(event) {
    var rapper = new Eminem( 
      160,
      900,
      Math.random()*400+200
    )
  });
});

