const inputTextarea = document.getElementById('input-text');

const outputTextarea = document.getElementById('output-text');

const translateBtn = document.getElementById('translate-btn');

translateBtn.addEventListener('click', () => {

  const inputText = inputTextarea.value.trim();

  if (inputText === '') {

    return;

  }

  const outputText = inputText

    .split(' ')

    .map((word) => {

      if (word.length > 1) {

        const firstLetter = word.charAt(0);

        const restOfWord = word.slice(1);

        return `${firstLetter}ස්කො${restOfWord}`;

      }

      return word;

    })

    .join(' ');

  outputTextarea.value = outputText;

});

