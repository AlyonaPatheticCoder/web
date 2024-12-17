document.addEventListener("DOMContentLoaded", () => {
    const addFormButton = document.getElementById("addFormButton");
    const formContainer = document.getElementById("formContainer");

    addFormButton.addEventListener("click", () => {
        // Создаем новый элемент формы
        const form = document.createElement("form");
        form.className = "input-form"; // Добавляем класс для стилей, если нужно

        // Создаем текстовое поле
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Введите текст";
        input.required = true; // Поле обязательно для заполнения

        // Создаем кнопку отправки
        const submitButton = document.createElement("button");
        submitButton.type = "submit";
        submitButton.textContent = "Отправить";

        // Добавляем обработчик события для отправки формы
        form.addEventListener("submit", (event) => {
            event.preventDefault(); // Предотвращаем перезагрузку страницы
            alert("Вы ввели: ${input.value}"); // Показываем введенное значение
            form.reset(); // Очищаем форму после отправки
        });

        // Добавляем элементы в форму
        form.appendChild(input);
        form.appendChild(submitButton);

        // Добавляем форму в контейнер
        formContainer.appendChild(form);
    });
});