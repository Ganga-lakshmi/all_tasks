//interacting with html elements (dom)
console.log("DOM elements..")
//document.write(document.getElementById("ff")).value= "forms";
// let b= document.getElementById('user').value="ganga";
// document.write(b);

const elem=document.getElementsByClassName("para")[1];
console.log(elem);
const element = document.getElementsByTagName("p")[0];
console.log(element);

function fun(){
    alert("you clicked submit button");
}

function fun1(){
    alert('you clicked reset button');
}

const x= document.querySelectorAll("p.para");
console.log(x);

//js forms and buttons
console.log("form validations..\n")

function validate()
{
    var username= document.getElementById("user");
    var password = document.getElementById("pw");
    //blanks are removed by trim  () method
    if(username.value.trim() == "" || password.value.trim() == "")
    {
        alert("No blank values allowed");
        return false;
    }
    else{
        if(password.value <=8)
        {
            alert("please check the password is strong or not!");
            return false;
        }
        else{
             true;
        }
        
     }

}
// let username = document.getElementById('user').value;
// console.log("fname=");
// console.log(username);
//these are gives the values through console
document.querySelector('#user').value;
console.log(document.querySelector('#pw').value);
console.log(document.querySelector('#id').value);
console.log(document.querySelector('#em').value);
console.log(Array.from(document.querySelectorAll('#registrationform input')).reduce((acc,input) => ({ ...acc,[input.id]: input.value }), {}));



//window closing opening..
 function newWindow(){
    mywin=window.open("script.js","main_window","top=100,left=100")
    console.log("window opened");
}

function closeWindow(){
//     window.close()
    if(mywin)
    {
        window.close();
        console.log("window closed")
    }
    else{
        console.log("window not opened")
    } 
}

console.log("arrays implementaion\n");
//arrays
var d= ['nuzvid','sklm','ongole'];
var len=d.length;
console.log("array length is=",len);
console.log(typeof(d));
console.log("datatype is array ");
console.log(Array.isArray(d));
d.push('ongole');
console.log(d)

d.unshift('rgukt')
console.log(d)
d.pop();//ong eliminates

d.shift();//last element deletes
console.log(d);
d[1]='sklm';
console.log(d);
delete d[1];//true
console.log(d)

//function
const num=[1,2,3,4,5,6];
let sum=0;
function summ() {
    for(let i of num){
        sum=sum +i;
    }
    console.log("sum of numbers :"+sum);
}

summ();




//getting user selected data
const getUserSelectedText = () =>{
	return window.getSelection().toString();
}

//taking back to top
const toTop =() => window.scrollTo({
	top: 0, behavior:'smooth'
});

//detect user in darkmode
 const isDarkMode = () => {
 	return window.matchMedia('(prefers-colors-scheme:dark)').matches;
 }

 //go back to previous page
 history.back();
 history.go(-1);

 //removing duplicates from an array
 const removeDuplicates = (arr) => [...new Set(arr)];


//js events
 function clickevent()  
    {  
        document.write("This is event");  
    }  

 
document.write("The page is loaded successfully");  
 function keydownevent()  
    {  
        document.getElementById("input1");  
        alert("don't click me");  
    }  
    function mouseoverevent()  
    {  
        alert(" oh no!! you left me..");  
    } 