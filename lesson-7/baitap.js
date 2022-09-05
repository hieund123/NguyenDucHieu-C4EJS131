// bai ng dung dien day du ho ten, ho ten rieng le
// let hovaten = prompt("ten cua ban la", "hovaten");
// let n = hovaten.length;

// let m = 0;

// console.log(hovaten);

// let ho = hovaten.slice(0, 6);

// console.log(ho);

//bat nguoi dung nhap vao so guay bat nguoi dung in ra gio phut giay
// gio=giay/3600
// giay%3600=so phut tinh bang ggiay
// so phut tinh bang giay / 60 =so phut
// so giay = so phut tinh bang giay % 60

let nhapvao = parseInt(prompt("nhap vao"));
let sogio = console.log(Math.floor(nhapvao / 3600));

let sophuttinhbanggiay = nhapvao % 3600;
let sophut = console.log(Math.floor(sophuttinhbanggiay / 60));

let sogiay = sophuttinhbanggiay % 60;

console.log(sogio);
console.log(sophut);
console.log(sogiay);
