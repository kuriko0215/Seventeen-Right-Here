var mapArray, ctx, currentimgmainX, currentimgmainY;
var imgmountain, imgmain, imgenemy;


$(document).ready(function() {
    mapArray = [0,1,1,0,0,0,3,1,2];
    ctx = $("#myCanvas")[0].getContext("2d");
    imgmain = new Image();
    imgmain.src = "SimpleRPG/images/spriteSheet.png";
    currentimgmainX=0;
    currentimgmainY=0;
    imgmain.onload=function()
   {
        ctx.drawImage(imgmain,0,0,80,130,currentimgmainX,currentimgmainY,200,200);
    };
    
    imgmountain = new Image();
    imgmountain.src = "SimpleRPG/images/material.png";
    imgenemy = new Image();
    imgenemy.src = "SimpleRPG/images/enemy.png";
    imgmountain.onload=function(){
      imgenemy.onload=function(){
         for(var x in mapArray)
        { 
          if(mapArray[x]==1)
          { 
            ctx.drawImage(imgmountain,32,65,32,32,x%3*200,Math.floor(x/3)*200,200,200);
           }else if (mapArray[x]==3)
           {
             ctx.drawImage(imgenemy,7,40,104,135,x%3*200,Math.floor(x/3)*200,200,200);
            }
    
    
        }
    
    };};
});

$(document).keydown(function(event){
    var targetimgmainX,targetimgmainY, targetBlock, cutImagePositionX;
    event.preventDefault();
    
    switch(event.which){
        case 37:
            targetimgmainX = currentimgmainX-200;
            targetimgmainY = currentimgmainY;
            cutImagePositionX = 175;
            break;
        case 38:
            targetimgmainX = currentimgmainX;
            targetimgmainY = currentimgmainY-200;
            cutImagePositionX =355;
            break;
        case 39:
            targetimgmainX = currentimgmainX+200;
            targetimgmainY = currentimgmainY;
            cutImagePositionX = 540;
            break;
        case 40:
            targetimgmainX = currentimgmainX;
            targetimgmainY = currentimgmainY+200;
            cutImagePositionX = 0;
            break;
        default:
            return;
    }
    
    if(targetimgmainX<=400 && targetimgmainX>=0 &&
targetimgmainY<=400 && targetimgmainY>=0)
{
        targetBlock=targetimgmainX/200+targetimgmainY/200*3;
}else
{
            targetBlock=-1;
}
ctx.clearRect(currentimgmainX, currentimgmainY,200,200);
if(targetBlock==-1 || mapArray[targetBlock]==1 || mapArray[targetBlock]==3)
    {
        
    }
     else
    {
        $("#talkbox").text("")
        currentimgmainX=targetimgmainX;
        currentimgmainY=targetimgmainY;
    }

ctx.drawImage(imgmain,cutImagePositionX,0,80,130,currentimgmainX,currentimgmainY,200,200);
switch(mapArray[targetBlock]) 
    {
        case undefined:
            $("#talkbox").text("邊界")
        break;
            case1:
            $("#talkbox").text("有山")
        break;
            case2:
            $("#talkbox").text("抵達終點！")
        break;
            case3:
            $("#talkbox").text("嗨")
            break;
            
            
    }
    
});

