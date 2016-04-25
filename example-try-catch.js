

function doWork () {
	throw new Error('Unable to do work');
}

try {
	var todo = doWork();
	console.log(todo);
} catch (e) {
	console.log(e.message);
} finally {
	console.log('Program completed!!!');
}
console.log('Try catch ended.');