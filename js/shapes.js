


//classical
function Rectangle(left, top, width, height, stylesMap) {
    Shape.call(this, left, top, width, height, stylesMap);

    this.renderShape = function(canvasCtx) {
        canvasCtx.fillRect(this.left, this.top, this.width, this.height);
        canvasCtx.stroke();
    }
}



Rectangle.prototype = new Shape();

registerClassicalShape('Rectangle', Rectangle);


//prototypal
function createRectangle2(left, top, width, height, stylesMap) {
    var Rectangle2 = createShape(left, top, width, height, stylesMap);
    console.log(Rectangle2);

    Rectangle2.renderShape = function(canvasCtx) {
        canvasCtx.fillRect(this.left, this.top, this.width, this.height);
        canvasCtx.stroke();
    }

    return Rectangle2;
}


registerPrototypalShape('Rectangle2', createRectangle2);

//Creating circle class
function Circle(left, top, width, height, stylesMap) {
    Shape.call(this, left, top, width, height, stylesMap);

    console.log(this);

    this.renderShape = function(canvasCtx) {
        canvasCtx.beginPath();
        canvasCtx.arc(this.left + this.width, this.top + this.height/2,
                this.width/2, 0, 2 * Math.PI);
        canvasCtx.fill();
    }
}



Circle.prototype = new Shape();

registerClassicalShape('Circle', Circle);


//My own shape
function MyOwnClass(left, top, width, height, stylesMap) {
    Shape.call(this, left, top, width, height, stylesMap);

    console.log(this);

    this.renderShape = function(canvasCtx) {
        canvasCtx.fillStyle='rgb(0,0,0)';
        canvasCtx.beginPath();
        canvasCtx.arc(this.left + 12, this.top - this.height/2,
                this.width/4 + 29, 0, 2 * Math.PI);
        canvasCtx.fill();

        canvasCtx.fillStyle='rgb(225,500,80)';
        canvasCtx.beginPath();
        canvasCtx.arc(this.left - this.width/2 - 2, this.top - this.height/2,
                this.width/2, 0, 2 * Math.PI);
        canvasCtx.fill();

        canvasCtx.beginPath();
        canvasCtx.arc(this.left + 32, this.top - this.height/2,
                this.width/2, 0, 2 * Math.PI);
        canvasCtx.fill();


    }
}



MyOwnClass.prototype = new Shape();

registerClassicalShape('MyOwnClass', MyOwnClass);