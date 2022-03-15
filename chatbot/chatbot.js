//엔터키로 실행시키는 함수
function enterkey() {
	if(window.event.keyCode == 13) {
		talk_input();
	}
}

const json = 
[
	{
		"question":"안녕",
		"answer":"안녕하멍!🐾"
	},
	{
		"question":"나이",
		"answer":"비밀이멍!🐾"
	},
	{
		"question":"이름",
		"answer":"양말이라고 하멍!🐾"
	},
]

var question = "";
var answer = "";
var key = 0;

function talk_input() {
	const input = document.getElementById("input").value;
	const reply = document.getElementById("dogConsole");
	var follow = 0; //따라하기 

	if(key == 1) {
		if(input == "Yes"){
			reply.innerHTML = "대답을 입력해달라멍!";
			key = 2;
		} else {
			reply.innerHTML = "다음엔 꼭 알려달라멍..";
			key = 0;
		}
		return;
	}
	if(key == 2) {
		answer = input;
		reply.innerHTML	= "말을 배웠다멍!";
		json.push({question: `${question}`, answer:`${answer}`}); //데이터 추가
		key=0; //따라하기 종료
		return;
	}
	for(let i=0; i<json.length; i++) {
		if(input == json[i].question){
			reply.innerHTML = json[i].answer;
			return;
		}
	}


	if (input == "") {
		reply.innerHTML = "메세지를 입력하라멍🐾";
	} 
	else if (input == "불꺼줘") {
		document.body.style.backgroundColor="#000000";
		reply.style.color = "#ffffff";
		reply.innerHTML = "불을 껐다멍🌛";
	} 
	else if (input == "불켜줘") {
		document.body.style.backgroundColor="#ffffff";
		reply.style.color = "#000000";
		reply.innerHTML = "불을 켰다멍🌞";
	} 
	else if (input == "나 따라해봐") {
		if (follow == 0) {
			reply.innerHTML ="따라해보겠멍!🐾";
			follow=1;
		}
		if (follow == 1)  {
		reply.innerHTML = `${input} 멍멍!🐾`;
		typewriter.typeString('그만 따라해 라고 치면 그만할거야')
	    .pauseFor(2500)
	    .deleteAll()
		}
	}
	/*else if (follow == 1 && input != "그만 따라해")  {
		reply.innerHTML = `${input} 멍멍!🐾`;
		typewriter.typeString('그만 따라해 라고 치면 그만할거야')
	    .pauseFor(2500)
	    .deleteAll()
	}*/
	else if (input == "그만 따라해") {
		reply.innerHTML	= "그만 따라하겠멍!🐾";
		follow=0;
	}
	else if (key==0){
		reply.innerHTML	= "말을 가르쳐주겠멍?(Yes or No)";
		question = input;
		key = 1;
	}
}

var check = document.getElementById('check');

	var typewriter = new Typewriter(check, {
	    loop: false
	});

	typewriter.typeString('말을 걸어보자')
	    .pauseFor(2500)
	    .deleteAll()
	    /*.typeString('다시 한 번 말해보자.')
	    .pauseFor(2500)*/
	    .start();