var Rapper = function(value, top, left, timeBetweenSteps, lean) {
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
  //actions
  this.walk();
    
  if(!window.battle) {
    window.battle = false;
  }

  // this.jump()
};

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
  if(Math.random()<this.multipl) {
    if(this.left>window.innerWidth*.3){
      this.left -= 30;
    }
  } else {
    if(this.left<window.innerWidth*.7){
      this.left += 30;
    }
  }
  this.$node.animate(this.setPosition(this.top, this.left));
}

Rapper.prototype.walk = function() {
  // console.log(top, left, this.top, this.left)
  if(!window.battle) {
    this.wander();
      setTimeout(this.walk.bind(this), this.timeBetweenSteps);
  } else {
    //line up to the right, if current horizontal position (left) > lean
    if(this.top<this.depth || this.left>this.lean) {
      if(this.top<this.depth) {
        this.top+=30;
      }
      if(this.left>this.lean) {
        this.left-=30;
      }
    }
    //line up to the left, if lean < half of screen        
    else if(this.top<this.depth || this.left<this.lean) {
      if(this.top<this.depth) {
        this.top+=30;
      }
      if(this.left>this.lean) {
        this.left-=30;
      }
      this.$node.animate(this.setPosition(this.top, this.left));
      setTimeout(this.walk.bind(this), this.timeBetweenSteps);
    } else { 
      this.jump();
  }}
};

Rapper.prototype.dance = function() {
  this.setPosition(this.top, this.left);

  setTimeout(this.step.bind(this), this.timeBetweenSteps);

}

Rapper.prototype.talk = function(timeBetweenSteps) {
  var name = this.value;
  //alert(this.lyrics.getLyric(name));
}


Rapper.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  return styleSettings;
};
