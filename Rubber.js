class Rubber {
    constructor(x, y) {
        var options = {
            'restitution': 1.5

        }

        this.body = Bodies.circle(x, y, 50, options);
        this.r = 80;

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        stroke("red");
        fill("red");
        ellipseMode(CENTER);
        ellipse(0, 0, this.r, this.r);
        pop();
    }
}