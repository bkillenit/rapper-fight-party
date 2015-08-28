var Rapper = function(value, top, left, timeBetweenSteps, lean) {
  window.battle = false;

  this.$node = $('<div class="rapper"></div>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  this.lean = lean;
  this.value = value || 'default';
  this.lyrics = new RapGenius(name);
  this.talk();
  this.$node.attr('id', this.value);
  $('.container').append(this.$node);  
  this.$node.css(this.setPosition(this.top, this.left));

  this.depthfactor = Math.random() * .25 + .4;
  this.depth = this.depthfactor * window.innerHeight;
  this.multipl = .5;
  this.$node.css( "zIndex", Math.floor(this.depth));
  //actions
  this.walk();
    
  // this.jump()
};

Rapper.prototype.resize = function() {
  this.$node.height(this.top/3 + 80);
  this.$node.width(this.top/3 + 10);
}

Rapper.prototype.tilt = function() {
  var limit = 30;
  var amountAwayFromCenter = this.left - window.innerWidth/2;
  var degrees = (amountAwayFromCenter/(window.innerWidth/2)) * limit*4;

  if(degrees < 0) {
    degrees = 180 + degrees;
  } else {
    degrees = -1*degrees;
  }

  this.$node.css('transform', 'rotateY(' + degrees +'deg)');
}

Rapper.prototype.jump = function(up) {
  if(up) {
    this.top-=25;
  } else {
    this.top+=25;
  }
  this.$node.animate(this.setPosition(this.top, this.left));
  setTimeout(this.jump.bind(this,!up), this.timeBetweenSteps);
}

Rapper.prototype.wander = function() {
  if(this.top<this.depth) {
    this.top += 30;
  }

  var random = Math.random();
  var direction;
  if(random<this.multipl) {
    if(this.left>window.innerWidth*.3){
      this.left -= 30;
    }
  } else {
    if(this.left<window.innerWidth*.7){
      this.left += 30;
    }
  }

  this.resize();
  this.$node.animate(this.setPosition(this.top, this.left));
}

Rapper.prototype.walk = function() {
  if(!window.battle) {
    this.wander();
      setTimeout(this.walk.bind(this), this.timeBetweenSteps);
  } else {
    //line up to the left, if lean < half of screen
    if(this.lean < window.innerWidth*.5){
      if(this.top<this.depth || this.left>this.lean) {
        if(this.top<this.depth) {
          this.top+=25;
          this.top+=15;
        }
        if(this.left>this.lean) {
          this.left-=25;
        }

        this.resize();
        this.tilt();
        this.$node.animate(this.setPosition(this.top, this.left));
        setTimeout(this.walk.bind(this), this.timeBetweenSteps/20);
      } else {
        this.jump();
      }
    }
    //line up to the right, if lean > half of screen
    else {        
      if(this.top<this.depth || this.left<this.lean) {
        if(this.top<this.depth) {
          this.top+=25;
        }
        if(this.left<this.lean) {
          this.left+=25;
        }

        this.resize();
        this.tilt();
        this.$node.animate(this.setPosition(this.top, this.left));
        setTimeout(this.walk.bind(this), this.timeBetweenSteps/20);
      } else { 
        this.jump();
      }
    }
  }
};

Rapper.prototype.dance = function() {
  this.setPosition(this.top, this.left);

  setTimeout(this.step.bind(this), this.timeBetweenSteps);

}

Rapper.prototype.displayBubble = function(lyric) {
  if( $('.bubble')[0] ){
    $('.bubble').text("\"" + lyric + "\"");
  } else {
    $('.topbar').after("<div class='bubble'></div>");
    //this.$node.append("<div class='bubble'></div>");
    var $bubble = $('.container').find('.bubble');
    $bubble.text("\"" + lyric + "\"");
  }
}

Rapper.prototype.talk = function(timeBetweenSteps) {
  this.displayBubble(this.lyrics.getLyric(this.value))
}


Rapper.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  return styleSettings;
};
