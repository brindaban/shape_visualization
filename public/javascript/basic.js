var giveTrianglePointsValue = function(base,height){
	return '0,'+height+' '+base+','+height+' '+(base/2)+',0';
}
var createTranslate = function(x,y){
	return 'translate('+x+','+y+')';
}
var createProperty = function(elementType, attributes, className){
	return {element:elementType, attr:attributes, className:className};
}
var createSvg = function(){
	return d3.select('.shape')
		.append('svg')
		.attr('width',1000)
		.attr('height',1000)
		.style('padding','10px');
}
var drawShape = function(shapeProperty, position){
	let attributes = shapeProperty['attr']
	let element = d3.select('svg').append('g')
		.attr('transform',createTranslate(150*position,0))
		.classed(shapeProperty['className'],'true');

	let shape = element.append(shapeProperty['element']);
	for(eachAttr in attributes)
		shape.attr(eachAttr, attributes[eachAttr]);
}
var show = function(){
	createSvg();
	let shapesWithProperties = [
			createProperty('line', {x1:0,y1:100,x2:100,y2:0}, 'line'),
			createProperty('circle', {cx:50,cy:50,r:50}, 'circle'),
			createProperty('rect',{width:100,height:100}, 'square'),
			createProperty('polygon',{points:giveTrianglePointsValue(100,100)}, 'triangle')
		];
	shapesWithProperties.forEach(function(eachShape,index){
		drawShape(eachShape,index);
	});
}
window.onload = show;