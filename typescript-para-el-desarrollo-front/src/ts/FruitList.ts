

    const fruits:string[] = ['🍎', '🍌', '🍓', '🍇', '🍊', '🍒', '🍍', '🍉', '🍑', '🍐', '🍋', '🍎', '🍌', '🍓', '🍇', '🍊', '🍒', '🍍', '🍉', '🍑', '🍐', '🍋', '🍎', '🍌', '🍓', '🍇', '🍊', '🍒', '🍍', '🍉', '🍑', '🍐', '🍋', '🍎', '🍌', '🍓', '🍇', '🍊', '🍒', '🍍', '🍉', '🍑', '🍐', '🍋', '🍎', '🍌', '🍓', '🍇', '🍊' ]

    const $frutis = document.getElementById('fruitList') as HTMLUListElement;

    fruits.forEach((fruit) => {
        const $li = document.createElement('li');
        $li.textContent = fruit;
        $frutis.appendChild($li);
    });