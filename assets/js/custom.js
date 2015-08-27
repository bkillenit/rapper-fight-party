// debugger;

$(document).ready(function(){
  window.rappers = [];
  $('.addRapperButton').on('click', function(event) {
    debugger
    var rapper = makeRapper(
      $('.container').height(),
      $('.container').height(),
      Math.random()*1000
    )
  });
  $('.addKanyeButton').on('click', function(event) {
    debugger;
      var rapper = new Rapper( 
        $('body').height(),
        $('body').height(),
        Math.random()*10
      )
    });
  $('.addRickButton').on('click', function(event) {
      var rapper = new Rapper( 
        $('body').height() * Math.random(),
        $('body').height() * Math.random(),
        Math.random()*1000
      )
    });
  $('.addSchoolBButton').on('click', function(event) {

    });
  $('.addSnoopButton').on('click', function(event) {
      var rapper = new Rapper( 
        $('body').height() * Math.random(),
        $('body').height() * Math.random(),
        Math.random()*1000
      )
    });
  $('.addTuPacButton').on('click', function(event) {
    var rapper = new Rapper( 
      $('body').height() * Math.random(),
      $('body').height() * Math.random(),
      Math.random()*1000
    )
  });
});
