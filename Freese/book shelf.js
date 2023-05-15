var bookShapeObject;

var bookDecorRectObject;

var bookDecorEllipseObject;


function setup()
{
    createCanvas(1200,800);

    //Shelf
    ShelfObject = new bookShapes(0,500,1500,200,75,30,0);
    ShelfObject2 = new bookShapes(0,700,1500,100,50,20,0);

    //Picture Frame With Instructions
    FrameObject = new bookShapes(600,50,400,400,10,10,10);
    FrameObject2 = new bookShapes(625,75,350,350,500,500,210);
    
    //book shapes
    DraculaObject = new bookShapes(100,50,100,600,100,0,0,);
    MetaObject = new bookShapes(200,75,75,575,0,50,0);
    TurnObject = new bookShapes(275,50,75,600,0,0,50);
    FrankObject = new bookShapes(350,75,100,575,100,50,0);
    DorianObject = new bookShapes(450,100,50,550,50,0,70);
    YellowObject = new bookShapes(500,75,50,575,150,100,0);

    //book decorations

    DraculaDecorObject = new bookDecorationRect(100,25,100,25,'silver');
    DraculaDecorObject2 = new bookDecorationRect(100,150,100,15,'black');
    DraculaDecorObject3 = new bookDecorationRect(100,550,100,15,'black');

    MetaDecorObject2 = new bookDecorationRect(200,50,100,25, 'silver');
    ////Bug Parts
    MetaDecorObject = new DecorationEllipse(235,150,30,50,'black');
    MetaDecorObject3 = new DecorationsLine(235,125,210,100,'black');
    MetaDecorObject4 = new DecorationsLine(235,125,260,100,'black');
    MetaDecorObject5 = new DecorationsLine(210,150,260,150,'black');
    MetaDecorObject6 = new DecorationsLine(210,125,260,175,'black');
    MetaDecorObject7 = new DecorationsLine(210,175,260,125,'black');

    TurnDecorObject = new bookDecorationRect(275,25,75,25,'silver');
    TurnDecorObject2 = new bookDecorationRect(275,200,100,300,'black');

    FrankDecorObject = new bookDecorationRect(350,50,100,25,'silver');
    ////Eye Parts
    FrankDecorObject2 = new DecorationEllipse(400,125,75,50,'white');
    FrankDecorObject3 = new DecorationEllipse(400,125,25,50,'black');
    ////Bands
    FrankDecorObject4 = new bookDecorationRect(350,200,100,25,'brown');
    FrankDecorObject5 = new bookDecorationRect(350,500,100,25,'brown');

    DorianDecorObject = new bookDecorationRect(450,75,50,25,'silver');

    YellowDecorObject = new bookDecorationRect(500,50,50,25,'silver');
    YellowDecorObject2 = new bookDecorationRect(500,125,50,475,'yellow');

    //Candle Using files made
    CandleObject = new bookDecorationRect(650,500,75,125,'white');
    CandleFlameObject = new DecorationEllipse(680,450,25,75,'yellow');
    CandleWickObject = new DecorationsLine(680,475,680,525,'black');

    

    
}

function draw()
{
    background(50);
    strokeWeight(5);

    //Frame
    FrameObject.display();
    FrameObject2.display();
    
    FrameText();

    //Shelf
    ShelfObject.display();
    ShelfObject2.display();

    //Dracula
    
    DraculaObject.display();

    ////Drac Link
    openBook(DraculaObject);

    ////Drac Decor
    DraculaDecorObject.display();
    DraculaDecorObject2.display();
    DraculaDecorObject3.display();

    BookTitleDrac();
    
    //Metemorphasis
    MetaObject.display();

    ////Meta Link
    openBookMeta(MetaObject);
    BookTitleMeta();

    ////Bug Parts
    MetaDecorObject.display();
    MetaDecorObject2.display();
    MetaDecorObject3.display();
    MetaDecorObject4.display();
    MetaDecorObject5.display();
    MetaDecorObject6.display();
    MetaDecorObject7.display();

    //Turn of the Screw

    TurnObject.display();

    ////Turn Link
    openBookTurn(TurnObject);
    BookTitleTurn();

    ////Turn Decor
    TurnDecorObject.display();
    TurnDecorObject2.display();

    //Frankenstein
    FrankObject.display();

    ////Frank Link
    openBookFrank(FrankObject);
    BookTitleFrank();

    ////Frank Decor
    FrankDecorObject.display();
    FrankDecorObject2.display();
    FrankDecorObject3.display();
    FrankDecorObject4.display();
    FrankDecorObject5.display();

    //Dorian Grey
    DorianObject.display();

    ////Dorian Link
    openBookDorian(DorianObject);
    

    ////Dorian Decor
    DorianDecorObject.display();
    BookTitleDorian();

    //Yellow Wallpaper
    YellowObject.display();

    ////Yellow Link
    openBookYellow(YellowObject);

    ////Yellow Decor
    YellowDecorObject.display();
    YellowDecorObject2.display();
    BookTitleYellow();


    //Candle
    CandleObject.display();
    CandleFlameObject.display();
    CandleWickObject.display();
    
    

    
    
}

