var eightBallResponses = ["Don't count on it", "Odds are against it", "The dude thinks so", "All signs point to yes", "Ask again later", "Outlook is Hazy", "Definitely not", "It just might happen if you're lucky"]

console.log(eightBallResponses);

const yourQuestions = []
console.log(yourQuestions)
console.log(yourQuestions.length)
var userName = document.getElementById("firstname").value;
var userQuestion = document.getElementById("question").value
// var allQuestions = yourQuestions.push(document.getElementById("question").value);
console.log(yourQuestions)


function randomNumber(eightBallResponses) {
    return eightBallResponses[Math.floor(Math.random()*eightBallResponses.length)]
}

console.log(randomNumber(eightBallResponses));


function logName(userName) {
    var userName = document.getElementById("firstname").value;
    console.log(userName);

    var userQuestion = document.getElementById("question").value
    console.log(userQuestion)

    if (document.getElementById("question").value.length > 1) {
      var allQuestions = yourQuestions.push(document.getElementById("question").value);
    }

    //Why did this work here and not in a separate function I tried to create called LogQuestion?
}


function showData(yourQuestions) {
    var userName = document.getElementById("firstname").value;
    var userQuestion = document.getElementById("question").value;
    document.getElementById('littleinfobox').innerHTML = randomNumber(eightBallResponses).toUpperCase();

    if (userName.length > 0 && userQuestion.length === 0) {
      document.getElementById('littleinfobox').innerHTML = "You must enter a Question" + "<br>"
      document.getElementById('askagain').disabled = true;
    } else if (userName.length === 0 && userQuestion.length > 0) {
      document.getElementById('littleinfobox').innerHTML = "You must enter a User Name" + "<br>"
      document.getElementById('askagain').disabled = true;
    } else if (userName.length === 0 && userQuestion.length === 0){
      document.getElementById('littleinfobox').innerHTML = "You didn't enter ANYTHING!" + "<br>"
      document.getElementById('askagain').disabled = true;
    } else {
      document.getElementById('askagain').disabled = false;
    }


    if (userName === "Michael") {
      document.getElementById('littleinfobox').innerHTML = userName + "<br>" + userQuestion + "<br>" + randomNumber(eightBallResponses) + "<br>" + userName + "? " + "Hey Michael! You invented this app! Way to go!";
      document.getElementById('littleinfobox').innerHTML = userName + "<br>" + userQuestion + "<br>" + randomNumber(eightBallResponses) + "<br>" + userName + "? " + "Hey Michael! You invented this app! Way to go!";
      document.getElementById('askagain').disabled = true;
    }
  }

  function hideButton() {
    var hidden = document.getElementById("askagain")
    //Hides button in DIV above on click
    if (hidden.style.display === "none") {
        hidden.style.display = "inline-block";
    } else {
        hidden.style.display = "none";
    }

    //Why is it showing the question three times???!?
    // hidden.innerHTML = userName + "<br>" + yourQuestions
  }


  function showQuestions() {

    //This works, but I don't understand why? Wanted to get clarity. This function prevents repeat questions from showing.
    const unique = (value, index, self) => {
      return self.indexOf(value) === index
      var uniqueQuestions = (shorts) => {
        yourQuestions.filter(shorts)
        return uniqueQuestions.length > 1
      }
    }
    var uniqueQuestions = yourQuestions.filter(unique)

    //How do I get it not to print answers with less than zero or one letter/number? See below, these attempted functions didn't work.


    // if (userQuestion.length === 1) {
    //   hidden.innerHTML = ""
    // } else {
    //   hidden.innerHTML = ("" + `${uniqueQuestions}`)
    // }

    // const shortQuestions = yourQuestions.filter(question => {
    //   return question.length > 1;
    // });

    console.log(uniqueQuestions);


    console.log("Testing this function");
    var hidden = document.getElementById("askagain2")
    //Why do I have to re-declare these variables here if they're "global" at the top?
    var userName = document.getElementById("firstname").value;
    var userQuestion = document.getElementById("question").value
    // var allQuestions = yourQuestions.push(document.getElementById("question").value);

    if (document.getElementById("question").value.length > 1) {
      var allQuestions = yourQuestions.push(document.getElementById("question").value);
    }

    // const shorts = yourQuestions.filter(element) => {
    //   return element.length > 1
    // }
    // console.log(shorts)

    //
    // if (userQuestion.length < 2) {
    //   console.log("Short question")
    //   uniqueQuestions = ""
    // } else {
    //   return uniqueQuestions
    // }

    //Why does the initial array show [']? (I could use [1] but then how do I display all index items AFTER zero?)
    //Also, why in the world can't I get a space to show between the questions?
    // if (uniqueQuestions.contains === ",") {
      hidden.innerHTML = (` ${uniqueQuestions}`).replace(/,/g,", ");
    // };

  }


