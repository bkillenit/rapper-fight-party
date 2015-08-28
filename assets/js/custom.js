// debugger;

$(document).ready(function(){  
  window.rappers = [];
  window.battle = false;
  window.starRappers = {};

  var removeRapper = function(rapper) {
    var star = starRappers[rapper];
    star.$node.remove();
    starRappers[rapper] = undefined;
  }

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
      starRappers['kanye'] = rapper;
      $(this).text("Remove K West");
      rappers.push(rapper);
    } else {
      removeRapper('kanye');
      $(this).text("Add Kanye West");
    }
  });
  $('#addrickrossButton').on('click', function(event) {
    if( starRappers['rickross'] === undefined ) {
      var rapper = new RickRoss( 
        window.innerHeight*.20,
        window.innerWidth*.43,
        Math.random()*400+200
      )

      starRappers['rickross'] = rapper;
      $(this).text("Remove R Ross");
      rappers.push(rapper);
    } else {
      removeRapper('rickross');
      $(this).text("Add Rick Ross");
    }
  });
  $('#addschoolboyqButton').on('click', function(event) {
    if( starRappers['schoolboy'] === undefined ) {  
      var rapper = new SchoolBoyQ(
      window.innerHeight*.20,
      window.innerWidth*.43,
      Math.random()*400+200
      )
      starRappers['schoolboy'] = rapper;
      $(this).text("Remove Schoolboy");
      rappers.push(rapper);
    } else {
      removeRapper('schoolboy');
      $(this).text("Add Schoolboy Q");
    }
  });

  $('#addsnoopButton').on('click', function(event) {
    if( starRappers['snoop'] === undefined ) {  
      var rapper = new Snoop( 
      window.innerHeight*.20,
      window.innerWidth*.43,
      Math.random()*400+200
      )
      starRappers['snoop'] = rapper;
      $(this).text("Remove Dogg");
      rappers.push(rapper); 
    } else {
      removeRapper('snoop');
      $(this).text("Add Snoop Dogg");
    }
  });
  $('#addtupacButton').on('click', function(event) {
    if( starRappers['tupac'] === undefined ) {  
      var rapper = new TuPac( 
        window.innerHeight*.20,
        window.innerWidth*.43,
        Math.random()*400+200
      )
      starRappers['tupac'] = rapper;
      $(this).text("Remove Tupac");
      rappers.push(rapper);
    } else {
      removeRapper('tupac');
      $(this).text("Add Tupac");
    }
  });
  $('#addeminemButton').on('click', function(event) {
    if( starRappers['eminem'] === undefined ) {  
      var rapper = new Eminem( 
        window.innerHeight*.20,
        window.innerWidth*.43,
        Math.random()*400+200
      )
      starRappers['eminem'] = rapper;
      $(this).text("Remove Eminem");
      rappers.push(rapper);
    } else {
      removeRapper('eminem');
      $(this).text("Add Eminem");
    }
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

