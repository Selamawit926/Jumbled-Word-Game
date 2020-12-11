let first= document.getElementById('hi').innerHTML;

let practice=first.split('');

function changing(){
        for(let i=0; i< 6; i++){
            let inter= practice[i];
            practice[i]=practice[i+1];
            practice[i+1]=inter;
            let prac= practice.join('');
            document.getElementById("hi").innerHTML= prac;
            
    }
}

setInterval(changing,2000);

let cont= document.getElementById("container");
let cont1= document.getElementById("first");

function hide(){
    cont.style.display="block";
    cont1.style.display="none";
}

let but1 = document.getElementById("but1");
// but1.onclick= function(){
//     window.location.replace("#container");
// };

let rule1=document.getElementById("rule1");
let rule2=document.getElementById("rule2");


function show(){
    document.getElementById("dis").style.display="block";
}

function show2(){
    document.getElementById("dis2").style.display="block";
}

setTimeout(show,3000);
setTimeout(show2,3000);
let interval;

let cont2=document.getElementById("container2");
function hide1(){
    cont.style.display="none";
    cont2.style.display="block";
    interval= setInterval(count,1000);

}

let seconds=50;
let answers=["I hated doing this during English tests in highschool", 
"The next question is the most difficult one", 
"Now I'm realizing this was a huge mistake and a waste of time"
, "People in this country tend to focus on things they shouldn't", "I was so bored that I played this game"];
let n=0;

function count(){
    let min= Math.floor(seconds/60);
    let sec= seconds-(min*60);

   
     if(sec<10){
         sec= "0" + sec;
     }

     document.getElementById("time").innerHTML= "Countdown"+ " " + min + ":" + sec;
     if(seconds===0){
         clearInterval(interval);
         document.getElementById("ans1").innerHTML= "The answer: " + answers[0];
         document.getElementById("but3").style.display="none";
         document.getElementById("over").style.display="block";
         document.getElementById("over2").style.display="block";
         document.getElementById("ans1").style.display="block";
         answers.shift();
         setTimeout(last,3000);
         setTimeout(Switch,4000);
         
    
     }

     seconds--;

}

function Change(a,b){
    this.numb=a;
    this.quest=b;
}

Change.prototype.changeNumber=function(){
    document.getElementById("num").innerHTML=this.numb;
};

Change.prototype.changeQuestion= function(){
    document.getElementById("ques").innerHTML=this.quest;
};

let ques2= new Change("#3","is question difficult next one the most The"); 
let ques3= new Change("#4","this a and a I'm waste mistake Now time of realizing was huge");
let ques4= new Change("#1","focus they shouldn't People this in country to things tend on"); 
let ques5= new Change("#2","I so played game this was bored that I"); 

let arr= [ques2, ques3, ques4, ques5];


function Switch(){
    arr[0].changeNumber();
    arr[0].changeQuestion();
    arr.shift();
    document.getElementById("ans").style.display="none";
    document.getElementById("ans1").style.display="none";
    document.getElementById("ans2").style.display="none";
    document.getElementById("ans3").style.display="none";
    document.getElementById("but3").style.display="block";
    document.getElementById("over").style.display="none";
    document.getElementById("over2").style.display="none";
    document.getElementById("inp").value="";
    seconds=50;
    interval=setInterval(count,1000);

}


function check(){
    clearInterval(interval);
    document.getElementById("but3").style.display="none";

    if(document.getElementById("inp").value===answers[0]){
        document.getElementById("ans1").innerHTML= "The answer: " + answers[0];
        document.getElementById("ans2").innerHTML= "Your answer: " + document.getElementById("inp").value ; 
        document.getElementById("ans").style.display="block";
        n++;

    } 
    else{
        document.getElementById("ans1").innerHTML= "The answer: " +  answers[0];
        document.getElementById("ans2").innerHTML= "Your answer: " + document.getElementById("inp").value ; 
        document.getElementById("ans3").style.display="block";
       
    }

    
    document.getElementById("ans1").style.display="block";
    document.getElementById("ans2").style.display="block";
    answers.shift();
    setTimeout(last,3000);
    setTimeout(Switch,5000);
    
}

let cont3= document.getElementById("container3");

function last(){
    if(arr.length===0){
        cont2.style.display="none";
        cont3.style.display="block";
        switch(n){
            case 0: 
                document.getElementById("end").innerHTML= "Sadly you didn't get any of them right but good effort";
                document.getElementById("end").style.fontSize="160%";
                break;

            case 1: 
                document.getElementById("end").innerHTML= "You got 1 out of 5 right! Good effort";
                break;

            case 2: 
                document.getElementById("end").innerHTML= "You got 2 out of 5 right! Good effort";
                break;

            case 3: 
                document.getElementById("end").innerHTML= "You got 3 out of 5 right! Good job!";
                break;

            case 4: 
                document.getElementById("end").innerHTML= "You got 4 out of 5 right! Good job!";
                break;

            case 5: 
                document.getElementById("end").innerHTML= "You got all them right! Great job!";
                break;

        }

    }

}