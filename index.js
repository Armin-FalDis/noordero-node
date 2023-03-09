import async from 'async';

function ping(delay) {
	return new Promise((resolve, reject) => {
		if (delay > 3) {
			return reject(new Error('Delay exceeds 3 seconds'));
		}

		if (!delay) {
			return resolve('Pong');
		}

		setTimeout(() => {
			resolve('Pong');
		}, delay * 1000);
	});
}

function printArray(array) {
	console.log(array);
}

function squaredArray(array) {
	return array.map((e) => Math.pow(e, 2));
}

printArray(squaredArray([1, 2, 3]));

async.forEach(
	[1, 2, 3, undefined, 100],
	async (delay) => {
		console.log(await ping(delay));
	},
	(err) => {
		console.error(err.message);
	},
);
