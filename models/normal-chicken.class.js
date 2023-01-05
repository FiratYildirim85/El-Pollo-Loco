
class NormalChicken extends MovableObject {
    x = 120;
    y = 340;
    width = 60;
    height = 100;
    imagesWalkingChickenNormal = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];
    imagesDeadChickenNormal = [
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png',
    ];
    intervalIds = [];


    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.imagesWalkingChickenNormal);
        this.x = 500 + Math.random() * 4000;
        this.speed = 0.20 + Math.random() * 1;
        this.animateChickenNormal();
    }


    /**
     * This Function Animate the Normal Chicken Class.
     */
    animateChickenNormal() {
        let intervalNormalChicken = setInterval(() => {
            this.moveLeft();
        }, 1000 / 25);
        setStopableInterval(() => {
            if (!this.isDead()) {
                this.playAnimationMo(this.imagesWalkingChickenNormal);
            } else {
                this.loadImage(this.imagesDeadChickenNormal);
                clearInterval(intervalNormalChicken);
            }
        }, 100);
    }
}

