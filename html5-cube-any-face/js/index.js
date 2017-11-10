var tl3 = new TimelineMax({paused:true}),
	tl4 = new TimelineMax({paused:true}),
	face1 =$("div#face1"),
	face2 =$("div#face2"),
	face3 =$("div#face3"),
	face4 =$("div#face4"),
	face5 =$("div#face5"),
	face6 =$("div#face6"),
	cubeParent = $("div#cubeParent"),
	
	btn1 = $("button#btn1"),
	btn2 = $("button#btn2"),
	btn3 = $("button#btn3"),
	btn4 = $("button#btn4"),
	btn5 = $("button#btn5"),
	btn6 = $("button#btn6"),
	btn7 = $("button#btn7"),
	btn8 = $("button#btn8");

TweenMax.set($("div.container"), {perspective:500});

TweenLite.set(cubeParent, {transformStyle:"preserve-3d"});

tl3
	.to(cubeParent, .5, {z:'-=75'})
	.to($("div.cubeFace"), .5, {autoAlpha:0.5})
	.to(face1, .5, {rotationY:90, x:-75})
	.to(face2, .5, {rotationX:90, y:-75}, '1')
	.to(face3, .5, {rotationX:90, y:75}, '1')
	.to(face4, .5, {rotationY:90, x:75}, '1')
	.to(face5, .5, {z:75}, '1')
	.to(face6, .5, {z:-75}, '1');

tl4
	.to(cubeParent, 5, {rotationY:720})
	.to(cubeParent, 2, {rotationX:360}, "-=2.5")
	.to(cubeParent, 1, {rotationY:-360, rotationX:360});

btn7.click(function()
{
	tl3.play(0);
	console.log(cubeParent[0]._gsTransform);
});

btn8.click(function()
{
	tl4.play(0);
});

btn1.click(function()//front face
{
	if(cubeParent[0]._gsTransform.rotationX != 0)
	{
		TweenMax.to(cubeParent, 1, {rotationX:'0_short'});
		TweenMax.to(cubeParent, 1, {rotationY:'0_short'});
		TweenMax.to(cubeParent, 1, {rotation:'0_short'});
	}
	else
	{
		TweenMax.to(cubeParent, 1, {rotationY:'0_short'});
		TweenMax.to(cubeParent, 1, {rotation:'0_short'});
	}
});

btn2.click(function()//right face
{
	if(cubeParent[0]._gsTransform.rotationX != 0)
	{
		TweenMax.to(cubeParent, 1, {rotationX:'0_short'});
		TweenMax.to(cubeParent, 1, {rotationY:'90_short'});
		TweenMax.to(cubeParent, 1, {rotation:'0_short'});
	}
	else
	{
		TweenMax.to(cubeParent, 1, {rotationY:'90_short'});
		TweenMax.to(cubeParent, 1, {rotation:'0_short'});
	}
});

btn3.click(function()//back face
{
	if(cubeParent[0]._gsTransform.rotationX != 0)
	{
		TweenMax.to(cubeParent, 1, {rotationX:'0_short'});
		TweenMax.to(cubeParent, 1, {rotationY:'180_short'});
		TweenMax.to(cubeParent, 1, {rotation:'0_short'});
	}
	else
	{
		TweenMax.to(cubeParent, 1, {rotationY:'180_short'});
		TweenMax.to(cubeParent, 1, {rotation:'0_short'});
	}
});

btn4.click(function()//left face
{
	if(cubeParent[0]._gsTransform.rotationX != 0)
	{
		TweenMax.to(cubeParent, 1, {rotationX:'0_short'});
		TweenMax.to(cubeParent, 1, {rotationY:'270_short'});
		TweenMax.to(cubeParent, 1, {rotation:'0_short'});
	}
	else
	{
		TweenMax.to(cubeParent, 1, {rotationY:'270_short'});
		TweenMax.to(cubeParent, 1, {rotation:'0_short'});
	}
});

btn5.click(function()//top face
{
	if(cubeParent[0]._gsTransform.rotationY != 0)
	{
		TweenMax.to(cubeParent, 1, {rotationY:'0_short'});
		TweenMax.to(cubeParent, 1, {rotationX:'-90_short'});
		TweenMax.to(cubeParent, 1, {rotation:'0_short'});
	}
	else
	{
		TweenMax.to(cubeParent, 1, {rotationX:'-90_short'});
		TweenMax.to(cubeParent, 1, {rotation:'0_short'});
	}
});

btn6.click(function()//bottom face
{
	if(cubeParent[0]._gsTransform.rotationY != 0)
	{
		TweenMax.to(cubeParent, 1, {rotationY:'0_short'});
		TweenMax.to(cubeParent, 1, {rotationX:'90_short'});
		TweenMax.to(cubeParent, 1, {rotation:'180_short'});
	}
	else
	{
		TweenMax.to(cubeParent, 1, {rotationX:'90_short'});
		TweenMax.to(cubeParent, 1, {rotation:'180_short'});
	}
});