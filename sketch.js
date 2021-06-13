var gameState = "START"
var title, titleImage, background, backgroundImage
var play, playImage
var background2, background2Image
var levelsImage, levels, level1Image, level1
var level2Image, level2,level3Image, level3
var astronaut, astronautImage, astronaut_running, astronaut_jumping



function preload()
{
  titleImage = loadImage("img/title.png")
  backgroundImage = loadImage("img/background3.jpg")
  playImage = loadImage("img/play.png")
  background2Image = loadImage("img/background5.jpg")
  levelsImage = loadImage("img/levelsLogo.png")
  level1Image = loadImage("img/level1.png")
  level2Image = loadImage("img/level2.png")
  level3Image = loadImage("img/level3.png")
  astronautImage = loadImage("img/standing.gif")
  astronaut_running = loadImage("img/running.gif")
  astronaut_jumping = loadImage("img/jumping.gif")
}


function setup()
{
  createCanvas(windowWidth,windowHeight)

  title = createSprite(windowWidth/2,windowHeight/4)
  title.visible = false

  play = createSprite(windowWidth/2,windowHeight/2+150)
  play.visible= false

  background2 = createSprite(400,200)
  background2.addImage("background2",background2Image)
  background2.visible = false

  levels = createSprite(windowWidth/2,windowHeight/4-90)
  levels.addImage("levels",levelsImage)
  levels.visible = false

  level1 = createSprite(windowWidth/2,windowHeight/3+100)
  level1.addImage("level1", level1Image)
  level1.visible = false

  level2 = createSprite(windowWidth/2,windowHeight/3+200)
  level2.addImage("level2", level2Image)
  level2.visible = false

  level3 = createSprite(windowWidth/2,windowHeight/3+300)
  level3.addImage("level3", level3Image)
  level3.visible = false

  
}

function draw()
{

   if(gameState === "START")
   {
        background(backgroundImage)
        title.addImage("title",titleImage)
        title.scale = 0.6
        title.visible = true
        play.addImage("playbutton",playImage)
        play.scale = 0.45
        play.visible = true

        if(mousePressedOver(play))
        {
          gameState = "LEVELSELECTOR"
          title.visible = false
          play.visible = false

        }

        if(gameState==="LEVELSELECTOR")
        {
          levels.visible = true
          levels.scale = 0.75
          level1.visible = true
          level1.scale = 0.6
          level2.visible = true
          level2.scale = 0.6
          level3.visible = true
          level3.scale = 0.6
          console.log(gameState)
          
          if(mousePressedOver(level1))
          {
             levels.visible = false
             level1.visible = false
             level2.visible = false
             level3.visible = false
             gameState = "LEVEL1"
          }
        }

        if (gameState === "LEVEL1")
        {
           background(background2Image)     
  
        }

   }
   drawSprites()
}