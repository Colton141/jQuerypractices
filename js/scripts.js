var user = prompt("enter a sentence");
 alert(user);

 var newUser = function(string){
   return string.charAt(0).toUpperCase();
 };

 var newUser2 = function(string){
   return string.charAt(string.length-1).toUpperCase();
 }

 var divide = function(string) {
   string = parseInt(user.length) /2;
   newString = Math.round(string);
   return newString;
 };

// alert(newUser(user) + newUser2(user));

// alert(newUser2(user) + newUser(user));

// alert(user + newUser(user) + newUser2(user));

var thisString = function(string) {
  alert(newUser(string) + newUser2(string)),
  alert(newUser2(string) + newUser(string)),
  string2 = string + newUser(string) + newUser2(string)
  alert(string2),
  addstring = divide(user)
  alert(addstring)
  newstring2 = user.charAt(addstring)
  string4 = newstring2 + string2
  alert(string4)
  finalString = string4.split("").reverse().join("")
  alert(finalString)


}


alert(thisString(user));






// var n = user.length;
// alert(n)
//
// var t = parseInt(n);
//
// var d = function(length){
//   return  length / 2
// }
//
// var i = user.charAt(d(t));
//
// var math = Math.round(i)
// alert(i);
//
//
// alert(math + user + newUser(user) + newUser2(user));
// alert(reverseString(newPhrase));

// var newString = function(str, string){
//   alert(str + string)
// }

// var reverseString = function(str){
//   return str.split("").reverse().join("");
// };

// alert(newUser(user) + newUser2(user));
//
// var reverse1 = newUser2(user) + newUser(user);
//
// alert(reverse1);
