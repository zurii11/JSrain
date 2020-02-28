let rain = []

function setup() {
    canvas = createCanvas(1000, 500);
    
    for (let i = 0; i < 500; i++) {
        rain[i] = new rainDrop();
    }
}

function draw() {
    background(40, 21, 21);

    for (let i = 0; i < rain.length; i++) {
        rain[i].show();
        rain[i].fall();
    }
}

function rainDrop() {
    this.x = random(width);
    this.y = random(-100, -200);
    this.yspeed = random(10, 20);
    this.xspeed = 5;
    this.gravity = random(0, .5);
    this.len = random(10, 30);
    this.thick = random(1, 5);

    this.show = function() {
        stroke(98, 168, 239);
        strokeWeight(this.thick);
        line(this.x, this.y, this.x, this.y + this.len);
    }

    this.fall = function() {
        this.y += this.yspeed;
        this.yspeed = this.yspeed + this.gravity;

        this.x -= this.xspeed;

        if (this.y > height) {
            this.y = random(-100, -200)
            this.x = random(width+50);        }
    }
}