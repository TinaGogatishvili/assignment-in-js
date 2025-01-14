/* მოგესალმებით მეგობრებო ეს არის დავალება ნომერი 2. დავალების ყველა ეტაპი აღწერილია კომენტარის სახით
 * 1) შედარება
 * 3) If პირობები
 * 4) ლოგიკური ოპერატორები
 * 5) Switch 
 */



// <------- შედარება ---------#### //

const num1 = 0;
const boolean1 = false;
const num2 = 5;
const emptyString = "";
const boolean2 = false;
const text = "I'm Text";
const text2 = "0";

// ჩამოწერეთ ცვლადები რომელი არის true რომელი false
// ჩამოწერეთ ზეპირად!
// მაგ. [1, 2, 3, 4]

// >>> კოდი დაწერეთ აქ 

console.log( num1,!!num1);
console.log( boolean1,!!boolean1);
console.log( num2,!!num2);
console.log( emptyString,!!emptyString);
console.log( boolean2,!!boolean2);
console.log( text,!!text);
console.log( text2,!!text2);


const isFalse = [1, 2, 4, 5];
const isTrue = [3, 6, 7];


/*-------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------*/



// შეცვალეთ ერთი ასო რომ მიიღოთ ჭეშმარიტი დებულება
// მოკლედ ახსენით მუშაობის პრინციპი თუ რატომ იმოქმედა

console.log("abc" > "ab");
console.log(2 !== "004");



// _____________თიკოს კომენტარი  _____________
// სტრინგების შედარება ლექსიკონის პრინციპით მიდის,  a და b დაემთხვა შემდეგ გადავიდა c-ზე და მიხვდა რომ მარცხენა მნიშვნელობა უფრო დიდია
//მეორე შემთხვევაზე ვიფიქრე... და ბოლოს მოვიფიქრე მხოლოდ ერთი სიმბოლოს შეცვლით როგორ უნდა მიმეღწია ეს რომ გამხდარიყო true



// <------- ლოგიკური ოპერატორები ---------#### //

// შეამოწმეთ სრულ წლოვნებაზე და თუ მეტი ან ტოლია
// 18 წელზე შესთავაზეთ სასმელი

// >>> კოდი დაწერეთ აქ 

let yourAge = prompt("Please enter your age");
let userAge = Number(yourAge);

if(userAge >= 18){
  alert ("Do you want to drink wine? Or maybe beer?");
}else{
  alert("Hey kiddy! You're too small"); 
}


/*-------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------*/


// მოიფიქრეთ 2 if else-ის მაგალითი თქვენით

// >>> კოდი დაწერეთ აქ

let notebookNumber= 30;

if(notebookNumber > 1){
  console.log(`There is ${notebookNumber} notebooks in stock.`);
}else if(notebookNumber===1){
  console.log(`There is ${notebookNumber} notebook in stock.`);
}else{
  console.log( `Out of stock!`);
};


let countingCat=5;

if(countingCat===1){
  console.log( `MEEOOWWW!`);
}else if(countingCat===2){
  console.log(`MEEOOWWW! MEEOOWWW!`);
}else if (countingCat ===3){
  console.log(`MEEOOWWW!  MEEOOWWW! MEEOOWWW!`);
}else if (countingCat >= 4){
  console.log(`Shut up cat!!! 
I don't want to hear your MEEOOWWWs anymore!`);
}else {
  console.log(`There is no other answers!`);
};

/*-------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------*/




// გადაიყვანეთ If ternary operator-ში მაგ. (true ? 1 : 2) 

// >>> კოდი დაწერეთ აქ

notebookNumber=0;


notebookNumber>1 ? console.log(`There is ${notebookNumber} notebooks in stock.`) : 
notebookNumber===1 ? console.log(`There is ${notebookNumber} notebook in stock.`) :
console.log( `Out of stock!`);


countingCat=3;

countingCat===1 ? console.log( `MEEOOWWW!`) : countingCat===2 ? console.log(`MEEOOWWW! MEEOOWWW!`) : 
countingCat===3 ? console.log(`MEEOOWWW!  MEEOOWWW! MEEOOWWW!`) : countingCat>=4 ? console.log(`Shut up cat!!! I don't want to hear your MEEOOWWWs anymore!`) :
console.log(`There is no other answers!`);



/*-------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------*/


/*
  ჩვენ გვაქვს ოთხი ფერი რომელთაც აქვთ
  კონკრეტული ციფრები მინიჭებული (თეთრი=4, 
  წითელი=3, მწვანე=2, ლურჯი=1, შავი=0, 
  სხვა ყველა ფერი=undefined)
*/

let colorId = 3;

