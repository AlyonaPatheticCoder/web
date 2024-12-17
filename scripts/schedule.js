
document.addEventListener("DOMContentLoaded", () => {
    let dayValues = [];


    document.getElementById('clearResults').addEventListener('click', function() {
        dayValues = []; // Очищаем массив значений
        localStorage.clear(); // Очищаем LocalStorage
        update(); // Обновляем таблицу
        document.getElementById('clearResults').style.display = 'none';
    });
    document.getElementById('createButtons').addEventListener('click', function () {
        const daysCount = parseInt(document.getElementById('daysCount').value);
        dayValues = Array.from({length: daysCount}, () => []);
        const buttonContainer = document.getElementById('buttonContainer');
        buttonContainer.innerHTML = '';

        for (let i = 0; i < daysCount; i++) {
            const column = document.createElement('div');
            column.className = 'column';
            const header = document.createElement('h3');
            header.textContent = `День ${i + 1}`;
            column.appendChild(header);
            const input = document.createElement('input');
            input.type = 'text';
            input.placeholder = 'Введите текст';
            input.maxLength = 20;
            const plusButton = document.createElement('button');
            plusButton.className = 'schedule_button';
            plusButton.textContent = `+`;
            column.appendChild(input);
            column.appendChild(plusButton);
            buttonContainer.appendChild(column);
            plusButton.addEventListener('click', function () {
                const inputValue = input.value.trim();
                if (inputValue) {
                    addValueToDay(i, inputValue);
                }
            });
        }
    });

    function addValueToDay(i, value) {
        if (dayValues[i].length < 10) {
            dayValues[i].push(value);
            update();
            save(i + 1, dayValues[i]);
        }
    }

    function update() {
        const tableBody = document.querySelector('#resultTable tbody');
        tableBody.innerHTML = '';
        const maxRows = Math.max(...dayValues.map(dayValues => dayValues.length));
        const headerRow = document.createElement('tr');
        headerRow.innerHTML = `<th></th>`;
        dayValues.forEach((_, index) => {
            headerRow.innerHTML += `<th>День ${index + 1}</th>`;
            // tableBody.appendChild(headerRow);
        });
        tableBody.appendChild(headerRow);
        for (let i = 0; i < maxRows; i++) {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `<td>${i + 1}</td>`;
            dayValues.forEach(dayValues => {
                newRow.innerHTML += `<td>${dayValues[i] || ''}</td>`;
            });

            tableBody.appendChild(newRow);
        }

        document.getElementById('resultContainer').style.display = 'block';
        document.getElementById('clearResults').style.display = 'block';
    }
    function save(day, values) {
        const x = `day-${day}-values`;
        const daysCount = parseInt(document.getElementById('daysCount').value);
        localStorage.setItem(x, JSON.stringify(values));
        localStorage.setItem('daysCount', daysCount);
    }
    window.onload = function () {
        const daysCount = JSON.parse(localStorage.getItem('daysCount'));
        for (let i = 0; i < daysCount; i++) { 0
            const x = `day-${i + 1}-values`;
            const values = JSON.parse(localStorage.getItem(x)) || [];
            dayValues[i] = values;
        }
        update();
    };
})