var csv = 'name,age,hair\nMark,23,brown\nNick,22,black\nGeno,21,blonde\n';
var rows = csv.split('\n');
var headers = rows[0].split(',');
var data = rows.slice(1);
var sorted = data.sort(function(a, b) {
  return a.split(',')[0] > b.split(',')[0];
});
var sortedCsv = headers.join(',') + '\n' + sorted.join('\n');
console.log(sortedCsv);