// დაწერეთ if ისე, რომ როდესაც ჩვენ
// შევცვლით მაღლა განსაზღვრულ ცვლადს გავიგოთ
// ამ აიდის ფერი (ფერი გამოიტანეთ კონსოლში ტექსტის
// სახით)


// >>> კოდი დაწერეთ აქ

if(colorId===0){
  console.log("Black");
}else if(colorId===1){
  console.log("Blue");
}else if(colorId===2){
  console.log("Green");
}else if(colorId===3){
  console.log("Red");
}else if(colorId===4){
  console.log("White");
}else{
  console.log("Undefined");
}



/*-------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------*/



// გადაიყვანეთ If ternary operator-ში მაგ. (true ? 1 : 2) 

// >>> კოდი დაწერეთ აქ

colorId = 5;

colorId===0 ? console.log("Black") : colorId===1 ? console.log("Blue") : colorId===2 ? console.log("Green") : colorId===3 ? console.log("Red") :
colorId===4 ? console.log("White") : console.log("Undefined");


/*-------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------*/






// <------- დავალება Switch ---------#### //

// ცადეთ იგივე გააკეთოთ რაც წინა დავალებაში
// ოღონდ ამჯერად Switch-ის დახმარებით


// >>> კოდი დაწერეთ აქ


colorId = 4;

switch(colorId){
  case 0:
    console.log("Black");
    break;
  case 1:
    console.log("Blue");
    break;
  case 2:
    console.log("Green");
    break;
  case 3:
    console.log("Red");
    break;
  case 4:
    console.log("White");
    break;
  default:
    console.log("Undefined");
}




/*-------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------*/






//  ||
//  ||
//  ||
// \  /
//  \/

/*
    ეს დავალება რომ ნახოთ გამოიყენეთ HTML,
    ჩვენი მიზანია ავაწყოთ ჩეთ ბოტი რომელთანაც ვისაუბრებთ
    როგორც ხედავთ დაბლა გამზადებული მაქვს კოდის გარკვეული
    ნაწილი ეს არის ფუნქცია რომელსაც მომავალში გავივლით
    კონკრეტულად ეს ფუნქცია არის რეკურსიული, რეკურსია
    არის პროცესი როდესაც ფუნქცია თავის თავს იძახებს ჩვენ კი
    იმიტომ ვიყენებთ ამას, რომ ყოველ ჯერზე როდესად რაღაცის თქმა
    დაგვჭირდება მზად იყოს სასაუბროდ ჩვენი ბოტი

    // კოდში მოათავსეთ Switch რომლითაც დააპროგნოზებთ სასაუბრო
    // სიტყვებს ააწყობთ მინი ჩათ ბოტს.
    მაგ. 
    """"
      case "გამარჯობა":
        alert("გამარჯობა");
        break;
    """"
*/
const bot = document.getElementById("bot");
// bot.addEventListener("click", myFun());

function myFun() {
  let x = prompt("მე ვარ ბოტი მზევინარა, თუ რამეში დაგჭირდით მომმართეთ");

  // >>> კოდი დაწერეთ აქ გამოიყენეთ Switch

  switch(x){
    case "gamarjoba" :
    case "Gamarjoba" :
    case "Gamarjba" :
    case "გამარჯობა":
    case "გამაჯობა" :
    case "გამჯობა":
      alert ("გამარჯობა <3");
      break;
    case "შეკითხვა მაქვს" :
    case "რა მაინტერესებს" :
    case "შემიძლია გკითხოთ?" :
    case "მაინტერესებს შემდეგი საკითხი" :
      alert ("დიახ გისმენთ");
      break;
    case "ეს რა ღირს?" :
    case "ამის ფასი მომწერეთ" :
    case "რა ღირს?" :
    case "რა ღირს" :
      alert ("ჩვენ გვაქვს ძალიან დიდი რაოდენობის პროდუქცია. თითოეულ პროდუქტზე მითითებულია 4 ნიშნა კოდი, გთხოვთ მოგვწეროთ ზუსტი კოდი, რომ დაგიზუსტოთ ფასი");
      break;
    case "0019":
      alert("პროდუქტის ფასია _ 1 ლარი და 15 თეთრი");
      break;
    case "დიდი მადლობა" :
      alert ("არაფრის და დროებით <3 მე სულ მზად ვარ დახმარებისთვის. გისურვებთ წარმატებულ დღეს!");
      break;
  }

  // რეკურსიული ფუნქცია 
  
  if(x!="დიდი მადლობა"){
    myFun();
  }else{
  };
}

/*--------------------------------------------The End----------------------------------------------------*/
/*----------------------------------------Of homework N 2------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------*/

