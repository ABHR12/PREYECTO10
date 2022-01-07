var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car1.velocityY=-6;
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car2.velocityY=4;
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car3.velocityY=-5;
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  car4.velocityY=6;
  
 
//Agrega velocidad para hacer que el auto se mueva.

function draw() {
   background("white");
   createEdgeSprites();
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
// Crea la función bounceoff para hacer que el auto rebote en los límites.
car1.bounceOff(boundary1);
car1.bounceOff(boundary2);
car2.bounceOff(boundary1);
car2.bounceOff(boundary2);
car3.bounceOff(boundary1);
car3.bounceOff(boundary2);
car4.bounceOff(boundary1);
car4.bounceOff(boundary2);
sam.bounceOff(boundary1);
sam.bounceOff(boundary2);
//sam.bounceOff(edges);

//Agregar la condición para hacer que Sam se mueva de izquiera a derecha.
if(keyDown("LEFT")){
    sam.x = sam.x - 2;
}
if(keyDown("right")){
    sam.x = sam.x + 2;
}
if(keyDown("up")){
    sam.y = sam.y - 2;
}
if(keyDown("down")){
    sam.y = sam.y + 2;
}
if (car1.isTouching(sam)|| car2.isTouching(sam)||car3.isTouching(sam)||car4.isTouching(sam)){
sam.x=20;
sam.y=190;
life=life+1;
}
if (sam.x>350){
  textSize(20);
  fill("green");
  text("Ganaste",130,330);
}

  
 drawSprites();
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
