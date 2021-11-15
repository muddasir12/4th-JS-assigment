    /////CHAPTER 21-25//////
var firstName = "Muddasir";
var lastName = "Farooq";
var fullName, firstName, lastName;
firstName = 'Muddasir';
lastName = 'Farooq';
fullName = 'firstName' + 'lastName';
console.log(fullName, firstName, lastName);

var userinput = prompt("What Is Your Favorite Mobile Phone");
for(var i = 0 ; i< userinput.length; i++);
document.write("My Favorite Phone Is:" + userinput + "<br>"+"lenght Of String:" + userinput.length);

let text = "Pakistani";
text.indexOf("n");
document.write("<br>" + "String:" + text + "<br>" + "Index of 'n':" + text.indexOf("n"));

var userName=prompt("Enter your Input: ");
checkValidName(userName);
function checkValidName(un)
{
    var message;
    var split=[];
    var arr=[];
    for(var i=0;i<un.length;i++)
    {
        split[i]=un.split("&nbsp;");
        arr[i]=un.charCodeAt(i);
        if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
        {
                message="Correct User Name";
        }
        while(arr[i]==33||arr[i]==44||arr[i]==46||arr[i]==64)
        {
            alert("please enter a valid userName");                                                                                                                   
            userName=prompt("Enter your Input: ");
            split[i]=un.split("&nbsp;");
            arr[i]=un.charCodeAt(i);
            if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
            {
                message="correct in";
                break;
            }
        }

    }
    alert(message);
}

var userinput = "Pakistan";
userinput.charAt(7);
document.write("<br>" + "UserInput:" + userinput + "<br>" + "Last character of:" + userinput.charAt(7));


    /////Chapter 26-30//////

var number = 3.45214;
Math.round(3.45214);
document.write("<br>" + "number:" + number + "<br>" + "Round off value:" + Math.round(3.45214));

var number = 3.45214;
Math.floor(3.45214);
document.write("<br>" + "number:" + number + "<br>" + "Floor value:" + Math.floor(3.45214));

var number = 3.45214;
Math.ceil(3.45214);
document.write("<br>" + "number:" + number + "<br>" + "Ceil value:" + Math.ceil(3.45214));

var number = -2.673;
Math.round(-2.673);
document.write("<br>" + "number:" + number + "<br>" + "Round offvalue:" + Math.round(-2.673));

var number = -2.673;
Math.floor(-2.673);
document.write("<br>" + "number:" + number + "<br>" + "floor value:" + Math.floor(-2.673));

var number = -2.673;
Math.ceil(-2.673);
document.write("<br>" + "number:" + number + "<br>" + "Ceil value:" + Math.floor(-2.673));