//Picture Frame
function FrameText()
{
    fill('black');
    textSize(30);
    textFont('Cursive');
    text('Welcome to the Library!', 650,125);

    textSize(20);
    text('If you like spooky stories then our little ', 640,175);
    text('shelf will be perfect for you!  If you find',640, 225);
    text('a book you are interested in, just click on',640,275);
    text('it with your mouse cursor to check it out!',640,325);

    textSize(15);
    text('Brought to you by the Forg Family Foundation,', 650,375);
    text('building a better pond together since 1999!',650,400);
}

//Titles
function BookTitleDrac()
{
    textSize(25);
    fill('white');
    text('Dracula',105,100 );
    textSize(15);
    text('Bram Stoker',110,600);
}

function BookTitleMeta()
{
    fill('black');
    textFont('sans serif')
    textSize(25);
    text('M',220,200);
    text('E',240,225);
    text('T',220,250);
    text('A',240,275);
    text('M',220,300);
    text('O',240,325);
    text('R',220,350);
    text('P',240,375);
    text('H',220,400);
    text('O',240,425);
    text('S',220,450);
    text('I',240,475);
    text('S',220,500);

    text('Kafka', 205,625);
}

function BookTitleTurn()
{
    fill('silver');
    textSize(15)
    textFont('script');
    text('The Turn',285,100);
    text('of',305,120);
    text('The Screw',280,140);

    text('Henry',290,600);
    text('James',290,620);
}

function BookTitleFrank()
{
    fill('silver');
    textSize(15);
    textFont('helvetica');
    text('Frankenstein', 355,250);
    text('Mary Shelley',355,485);
}

function BookTitleDorian()
{
    textSize(10);
    textFont('cursive');
    text('The', 465,200);
    text('Picture', 455,225);
    text('of',465,250);
    text('Dorian',455,275);
    text('Gray',460,300);
    text('Wilde',460,600);
}

function BookTitleYellow()
{
    fill('brown');
    textFont('clarendon');
    text('The',505,150);
    text('Yellow',505,175);
    text('Wallpaper',505,200);
    textFont('cursive');
    textSize(25);
    text('C.',510,450);
    text('P.',510,500);
    text('G.',510,550);
}

//Links



function openBook(myObject)
{
    if(mouseIsPressed)
    {
        if(mouseX > myObject.x && mouseX < myObject.x + myObject.w && 
            mouseY > myObject.y && mouseY < myObject.y + myObject.h)
        {
         window.open("https://www.gutenberg.org/cache/epub/345/pg345-images.html", "_blank");    
        }
    }
}

function openBookMeta(myObject)
{
    if(mouseIsPressed)
    {
        if(mouseX > myObject.x && mouseX < myObject.x + myObject.w && 
            mouseY > myObject.y && mouseY < myObject.y + myObject.h)
        {
         window.open("https://www.gutenberg.org/cache/epub/5200/pg5200-images.html", "_blank");   
        }
    }
}

function openBookTurn(myObject)
{
    if(mouseIsPressed)
    {
        if(mouseX > myObject.x && mouseX < myObject.x + myObject.w && 
            mouseY > myObject.y && mouseY < myObject.y + myObject.h)
        {
         window.open("https://www.gutenberg.org/cache/epub/209/pg209-images.html", "_blank");
        }
    }
}

function openBookFrank(myObject)
{
    if(mouseIsPressed)
    {
        if(mouseX > myObject.x && mouseX < myObject.x + myObject.w && 
            mouseY > myObject.y && mouseY < myObject.y + myObject.h)
        {
         window.open("https://www.gutenberg.org/cache/epub/84/pg84-images.html ", "_blank");
        }
    }
}

function openBookDorian(myObject)
{
    if(mouseIsPressed)
    {
        if(mouseX > myObject.x && mouseX < myObject.x + myObject.w && 
            mouseY > myObject.y && mouseY < myObject.y + myObject.h)
        { 
         window.open("https://www.gutenberg.org/cache/epub/174/pg174-images.html", "_blank"); 
        }
    }
}

function openBookYellow(myObject)
{
    if(mouseIsPressed)
    {
        if(mouseX > myObject.x && mouseX < myObject.x + myObject.w && 
            mouseY > myObject.y && mouseY < myObject.y + myObject.h)
        {
         window.open("https://www.gutenberg.org/cache/epub/1952/pg1952-images.html", "_blank");   
        }
    }
}



