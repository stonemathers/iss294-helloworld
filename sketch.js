var letters = [];
var locX = [];
var locY = [];
var sizes= [];
var startSize = 100;

function setup(){
    createCanvas(1200, 700);
    noCursor();
}

function draw(){
    //Draw background
    background("black");

    //Draw white cursor circle
    fill("white");
    ellipse(mouseX, mouseY, 30, 30);

    //Draw letters
    for(i = 0; i < letters.length; i++){
        size = sizes[i];
        if(size > 0){
            yoffset = (noise(locX[i], locY[i]) - 0.46) * 100;
            xoffset = -10;
            x = locX[i];
            y = locY[i];
            locX.splice(i, 1, x + xoffset);
            locY.splice(i, 1, y + yoffset);

            fill(random()*255, random()*255, random()*255);
            textSize(size);
            text(letters[i], locX[i], locY[i]);
            sizes.splice(i, 1, size - 1);
        }else{
            letters.splice(i, 1);
            locX.splice(i, 1);
            locY.splice(i, 1);
            sizes.splice(i, 1);
            i -= 1;
        }
    }

}

function keyPressed(){
    letters.push(key);
    locX.push(mouseX);
    locY.push(mouseY);
    sizes.push(startSize);
}