var createSvg = function(elementName){
	return d3.select('.shape')
		.append('svg')
		.attr('width',100)
		.attr('height',100)
		.style('padding','25px')
		.append(elementName);
}

var drawShape = function(shapeProperty){
	let element = createSvg(shapeProperty['element']);
	let attributes = shapeProperty['attr']
	for(eachAttr in attributes)
		element.attr(eachAttr, attributes[eachAttr]);

	let styles = shapeProperty['style'];
	for(eachStyle in styles)
		element.style(eachStyle,styles[eachStyle]);
}

var show = function(){
	let	shapesWithProperties = [{element:'line', attr:{x1:0,y1:100,x2:100,y2:0}, style:{stroke:'grey'}},
								{element:'circle', attr:{cx:50,cy:50,r:50}, style:{stroke:'red'}},
								{element:'rect', attr:{width:100,height:100}, style:{stroke:'blue'}},
								{element:'polygon',attr:{points: "0,100 100,100 50,0"},style:{stroke:'green'}}];

	shapesWithProperties.forEach(function(eachShape){
		drawShape(eachShape);
	});
}
window.onload = show;
