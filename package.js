class Package {
    constructor(x,y,width,height){
      var Package_options = {
          isStatic : true,
          restitution : 0.3,
          friction : 0.5,
          density : 1.2
          }

        this.ground = Bodies.rectangle(x,y,width,height,Package_options);
        this.width = width;
        this.height = height;
      }
     display(){
        var pos = this.ground.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
     }
    }

