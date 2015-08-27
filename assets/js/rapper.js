var makeRapper = function(top, left, timeBetweenSteps, lean) {
  alert(rapper.value, 'created!')
  var rapper = new Rapper(top, left, timeBetweenSteps, lean);
  alert(rapper.value, 'created!')
  return rapper;
}

var Rapper = function(top, left, timeBetweenSteps, lean) {
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="rapper"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;  
  this.lean = lean;
  this.step();
  this.value = 'default';
  this.lyrics = new RapGenius(name)
}

Rapper.prototype.step = function() {  
  this.setPosition(this.top, this.left);

  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Rapper.prototype.dance = function() {
  this.setPosition(this.top, this.left);

  setTimeout(this.step.bind(this), this.timeBetweenSteps);

}

Rapper.prototype.talk = function(timeBetweenSteps) {
  var name = 'eminem'
  lyrics.getLyrics(name);
}


Rapper.prototype.setPosition = function(top, left){
  if(this.top>window.innerHeight) {
    this.top -= 10;
  } else {
    this.top += 10;
  }
  if(this.left>window.innerWidth) {
    this.left -= 10;
  } else {
    this.left += 10
  }
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
  return;
};