//This function should clear the div with the user info so they can start over; ideally, it would add 1 to a counter for questions and/or username
//as you suggested but not sure how to do that. Maybe that could tie in with the thing above about not wanting to display questions with less
//two characters.
  function newQuestion() {
    document.getElementById("littleinfobox").innerHTML = " ";
    document.getElementById("firstname").innerHTML = " ";
    document.getElementById("question").innerHTML = " ";
  }


  function disableButton(yourQuestions) {
    if (yourQuestions.length > 0) {
      document.getElementById("askagain").disabled = true;
    }
  }



newpuzzle.addEventListener("click", showData, newQuestion);
newpuzzle.addEventListener("click", logName);
// newpuzzle.addEventListener("click", newQuestion);



//DAILY QUESTIONS
//3/3/22 - How to disable the Let's Begin button after one click and only re-enable it after a user has clicked "Ask New Question"
//3/3/22 - How to get the questions to show with spaces between all. not just the first one
//3/3/22 - How can I make the Eight Ball answers float around?
//3/7/22 - On second click (but not on first or any clicks after) it will show the single-letter questions despite the rule preventing it



//THIS IS A "CODE DUMP" -- NOT IMPORTANT

// This part works - it only shows the quantity, but not the actual question; for the littleinfobox inner HTML box,
// if you add allQuestions it prints that length
// I want to be able to disable the "Let's Begin" button if nothing is entered. How do I do this?
// var allQuestions = yourQuestions.push(document.getElementById("question").value);
// console.log(yourQuestions)
// document.getElementById('littleinfobox').innerHTML = (userName + "<br>" + userQuestion + "<br>" + randomNumber(eightBallResponses)).toUpperCase();

//Right now this function is useless because the other function spits out data in the div; before, this function was going
//new page but doing what the function made it do. If I disable the other functions, then I also get the array push.
//   if (userName.length > 0 && userQuestion.length > 0) {
//     // document.write("Your userName is: " + userName + "<br/>")
//     // document.write("Your question is: " + userQuestion + "<br/>")
//     document.write("Magic Eight Ball Says: " + randomNumber(eightBallResponses) + "<br/>")
//   } else if (userName.length === 0 && userQuestion.length > 0) {
//     document.write("Please enter a user name")
//     // document.getElementById("newPuzzle").disabled = true;
//   } else if (userQuestion.length === 0 && userName.length > 0) {
//     document.write("Please enter a question")
//     // document.getElementById("newPuzzle").disabled = true;
//   } else {
//     document.write("You didn't enter ANYTHING!")
//     // document.getElementById("newPuzzle").disabled = true;
//   }
//
//   if (userName === "Michael") {
//     document.write(userName + "? " + "Hey Michael! You invented this app! Way to go!")
//   }
//
//

// var stringIndex = vowelString.indexOf(currentLetter);
// if (stringIndex > -1) {

// function increment() {
//   yourQuestions++;
//   return yourQuestions;
//   console.log(yourQuestions.length)
// }
// increment(yourQuestions)



// newpuzzle.addEventListener("click", newQuestion);


// window.onload = function() {
//   document.getElementById("biginfobox").style.display = 'none';
// };


//   document.write("Magic Eight Ball Says: " + randomNumber(eightBallResponses) + "<br/>")
//
//   // var yourInfo = document.getElementById("biginfobox")
//   // document.write("Magic Eight Ball Says: " + randomNumber(eightBallResponses) + "<br/>")
//   // console.log(document.getElementById("firstname").value);
// }
// infoclick.addEventListener("click", showData);


// $('.firstname').hover(function() {
//     $('.playername').css("opacity", "1");
//     $('.firstname').css("opacity", "0.5");
//   });
//
//   $("testclick").click(function() {
//     $("playarea").hide();
//   });
//
//   $('.testclick').click(function() {
//       $('.playarea').css("visibility", "hidden");
//   });


// });

// // var eightBall = {
// //     userName = null,
// var eightBallResponses = ["Don't count on it", "Odds are against it", "The dude thinks so", "All signs point to yes"]
//
// console.log(eightBallResponses);
//
//
// function randomNumber(eightBallResponses) {
//     return eightBallResponses[Math.floor(Math.random()*eightBallResponses.length)]
// }
//
// console.log(randomNumber(eightBallResponses));
//
//
// newpuzzle.addEventListener("click", logName);
//
// function logName() {
//     var userName = document.getElementById("firstname");
//     console.log(userName.value);
// }

// eightBall.initialize();
// const form = document.getElementById('text');
// // const log = document.getElementById('log');
// form.addEventListener('submit', logSubmit);
