var numSquares=6;
var colors= [];
var squares=document.querySelectorAll(".square");
var pickedColor;
var colorDisplay=document.querySelector("#colorDisplay");
colorDisplay.textContent=pickedColor;
var message=document.querySelector("#message");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var mode=document.querySelectorAll(".mode");


init();

function init()
{
    setUpModeButtons();
    setUpSquares();
     resetting();
}
function setUpModeButtons()
{
    for(var i=0;i<mode.length;i++)
    {
        mode[i].addEventListener("click",function(){
            mode[0].classList.remove("selected");
            mode[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent ==="Easy" ? numSquares=3:numSquares=6;
            resetting();
        });
    }

}

function resetting()
{
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    reset.textContent="New Colors";
    message.textContent="";
    for(var i=0;i<squares.length;i++)
    {
        if(colors[i])
        {   
            squares[i].style.display="block";
            squares[i].style.backgroundColor=colors[i];
        }
        else{
            squares[i].style.display="none";
        }
    }
    h1.style.backgroundColor="steelblue";
}

function setUpSquares()
{
    for(var i=0;i<squares.length;i++)
     {
      squares[i].addEventListener("click",function()
       {
        var clickedColor=this.style.backgroundColor;
        if(clickedColor===pickedColor)
        {
            message.textContent="Correct!!";
            changeColors(clickedColor);
            h1.style.backgroundColor=clickedColor;
            reset.textContent="Play Again?";
        }
        else{
            this.style.backgroundColor="#232323";
            message.textContent="Try Again";
        }
        });
     }
}

reset.addEventListener("click",function()
{
   resetting();
})


function changeColors(color)
{
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.background=color;
    }
}

function pickColor()
{
 var random=Math.floor(Math.random()*colors.length);
 return colors[random];
}

function generateRandomColors(num)
{
    var arr=[];
    for(var i=0;i<num;i++)
    {
      arr.push(randomColor());
        }
        return arr;
}

function randomColor()
{
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb(" + r+", " + g+ ", "+b+")";
}

