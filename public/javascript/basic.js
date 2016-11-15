var createSvgAccordingToShape = function(divID, elementName){
	return d3.select('#'+divID)
		.append('svg')
		.attr('width',100)
		.attr('height',100)
		.style('padding','5px')
		.append(elementName);
}

var drawLine = function(){
	createSvgAccordingToShape('line','line').attr('x1',0)
		.attr('y1',100)
		.attr('x2',100)
		.attr('y2',0);
}

var drawCircle = function(){
	createSvgAccordingToShape('circle','circle').attr('cx',50)
		.attr('cy',50)
		.attr('r',50);
}

var drawSquare = function(){
	createSvgAccordingToShape('square','rect').attr('width',100)
		.attr('height',100);
}

var drawTriangle = function(){
	createSvgAccordingToShape('triangle','polygon').attr('points','0,100 100,100 50,0')
}
var show = function(){
	drawLine();
	drawCircle();
	drawSquare();
	drawTriangle();
}
window.onload = show;
