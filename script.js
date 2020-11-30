s = +prompt("Введите Площадь Основы (S) ");
console.log(s);

r = +prompt("Введите Радиус (R) ");
console.log(r);

h = +prompt("Введите Высоту (H) ");
console.log(h);

stars = "**************"

line = "-------------------"

document.write("<p>" + stars + "</p>");

document.write("<p>" + "Обьем цилиндра с площадью основы: " + s + ", радиусом: " + r + " и высотой: " + h + " равен:" + "</p>");

// Формула цилиндра V = пи * R^2 * h

document.write("<p>" + line + "</p>");

document.write("<p>" + "V = " + Math.PI * r *r * h + "</p>");
    
document.write("<p>" + line + "</p>");

document.write("<p>" + "END" + "</p>");