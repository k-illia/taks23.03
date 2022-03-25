// js-скрипте создаем две функции compress и uncompress, которые будут выполнять следующее:
//
//     Пример:
//         Вызов:
//             compress("a");
// Результат:
//     Результат: “a”
// Вызов:
//     compress("aaa");
// Результат:
//     Результат: “a3”
// Вызов:
//     compress("aabbb");
// Результат:
//     Результат: “a2b3”
// Вызов:
//     compress("aaabcc");
// Результат:
//     Результат: “a3b1c2”
// Вызов:
//     uncompress("a");
// Результат:
//     Результат: “a”
// Вызов:
//     uncompress("a5");
// Результат:
//     Результат: “aaaaa”
// Вызов:
//     uncompress("a2b3");
// Результат:
//     Результат: “aabbb”
// Вызов:
//     uncompress("a2b1c3");
// Результат:
//     Результат: “aabccc”




    function compress(uncompr) {
    let net = uncompr.split('');
    let sun = {};
    let uncom = '';

    net.forEach(function(letter) {
        if (letter in sun) {
            sun[letter]++;
        } else {
            sun[letter] = 1;
        }
    });
    for (letter in sun) {
        //присваивание со сложением
        uncom += letter + sun[letter];
    }
    console.log(uncom);

}
compress('aaabbj');

function uncompress(compressStr) {
    let sun = "";

    for(let i = 0; i < compressStr.length; i += 2) {
        sun += compressStr[i].repeat(+compressStr[i + 1]);
    }

    console.log(sun);
    return sun;
}
uncompress("a2b3")

// создаем функцию countVowelLetters, которая будет возвращать количество русских гласных букв в строке,
//     которая будет являться аргументом функции. Не использовать switch, вложенные циклы, регулярные
//     выражения или 9-10 if для проверки… Можно использовать массивы или объекты для решения задачи,
//         найти оптимальное и эффективное из доступных решение.
//
//     Пример:
//     Вызов:
//         countVowelLetters (“Пришла зима, запахло…”);
//     Результат:
//         Количество гласных = 7
//
//     Вызов:
//         countVowelLetters (“Ghbdtn, z r dfv bp Hjccbb”);
//     Результат:
//         Количество гласных = 0
//
//     Вызов:
//         countVowelLetters (“длинношеее”);
//     Результат:
//         Количество гласных = 5



function countVowelLetters (arr) {
    let net = /[aeiouаиеёоуыэюя]/gi
    let found = arr.match(net)
    if (found > 0) {
        console.log('Количество гласных' + ' = ' + found.length)
    } else {
        console.log('0')
    }
}
countVowelLetters ('sd')

//     Рекурсия:
//         Напишите программу на JavaScript, чтобы получить первые n чисел Фибоначчи.
//
//         Примечание: Последовательность Фибоначчи - это последовательность
//     чисел: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,... Каждое последующее число является суммой двух предыдущих.


let elements = []
function fibonachi(n) {
    return n <= 1 ? n : fibonachi(n - 1) + fibonachi(n - 2)
}
for (let i = 0; i < 10; i++) {
    elements.push(fibonachi(i))
}
console.log(elements)

//Сделал по топорному, n писать в условие