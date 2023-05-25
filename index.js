const questions = [
    {
        "questionNumber": 1,
        "question": "Each personal computer has a _________ that manages the computer’s arithmetical, logical and control activities.",
        "choices":{
            "a": "a. Assembler",
            "b": "b. Microprocessor",
            "c": "c. Interpreter",
            "d": "d. Microcontroller"
        },
        "correctAnswer": "b",
        "id":"question_1"
    },
    {
        "questionNumber": 2,
        "question": "Animations and interactivity with user on web pages can be done by:",
        "choices":{
            "a": "a. Visual Basic",
            "b": "b. Visual C#",
            "c": "c. Java script",
            "d": "d. PHP"
        },
        "correctAnswer": "c"
        ,
        "id":"question_2"
    },
    {
        "questionNumber": 3,
        "question": "They normally interact with the system via user interface provided by the application software.",
        "choices":{
            "a": "a. Testers",
            "b": "b. Developers",
            "c": "c. Users",
            "d": "d. Programmers"
        },
        "correctAnswer": "c",
        "id":"question_3"
    },
    {
        "questionNumber": 4,
        "question": "Language in which single statements can be written to accomplish substantial tasks is termed as",
        "choices":{
            "a": "a. machine language",
            "b": "b. medium language",
            "c": "c. high level language",
            "d": "d. assembly language"
        },
        "correctAnswer": "c",
        "id":"question_4"
    },
    {
        "questionNumber": 5,
        "question": "Unit which retains processed information until it can be placed on output devices by output unit is",
        "choices":{
            "a": "a. ALU",
            "b": "b. output device",
            "c": "c. input device",
            "d": "d. memory unit"
        },
        "correctAnswer": "d",
        "id":"question_5"
    },
    {
        "questionNumber": 6,
        "question": "Higher-order functions are not built into the",
        "choices":{
            "a": "a. C++",
            "b": "b. object oriented programming",
            "c":"c. JAVA",
            "d":"d. structural language"
        },
        "correctAnswer": "a",
        "id":"question_5"
    },
    {
        "questionNumber": 7,
        "question": "Each byte of character is stored as its ASCII value in _______",
        "choices":{
            "a": "a. Hexadecimal",
            "b": "b. Decimal",
            "c": "c. Binary",
            "d": "d. Octal"
        },
        "correctAnswer": "a",
        "id":"question_7"
    },
    {
        "questionNumber": 8,
        "question": "Set of programs which consist of full documentation.",
        "choices":{
            "a": "a. Software Package",
            "b": "b. System Software",
            "c": "c. File package",
            "d": "d. Utility Software"
        },
        "correctAnswer": "a",
        "id":"question_8"
    },
    {
        "questionNumber": 9,
        "question": "The software designed to perform a specific task:",
        "choices":{
            "a": "a. System Software",
            "b": "b. Package Software",
            "c": "c. Application Software",
            "d": "d. Synchronous Software"
        },
        "correctAnswer": "c",
        "id":"question_9"
    },
    {
        "questionNumber": 10,
        "question": "To speed up the processor operations, the processor includes some internal memory storage locations, called ___________",
        "choices":{
            "a": "a. Units",
            "b": "b. Memory",
            "c": "c. Registers",
            "d": "d. Drives"
        },
        "correctAnswer": "c",
        "id":"question_10"
    },
    {
        "questionNumber": 11,
        "question": "What do you call a specific instruction designed to do a task?",
        "choices":{
            "a": "a. Instruction",
            "b": "b. Process",
            "c": "c. Command",
            "d": "d. Task"
        },
        "correctAnswer": "c",
        "id":"question_11"
    },
    {
        "questionNumber": 12,
        "question": "Which of the following isn’t a characteristic of High level languages?",
        "choices":{
            "a": "a. platform independent",
            "b": "b. interactive execution",
            "c": "c. machine code",
            "d": "d. user-friendly"
        },
        "correctAnswer": "c",
        "id":"question_12"
    },
    {
        "questionNumber": 13,
        "question": "A program that can execute high-level language programs.",
        "choices":{
            "a": "a. Circuitry",
            "b": "b. Compiler",
            "c": "c. Sensor",
            "d": "d. Interpreter"
        },
        "correctAnswer": "d"
        ,
        "id":"question_13"
    },
    {
        "questionNumber": 14,
        "question": "Which of the following is not a way of acquiring software?",
        "choices":{
            "a": "a. Duplicating the software",
            "b": "b. Downloading public-domain Software",
            "c": "c. Buying pre-written software",
            "d": "d. Ordering customized software"
        },
        "correctAnswer": "a",
        "id":"question_14"
    },
    {
        "questionNumber": 15,
        "question": "Translator which is used to convert codes of assembly language into machine language is termed as",
        "choices":{
            "a": "a. compiler",
            "b": "b. attempter",
            "c": "c. debugger",
            "d": "d. assembler"
        },
        "correctAnswer": "d",
        "id":"question_15"
    },
];

