// debugger;

$(document).ready(function(){  
  window.rappers = [];
  window.battle = false;
  window.starRappers = {};

  $('#addRapperButton').on('click', function(event) {
    var rapper = new Rapper(null,
      window.innerHeight*.20,
      window.innerWidth*.43,
      Math.random()*400+200
    )
    rappers.push(rapper);
  });
  $('#addkanyewestButton').on('click', function(event) {
    if( starRappers['kanye'] === undefined ) {
      var rapper = new KanyeWest(
        window.innerHeight*.20,
        window.innerWidth*.43,
        Math.random()*400+200
      )
      starRappers['kanye'] = true;
      $(this).text("Remove K West");
      rappers.push(rapper);
    } else {
      $(this).text("Add West");
    }
  });
  $('#addrickrossButton').on('click', function(event) {
      var rapper = new RickRoss( 
      window.innerHeight*.20,
      window.innerWidth*.43,
      Math.random()*400+200
      )
    rappers.push(rapper);
  });
  $('#addschoolboyqButton').on('click', function(event) {
      var rapper = new SchoolBoyQ(
      window.innerHeight*.20,
      window.innerWidth*.43,
      Math.random()*400+200
      )
    rappers.push(rapper);
  });

  $('#addsnoopButton').on('click', function(event) {
      var rapper = new Snoop( 
      window.innerHeight*.20,
      window.innerWidth*.43,
      Math.random()*400+200
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
    if(battle) {

      $('#lineup').siblings().each(function() {
        if($(this).attr('id') !== 'lineup') $(this).css('visibility', 'hidden');
      });

      $('#lineup').text('Stop Battle!!!');


      for(var i=0; i<rappers.length; i++) {
        rappers[i].battle = true;
        if(rappers[i].left<window.innerWidth*.43) {
          rappers[i].lean = window.innerWidth*(0.5-rappers[i].depthfactor/.65*0.3);
        } else {
          rappers[i].lean = window.innerWidth*(rappers[i].depthfactor/.65*0.3+0.5);
        }
      }
    } else {
      $('#lineup').siblings().each(function() {
        if($(this).attr('id') !== 'lineup') $(this).css('visibility', 'visible');
      });

      $('#lineup').text('Rap Battle!!!');

      // run what we want
      for(var i=0; i<rappers.length; i++) {
        rappers[i].battle = false;
        rappers[i].walk();
      }
    }
  });
});

