const dateput1 = document.querySelector("#dates1");
const dateput2 = document.querySelector("#dates2");
const dateput3 = document.querySelector("#dates3");
const dateput4 = document.querySelector("#dates4");
const dateput5 = document.querySelector("#dates5");

//   04/20/2024 13:45:30

function updateTime1() {
const month1 = (new Date().getMonth() + 1 < 10 ? '0' : '') + (new Date().getMonth() + 1); 
const date1 = new Date().getDate();
const year1 = new Date().getFullYear();
const hour1 = new Date().getHours();
const mint1 = new Date().getMinutes();
const sec1 = new Date().getSeconds();
const result1 = `${month1}/${date1}/${year1} ${hour1}:${mint1}:${sec1}`;
dateput1.innerHTML = result1;
}
setInterval(updateTime1, 1000);

//   Thu 20/4/2024 13.45

const day2 = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
const day3 = new Date().getDay()
const date2 = new Date().getDate();
const month2 = new Date().getMonth() + 1;
const year2 = new Date().getFullYear();
const hour2 = new Date().getHours();
const mint2 = new Date().getMinutes();
const result2 = `${day2[day3]} ${date2}/${month2}/${year2} ${hour2}.${mint2}`;
dateput2.innerHTML = result2;

//   2024-04-20 3:45 Thursday

const year3 = new Date().getFullYear();
const month3 = (new Date().getMonth() + 1 < 10 ? '0' : '') + (new Date().getMonth() + 1); 
const date3 = new Date().getDate();
const hour3 = new Date().getHours();
const mint3 = new Date().getMinutes();
const day4 = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const day5 = new Date().getDay();
const result3 = `${year3}-${month3}-${date3} ${hour3}:${mint3} ${day4[day5]}`;
dateput3.innerHTML = result3;

//   April 20th,2024 01.45.30 PM
function updateTime4() {
const month4 = ["Jan","Feb","Mar","Apr","May","June","Jul","Aug","Sep","Oct","Nov","Dec"];
const month5 = new Date().getMonth();
const date4 = new Date().getDate();
const year4 = new Date().getFullYear();
const hour4 = new Date().getHours();
const mint4 = new Date().getMinutes();
const sec4 = new Date().getSeconds();
const ampm4 = hour4 >= 12 ? 'PM' : 'AM';
const formattedHour4 = hour4 % 12 === 0 ? 12 : hour4 % 12;
const result4 = `${month4[month5]} ${date4}th,${year4} ${(formattedHour4 < 10 ? '0' : '') + formattedHour4}.${(mint4 < 10 ? '0' : '') + mint4}.${(sec4 < 10 ? '0' : '') + sec4} ${ampm4}`;
dateput4.innerHTML = result4;
}
setInterval(updateTime4, 1000);

//   20 April 2024 at 01:45 PM

function updateTime5() {
const date5 = new Date().getDate();
const month6 = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const month7 = new Date().getMonth();
const year5 = new Date().getFullYear();
const hour5 = new Date().getHours();
const mint5 = new Date().getMinutes();
const sec5 = new Date().getSeconds();
const ampm5 = hour5 >= 12 ? 'PM' : 'AM';
const formattedHour5 = hour5 % 12 === 0 ? 12 : hour5 % 12;
const result5 = `${date5} ${month6[month7]} ${year5} at ${year5} ${(formattedHour5 < 10 ? '0' : '') + formattedHour5}:${(mint5 < 10 ? '0' : '') + mint5}:${(sec5 < 10 ? '0' : '') + sec5} ${ampm5}`;
dateput5.innerHTML = result5;
}
setInterval(updateTime5, 1000);
