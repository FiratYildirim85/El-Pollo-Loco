class DrawableObject {
    x = 30;
    y = 230;
    width = 40;
    height = 70;
    img;
    imgCache = {};
    currentImage = 0;


    /**
     * This Function is used to load the Current Image Path. 
     * 
     * @param {string} path - The Current Image Path. 
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    /**
     * This Function load the Images from the Current Array.
     * 
     * @param {string} arrayImages - The Images from the Current Array. 
     */
    loadImages(arrayImages) {
        arrayImages.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imgCache[path] = img;
        });
    }


    /**
     * This Function is used to draw the Elements on the Canvas, with a try catch command.
     * 
     * @param {string} ctx - The context to draw Elements on the Canvas. 
     */
    draw(ctx) {
        try {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } catch (error) {
            console.warn('Image could not loaded', error);
            console.log(this.img.src);
        }

    }


}

