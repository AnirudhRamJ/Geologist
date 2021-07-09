class Hammer {

    constructor(x, y) {
        var options = {
            restitution: 0.4,
            friction: 1
        }

        this.hammer = Bodies.rectangle(x, y, 150, 50, options);
        this.width = 150;
        this.height = 50;

        World.add(world, this.hammer);
    }

    display() {
        var pos = this.hammer.position;
        pos.x = mouseX;
        pos.y = mouseY;

        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill("white");
        strokeWeight(3);
        stroke("white");
        rect(0, 0, this.width, this.height);
        pop();
    }
}