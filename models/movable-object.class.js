class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 3;
    energy = 100;
    lastHit = 0;
    progessCoinBar = 0;
    progessBottleBar = 0;
    offset = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    }

    /**
  * This Function move the Movable Object to the right.
  * 
  */
    moveRight() {
        this.x += this.speed;
    }


    /**
     * This Function move the Movable Object to the left.
     * 
     */
    moveLeft() {
        this.x -= this.speed;
    }

    /**
     * This Function add Gravity for the Character Class.
     * 
     */
    addGravity() {
        setStopableInterval(() => {
            if (this.isAboveGround() || this.isNotAboveGround()) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }


    /**
     * This Function check, if the Movable Object is above the Ground.
     * 
     * @returns {boolean} True or False, if Movable Object is above the Ground.
     */
    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 230;
        }
    }


    /**
     * This Function check, if the Movable Object is not above the Ground.
     * 
     * @returns {number} The Current y-coordinate from the Movable Object.
     */
    isNotAboveGround() {
        return this.speedY > 0 || this.y < 230;
    }

    /**
     * This function checks the collision points with the objects.
     * 
     * @param {string} mo - This is the current Moveable Object that is colliding.
     * @returns {number} The Collision Point where Colliding the Moveable Object.
     */
    isColliding(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&    //   right > left =>   Collision in front
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&     //    top > bottom =>   Collision bottom
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&       //     left > right =>   Collision behind
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;       //      bottom > top =>   Collision top   
    }


    /**
    * This Function Check basically the Collision Points with the Moveable Objects.
    * 
    * @param {string} mo - This is the current Moveable Object that is colliding.
    * @returns {number} The Collision Point where Colliding the Moveable Object.
    */
    isCollected(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&    //   right > left =>   Collision in front
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&     //    top > bottom =>   Collision bottom
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&       //     left > right =>   Collision behind
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;       //      bottom > top =>   Collision top  
    }


    /**
     * This Function is the life energy from the Character.
     */
    hitCharacter() {
        this.energy -= 10;
        if (this.energy < 0) {
            this.energy = 0
        } else {
            this.lastHit = new Date().getTime();
        }
    }


    /**
     * This Function is the life energy from the Endboss .
     * 
     */
    hitEndboss() {
        this.energy -= 20;
        if (this.energy < 0) {
            this.energy = 0
        } else {
            this.lastHit = new Date().getTime();
        }
    }


    /**
     * This Function raise the Coin Progress Bar.
     * 
     */
    raiseProgressbarCoin() {
        this.progessCoinBar += 5;
    }


    /**
    * This Function raise the Bottle Progress Bar.
    * 
    */
    raiseProgressbarBottle() {
        this.progessBottleBar += 10;
    }


    /**
     * This Function reduce the Bottle Progress Bar Bottle.
     * 
     */
    reduceProgressbarBottleThroughThrow() {
        this.progessBottleBar -= 10;
    }


    /**
     * This Function is used to Calculate the timespan, in which the character was hit.
     * 
     * @returns {number} The amount of time the character was hit.
     */
    isHurtCharacter() {
        let timepassed = new Date().getTime() - this.lastHit;  // Difference in milliseconds.
        timepassed = timepassed / 1000;   // Difference in seconds.
        return timepassed < 1;
    }


    /**
     * This Function is used to Calculate the timespan, in which the Endboss was hit.
     * 
     * @returns {number} The amount of time the Endboss was hit.
     */
    isHurtEndboss() {
        let timepassed = new Date().getTime() - this.lastHit;  // Difference in milliseconds.
        timepassed = timepassed / 1000;  // Difference in seconds.
        return timepassed < 0.5;
    }


    /**
     * This Function check if is the Movable Object dead or not.
     * 
     * @returns {number} The energystatus from the Movable Object.
     */
    isDead() {
        return this.energy == 0;
    }


    /**
     * This Function put the energy to 0, for kill the Chicken enemies.
     * 
     * @returns {number} The energystatus from the Movable Object.
     */
    chickenKilled() {
        return this.energy = 0;
    }


    /**
     * This Function Play the Current Images in the Array, with the modulo operator. 
     * 
     * @param {string} images - This is the Current Image in the Json.
     */
    playAnimationMo(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imgCache[path];
        this.currentImage++;
    }





}

