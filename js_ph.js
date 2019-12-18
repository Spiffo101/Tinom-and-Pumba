var menu = document.querySelector("canvas");
var m = menu.getContext("2d");
var im = new Image();
im.src = 'background_1.png';

//menu.m.height = 180;
//menu.m.width = 320;

rectangele = {
    height: 32,
    width: 32,
    jumping: true,
    x: 144,
    x_velocity: 0,
    y: 0,
    y_velocity: 0
};
controller = {
    left: false,
    right: false,
    up: false,
    keyListener: function(event) {
        var key_state = (event.type = "keydown") ? true : false;
        switch (event.keyCode) {
            case 37:
                controller.left = key_state;
                break;
            case 38:
                controller.up = key_state;
                break;
            case 39:
                controller.right = key_state;
                break;
        }
    }
};

function name() {
    // m.drawImage(im, 0, 0);
    var pattern = ma.createPattern(img, "repeat");
    ma.fillStyle = pattern;
    ma.fillRect(0, 0, 1280, 720);
    ma.strokeRect(0, 0, 1280, 720);
    window.requestAnimationFrame(loop);

}

loop = function() {

    if (controller.up && rectangele.jumping == false) {
        rectangele.y_velocity -= 20;
        rectangele.jumping = false;
        controller.up = false;
    }
    if (controller.left) {
        rectangele.x_velocity -= 0.5;
        controller.left = false;

    }
    if (controller.right) {
        rectangele.x_velocity += 0.5;
        controller.right = false;
    }

    rectangele.y_velocity += 1.5; // опускает героя на землю
    rectangele.x += rectangele.x_velocity;
    rectangele.y += rectangele.y_velocity;
    rectangele.x_velocity *= 0.9; // добавление плавности
    rectangele.y_velocity *= 0.9; // добавление плавности

    if (rectangele.y > 316 - 16 - 32) {
        rectangele.jumping = false;
        rectangele.y = 316 - 16 - 32;
        rectangele.y_velocity = 0;
    }
    if (rectangele.x < -32) {
        rectangele.x = 1280;
    } else if (rectangele.x > 1280) {
        rectangele.x = -32;

    }



    m.fillStyle = "#fff";
    m.fillRect(0, 0, 1280, 720);
    // m.drawImage(im, 1280, 720);

    m.fillStyle = "#822842";
    m.beginPath();
    m.rect(rectangele.x, rectangele.y, rectangele.width, rectangele.height)
    m.fill();

    m.strokeStyle = "#581845";
    m.lineWidth = 4;
    m.beginPath();
    m.moveTo(0, 300);
    m.lineTo(720, 300);
    m.stroke();
    window.requestAnimationFrame(loop);
}

window.addEventListener('keyup', controller.keyListener);
window.addEventListener('keydown', controller.keyListener);
window.requestAnimationFrame(name);
window.requestAnimationFrame(loop);