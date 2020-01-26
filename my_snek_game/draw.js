const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 10;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

var snek;

(function setup() {
    snek = new Snek();
    frut = new Frut();
    frut.pickLocation();


    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        frut.draw();
        snek.update();
        snek.draw();

        if (snek.eat(frut)) {
            frut.pickLocation();
        }
        snek.checkCollision();
        document.querySelector('.score').innerText = snek.total;

    }, 250);
}());
window.addEventListener('keydown', ((evt) => {
    //console.log(evt);
    const direction = evt.key.replace('Arrow', '');
    //console.log(direction)
    snek.changeDirection(direction);
}))