//start quiz
    const startQuiz=()=>{
        let username = document.getElementById('username').value;
        // localStorage.setItem()
        if(username.length <=0){
            alert('please enter your name');
        }else{
            document.getElementById('userNameCard').style.display = 'none';
            document.getElementById('quizCard').style.display = 'block';
            document.getElementById('user').innerText = username;
            startCountdown();
        }
    }

let filteredAnswer;
let userAnswer =[];

const saveAnswer=(e)=>{
    let value = e.target.value
    let answerNumber = e.target.name
    userAnswer.push({"number":answerNumber,"answer":value})

    filteredAnswer = [...new Map(userAnswer.map(ans =>[ans.number,ans])).values()];

    //change bg color if already answered the questions
    document.getElementById(`${e.target.name}`).style = 'background-color: green; color: white;';

    localStorage.setItem("answer",JSON.stringify(filteredAnswer));

}


const questionsContainer = document.getElementById("questionsContainer");

questions.forEach((question)=>{
    const questionBox = document.createElement('div');
    questionBox.setAttribute("class","questionBox");
    questionBox.setAttribute("id",question.id);

    const numAndQues = document.createElement('div');
    numAndQues.setAttribute("class","numAndQues");

    const questionWords = document.createElement('p');
    questionWords.setAttribute("class","question");
    questionWords.innerText = question.question;
    numAndQues.appendChild(questionWords);

    const choices = document.createElement('div');
    choices.setAttribute("class","choices");
    choices.setAttribute("key",question.questionNumber);

    const inputOne = document.createElement('input');
    inputOne.setAttribute("type","radio");
    inputOne.setAttribute("name",question.questionNumber);
    inputOne.setAttribute("value","a");
    inputOne.onclick = saveAnswer;
    const labelOne = document.createElement('label');
    labelOne.setAttribute("for",question.questionNumber);
    labelOne.innerText = question.choices.a

    const inputTwo = document.createElement('input');
    inputTwo.setAttribute("type","radio");
    inputTwo.setAttribute("name",question.questionNumber);
    inputTwo.setAttribute("value","b");
    inputTwo.onclick = saveAnswer;;
    const labelTwo = document.createElement('label');
    labelTwo.setAttribute("for",question.questionNumber);
    labelTwo.innerText = question.choices.b

    const inputThree = document.createElement('input');
    inputThree.setAttribute("type","radio");
    inputThree.setAttribute("name",question.questionNumber);
    inputThree.setAttribute("value","c");
    inputThree.onclick = saveAnswer;;
    const labelThree = document.createElement('label');
    labelThree.setAttribute("for",question.questionNumber);
    labelThree.innerText = question.choices.c

    const inputFour = document.createElement('input');
    inputFour.setAttribute("type","radio");
    inputFour.setAttribute("name",question.questionNumber);
    inputFour.setAttribute("value","d");
    inputFour.onclick = saveAnswer;;
    const labelFour = document.createElement('label');
    labelFour.setAttribute("for",question.questionNumber);
    labelFour.innerText = question.choices.d

    questionBox.appendChild(numAndQues);
    questionBox.appendChild(choices);
    choices.appendChild(inputOne);
    choices.appendChild(labelOne);
    choices.appendChild(inputTwo);
    choices.appendChild(labelTwo);
    choices.appendChild(inputThree);
    choices.appendChild(labelThree);
    choices.appendChild(inputFour);
    choices.appendChild(labelFour);
    questionsContainer.appendChild(questionBox);
});

