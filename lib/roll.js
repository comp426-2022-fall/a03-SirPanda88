export function roll(sides, dice, rolls) {
	let result = [];
	for (let i = 0; i < rolls; i++) {
		let sum = 0;
		for (let j = 0; j < dice; j++) {
			sum += Math.round(Math.random() * sides);
		}
		result.push(sum);
	}
	return {"sides":sides, "dice":dice, "rolls":rolls, "results":result};
}
