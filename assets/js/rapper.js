var Rapper = function(value, top, left, timeBetweenSteps, lean) {
  this.$node = $('<div class="rapper"></div>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  this.lean = lean;
  this.value = value || 'default';
  $('.container').append(this.$node);
  this.lyrics = new RapGenius(name);
  this.$node.attr('id', this.value);

  this.depth = Math.random() * .25 + .4;
  this.multipl = .5;
  //actions
  this.walk();
  //this.jump(true);
}

Rapper.prototype.jump = function(up) {
  if(up) {
    this.top-=10;
  } else {
    this.top+=10;
  }
  this.setPosition(this.top, this.left);
  setTimeout(this.jump.bind(this,!up), this.timeBetweenSteps);
};

Rapper.prototype.walk = function(top, left) {
  if(!top || !left) {
    if(this.top<(window.innerHeight*this.depth)) {
      console.log('is this always running?',this.top, window.innerWidth)
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
    this.setPosition(this.top, this.left);
    setTimeout(this.walk.bind(this), this.timeBetweenSteps);
  }
};

Rapper.prototype.dance = function() {
  this.setPosition(this.top, this.left);

  setTimeout(this.step.bind(this), this.timeBetweenSteps);

}

Rapper.prototype.talk = function(timeBetweenSteps) {
  var name = 'eminem'
  return this.lyrics.getLyric(name);
}


Rapper.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
  return;
};
