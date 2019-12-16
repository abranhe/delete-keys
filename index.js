'use strict';

module.exports = (object, keys) => {
	const obj = {...object};

	if (typeof object !== 'object') {
		throw new TypeError(`Expected an object, got ${typeof object}`);
	}

	if (!Array.isArray(keys)) {
		throw new TypeError('Expected an array, got something else.');
	}

	[...keys].forEach(key => delete obj[key]);

	return obj;
};
