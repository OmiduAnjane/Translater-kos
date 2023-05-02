const inputText = document.getElementById('input-text');

const outputText = document.getElementById('output-text');

const translateBtn = document.getElementById('translate-btn');

translateBtn.addEventListener('click', () => {

	const input = inputText.value.trim();	if (input) {

		const output = input

			.split(' ')

			.map(word => {

				if (word.length > 1) {

					return word.charAt(0) + 'ස්කො' + word.slice(2);

				} else {

					return word;

				}

			})

			.join(' ');

		outputText.value = output;

	}

});
