var Rapper = function(top, left, timeBetweenSteps, lean) {
  this.$node = $('<div class="rapper"></div>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;  
  this.lean = lean;
  this.value = 'default';
  this.$node.attr('id', this.value);
  $('.container').append(this.$node);
  this.lyrics = new RapGenius(name);
  

  //actions

  this.move(true);
}

Rapper.prototype.move = function(up) {  
  if(up) {
    this.top-=10;
  } else {
    this.top+=10;
  }
  this.setPosition(this.top, this.left);
  setTimeout(this.move.bind(this,!up), this.timeBetweenSteps);
};

Rapper.prototype.walk = function() {  
  this.setPosition(this.top, this.left);

  setTimeout(this.step.bind(this), this.timeBetweenSteps);
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
