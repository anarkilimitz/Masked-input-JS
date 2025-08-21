const input = document.getElementById('phone');

        input.addEventListener('input', function (e) {
            let value = this.value.replace(/\D/g, ''); // Убираем все, кроме цифр
            let formattedValue = '+7 ('; // Начинаем с кода России

            if (value.length > 1) {
                formattedValue += value.slice(1, 4); // Добавляем код области
            }

            if (value.length >= 4) {
                formattedValue += ') ' + value.slice(4, 7); // Добавляем первую часть номера
            }

            if (value.length >= 7) {
                formattedValue += '-' + value.slice(7, 9); // Добавляем вторую часть номера
            }

            if (value.length >= 9) {
                formattedValue += '-' + value.slice(9, 11); // Добавляем третью часть номера
            }

            this.value = formattedValue; // Обновляем значение input
        });
