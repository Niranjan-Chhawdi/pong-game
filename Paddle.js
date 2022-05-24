class Paddle {
    constructor(){
        this.xPosition = 0;
        this.yPosition = 0;
        this.width = 10;
        this.height = 70;
    }

    display(){
        rect(this.xPosition,this.yPosition,this.width,this.height)
    }

}