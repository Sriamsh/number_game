player1name=localStorage.getItem("player1name");
player2name=localStorage.getItem("player2name");

player1score=0;
player2score=0;

document.getElementById("player1name").innerHTML=player1name + ":";
document.getElementById("player2name").innerHTML=player2name + ":";

document.getElementById("player1score").innerHTML=player1score;
document.getElementById("player2score").innerHTML=player2score;

document.getElementById("playerquestion").innerHTML="question turn: "+ player1name;
document.getElementById("playeranswer").innerHTML="answer turn: "+ player2name;


function send()
{
   number1 = document.getElementById("number1").value; 
   number2 = document.getElementById("number2").value; 
actual_answer = parseInt(number1) * parseInt(number2);

    q="<h4 id='word_display'> Q . "+number1+" x "+number2+"</h4>";
    ib="<br> Answer : <input type='text' id='input'>";
    cb="<br> <br> <button onclick='check()' class='btn btn-info'>Check</button>";
    r=q+ib+cb;
    document.getElementById("output").innerHTML=r;
}

questionturn="player1";
answerturn="player2";

function check()
{
    getanswer=document.getElementById("input").value;
    answer=getanswer;

    if(actual_answer==answer)
    {
        if(answerturn=="player1")
        {
            player1score=player1score + 1;
            document.getElementById("player1score").innerHTML=player1score;
        }
        else
        {
            player2score=player2score + 1;
            document.getElementById("player2score").innerHTML=player2score;  
        }
    }

    if(questionturn=="player1")
    {
        questionturn="player2";
        document.getElementById("playerquestion").innerHTML="Question Turn : "+ player2name;
    }
    else
    {
        questionturn="player1";
        document.getElementById("playerquestion").innerHTML="Question Turn : "+ player1name; 
    }

    

    if(answerturn=="player1")
    {
        answerturn="player2";
        document.getElementById("playeranswer").innerHTML="Answer Turn : "+ player2name;
    }
    else
    {
        answerturn="player1";
        document.getElementById("playeranswer").innerHTML="Answer Turn : "+ player1name; 
    } 
    document.getElementById("output").innerHTML=""
}