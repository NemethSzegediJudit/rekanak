class HECMAthlon {
	getMaxValue(input) {
		return [input.split(",").reduce((previousValue, currentValue) => {
			if (parseInt(currentValue) > previousValue) {
				return parseInt(currentValue);
			} else {
				return previousValue;
			}
		}, 0)]
	}

	getGreaterThan(input) {
		return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((element) => {
			if (element > parseInt(input)) {
				return true;
			} else {
				return false;
			}
		})
	}

	fizzBuzz(input) {
		const numbers = Array.from(Array(parseInt(input)).keys())

		return numbers
			.map((number) => number + 1)
			.map((k) => {
				let value;
				if (k % 5 === 0 && k % 3 === 0) value = "FizzBuzz";
				else if (k % 3 === 0) value = "Fizz";
				else if (k % 5 === 0) value = "Buzz";
				else value = k;
				return value;
			});
	}
};

function loadEvent() {
	const hECMAthlon = new HECMAthlon()

	const maxValueBtn = document.querySelector(".maxValue__btn");
	const greaterThanBtn = document.querySelector(".greaterThan__btn");
	const fizzBuzzBtn = document.querySelector(".fizzBuzz__btn");

	const maxValueInput = document.querySelector(".maxValue__input");
	const greaterThanInput = document.querySelector(".greaterThan__input");
	const fizzBuzzInput = document.querySelector(".fizzBuzz__input");

	const maxValueRoot = document.querySelector(".maxValue__container");
	const greaterThanRoot = document.querySelector(".greaterThan__container");
	const fizzBuzzRoot = document.querySelector(".fizzBuzz__container");

	maxValueBtn.addEventListener("click", () => {
		const maxValue = getOutput(hECMAthlon.getMaxValue(maxValueInput.value));
		logResult(maxValueRoot, maxValue);
	});
	greaterThanBtn.addEventListener("click", () => {
		const greaterValues = getOutput(
			hECMAthlon.getGreaterThan(greaterThanInput.value)
		);
		logResult(greaterThanRoot, greaterValues);
	});
	fizzBuzzBtn.addEventListener("click", () => {
		const result = getOutput(hECMAthlon.fizzBuzz(fizzBuzzInput.value));
		logResult(fizzBuzzRoot, result);
	});

	function getOutput(output) {
		return ["The function starts", ...output, "The function ends"]
	}

	function logResult(place, values) {
		while (place.firstChild) {
			place.firstChild.remove();
		}
		for (let j = 0; j < values.length; j++) {
			place.insertAdjacentHTML("beforeend", "<div>" + values[j] + "</div>");
		}
	}
}
window.addEventListener("load", loadEvent);
