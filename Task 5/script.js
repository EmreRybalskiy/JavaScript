function addOneForAll(...args) {
	let addTo = args.map(function(item) {
		return ++item;
	});
	console.log(addTo)
};

addOneForAll(1,2,3,4,5);

