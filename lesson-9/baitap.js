var arr = [prompt("ngày"), prompt("tháng"), prompt("năm")];
var [ngày, tháng, năm] = arr;
console.log(ngày, tháng, năm);

switch (arr[1]) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    if(arr[0]==31) {
        
    }

    break;

  default:
    break;
}
