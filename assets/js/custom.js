// debugger;

$(document).ready(function(){
  window.rappers = [];
  $('#addRapperButton').on('click', function(event) {
    var rapper = new Rapper(
      window.innerHeight/2,
      window.innerWidth/2,
      Math.random()*1000
    )
  });
  $('#addkanyewestButton').on('click', function(event) {
      var rapper = new KanyeWest( 
      )
    });
  $('#addrickrossButton').on('click', function(event) {
      var rapper = new RickRoss( 
      )
    });
  $('#addschoolboyqButton').on('click', function(event) {
      var rapper = new SchoolBoyQ(
      )
    });

  $('#addsnoopButton').on('click', function(event) {
      var rapper = new Snoop( 
      )
    });
  $('#addtupacButton').on('click', function(event) {
    var rapper = new TuPac( 
    )
  });
  $('#addeminemButton').on('click', function(event) {
    var rapper = new Eminem( 
    )
  });
});