// 


const submit=()=>{
    checkAnswer();
    document.getElementById('checkQuizPopup').style.display = 'flex';
    document.getElementById('quizCard').style.display = 'none';

    setTimeout(()=>{
        document.getElementById('checkQuizPopup').style.display = 'none';
        document.getElementById('quizCard').style.display = 'none';
        document.getElementById('result').style.display = 'flex';
    },10000);
}


const checkAnswer = () =>{
    let result = [];
    console.log(filteredAnswer);

        questions.forEach(data1 =>{
            console.log(data1.questionNumber);
            console.log(data1.correctAnswer);
            filteredAnswer.filter(data2 => {
                

                if(data1.questionNumber == data2.number && data1.correctAnswer == data2.answer){
                    result.push({
                        "userNumber":data2.number,
                        "correctNumber":data1.questionNumber,
                        "userAnswer":data2.answer,
                        "correctNaswer":data1.correctAnswer
                    });
                }else{
                    console.log('false');
                }
            })
        })
        //display the score
        setTimeout(()=>{
            console.log(result)
            console.log(result.length)
            
            if(result.length >= 7){
                const messageTitle = document.getElementById('messageTitle');
                messageTitle.innerText = 'Congratulations!';
                messageTitle.classList.add('text-success');

                document.getElementById('userScores').innerText = result.length;
                document.getElementById('messageForUser').innerText = 'Good job my boy! I\'m proud of you';
            }else{
                const messageTitle = document.getElementById('messageTitle');
                messageTitle.innerText = 'Better luck next time my boy!';
                messageTitle.classList.add('text-success');

                document.getElementById('messageForUser').innerText = 'Dagdagan mo nalang prayers mo hahaahahaha';
                document.getElementById('userScores').innerText = result.length;
            }
        },1000);
}

//reAttempt
    const reAttempt=()=>{
        document.getElementById('result').style.display = 'none';
        document.getElementById('userNameCard').style.display = 'flex';
        let music = document.getElementById('music');
        music.innerHTML = '';
        location.reload();
    }

// countdown
// Set the duration to 30 minutes (30 minutes * 60 seconds)
let duration = 15 * 60;

// Function to start the countdown
function startCountdown() {
    let timer = setInterval(() => {
    let minutes = Math.floor(duration / 60);
    let seconds = duration % 60;

    // Add leading zeros if necessary
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Display the countdown in the console or update the HTML element with the timer
    document.getElementById('countdown').innerText = minutes + ":" + seconds;

    // Check if its almost time
    if (minutes == 5) {
        alert("Its almost time, my boy");
    }
    // Check if the countdown is finished
    if (duration <= 0) {
        clearInterval(timer);
        let alert = confirm('Sorry di ka umabot');
        submit();
      // Perform any additional actions after the countdown finishes
    }

    // Decrement the duration by 1 second
    duration--;
  }, 1000); // Run the timer every second (1000 milliseconds)
}

//play music

const playMusic=()=>{
    let music = document.getElementById('music');
    let source_1 = document.createElement('source');
    source_1.setAttribute('src','./amanamin2.mp3');
    source_1.setAttribute('type','audio/ogg');
    let source_2 = document.createElement('source');
    source_2.setAttribute('src','./amanamin2.mp3');
    source_2.setAttribute('type','audio/mpeg');

    music.appendChild(source_1);
    music.appendChild(source_2);
}


