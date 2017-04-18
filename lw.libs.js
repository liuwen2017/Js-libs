/**
	用于通过原型链继承

	param child 子元素
	param  parent 父元素
**/
function inherits(child,parent){
	var F = function(){};
	F.prototype = parent.prototype;
	child.prototype= new F();
	child.prototype.constructor = child;
}