function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
    let flag = true;
    var min, max;
    min = prompt('Введіть мінімум випадкового числа',0);
    max = prompt ('Введіть максимум випадкового числа', 100);

    document.write('<table width="100%" border="1">');
    for (i = 1; i < 10; i++) {
      document.writeln("<tr>");
      for (j = 1; j < 10; j++) {
        if (flag) {
          document.write("<td class = \"cell\">" + randomInteger(min,max) + "<\/td>");
          flag = false;
        } else {
          document.write("<td>" + randomInteger(min,max) + "<\/td>");
          flag = true;
        }
      }
    }
    document.write("<\/table> ");
  