const string = 'у лукоморья клён зелёный; златая цепь на клён том; и днём и ночью кот учёный; всё ходит по цепи кругом; идёт направо — песнь заводит; налево — сказку говорит; там чудеса: там леший бродит; русалка на ветвях сидит; там на неведомых дорожках; следы невиданных зверей; избушка там на курьих ножках; стоит без окон, без дверей; там лес и дол видений полны; там о заре прихлынут волны; на брег песчаный и пустой; и тридцать витязей прекрасных; чредой из вод выходят ясных; и с ними дядька их морской; там королевич мимоходом; пленяет грозного царя; там в облаках перед народом; через леса, через моря; колдун несёт богатыря; в темнице там царевна тужит; а бурый волк ей верно служит; там ступа с бабою ягой; идёт, бредёт сама собой; там царь кащей над златом чахнет; там русский дух… там русью пахнет!; и там я был, и мёд я пил; у моря видел клён зелёный; под ним сидел, и кот учёный; свои мне сказки говорил.';

// Выведите в консоль количество символов в тексте.
console.log(`1. Количество символов в тексте: ${string.length}`);

// Добавьте перенос строки после каждого символа ; и сохраните результат в переменную result.
const result = string.replace(/;\s/g, ';\n');
console.log(`2. Текст с переносами строк: \n${result}`);

// Удалите все пробелы в переменной result и сохраните результат в переменную substring.
const substring = result.replace(/\s/g, '');
console.log(`3. Текст с удалёнными пробелами:\n${substring}`);

// Извлеките подстроку из переменной result, начиная с 28-го символа и до 50-го символа (не включая), из текста и сохраните в переменную newText.
const newText = result.slice(28, 50);
console.log(`4. Извлечение подстроки: ${newText}`);

// Замените в извлеченной подстроке (newText) все вхождения слова клён на дубе и сохраните результат в переменную replacedText.
const replacedText = newText.replace(/клён/g, 'дуб');
console.log(`5. Замена "клён" на "дубе": ${replacedText}`);

// Приведите текст в переменной result к верхнему регистру и сохраните результат в переменную replacedText2.
const replacedText2 = result.toUpperCase();
console.log(`6. Строка result в верхнем регистре:\n${replacedText2}`);

// Замените все вхождения слова клён на дуб в переменной result и сохраните результат в переменную replacedText3.
const replacedText3 = result.replace(/клён/g, 'дуб');
console.log(`7. Замена "клён" на "дуб" (все вхождения) в переменной result:\n${replacedText3}`);

// Найдите индекс первого вхождения слова моря в тексте и сохраните в переменную index.
const index = string.indexOf('моря');
console.log(`8. Индекс первого вхождения "моря": ${index}`);

// Измените только первую букву в переменной replacedText на заглавную без использования регулярных выражений и сохраните результат в переменную modifiedText.
const modifiedText = replacedText[0].toUpperCase() + replacedText.slice(1);
console.log(`9. Строка с измененной первой буквой: ${modifiedText}`);




