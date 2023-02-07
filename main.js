const question1 = document.getElementById("answer1");
const question1btn = document.getElementById("question-buttonOne");
question1btn.onclick = function () {
	if(question1.style.display !== "none"){
		question1.style.display = "none";
		question1btn.innerHTML=`What is Netflix?
		<i class="fa fa-2x fa-angle-down" aria-hidden="true"></i>`;
	}else{
		question1.style.display = "block";
		question1btn.innerHTML=`What is Netflix?
		<i class="fa fa-2x fa-angle-up" aria-hidden="true"></i>`;
	}
};
// QUESTION 2
const question2 = document.getElementById("answer2");
const question2btn = document.getElementById("question-buttonTwo");
question2btn.onclick = function () {
	if(question2.style.display !== "none"){
		question2.style.display = "none";
		question2btn.innerHTML=`How much does Netflix cost?
		<i class="fa fa-2x fa-angle-down" aria-hidden="true"></i>`
	}else{
		question2.style.display = "block";
		question2btn.innerHTML=`How much does Netflix cost?
		<i class="fa fa-2x fa-angle-up" aria-hidden="true"></i>`
	}
};
// QUESTION 3
const question3 = document.getElementById("answer3");
const question3btn = document.getElementById("question-buttonThree");
question3btn.onclick = function () {
	if(question3.style.display !== "none"){
		question3.style.display = "none";
		question3btn.innerHTML=`Where can I watch?
		<i class="fa fa-2x fa-angle-down" aria-hidden="true"></i>`
	}else{
		question3.style.display = "block";
		question3btn.innerHTML =`Where can I watch?
		<i class="fa fa-2x fa-angle-up" aria-hidden="true"></i>`
	}
};
// QUESTION 4
const question4 = document.getElementById("answer4");
const question4btn = document.getElementById("question-buttonFour");
question4btn.onclick = function () {
	if(question4.style.display !== "none"){
		question4.style.display = "none";
		question4btn.innerHTML=` How do I cancel?
		<i class="fa fa-angle-down fa-2x" aria-hidden="true"></i>`
	}else{
		question4.style.display = "block";
		question4btn.innerHTML=` How do I cancel?
		<i class="fa fa-angle-up fa-2x" aria-hidden="true"></i>`
	}
};
// QUESTION 5
const question5 = document.getElementById("answer5");
const question5btn = document.getElementById("question-buttonFive");
question5btn.onclick = function () {
	if(question5.style.display !== "none"){
		question5.style.display = "none";
		question5btn.innerHTML=`What can I watch on Netflix?
		<i class="fa fa-angle-down fa-2x" aria-hidden="true"></i>`
	}else{
		question5.style.display = "block";
		question5btn.innerHTML=`What can I watch on Netflix?
		<i class="fa fa-angle-up fa-2x" aria-hidden="true"></i>`
	}
};
// QUESTION 6
const question6 = document.getElementById("answer6");
const question6btn = document.getElementById("question-buttonSix");
question6btn.onclick = function () {
	if(question6.style.display !== "none"){
		question6.style.display = "none";
		question6btn.innerHTML=` Is Netflix good for kids?
		<i class="fa fa-angle-down fa-2x" aria-hidden="true"></i>`
	}else{
		question6.style.display = "block";
		question6btn.innerHTML=` Is Netflix good for kids?
		<i class="fa fa-angle-up fa-2x" aria-hidden="true"></i>`
	}
};


// footer button

const footerdropdown = document.getElementById("dropdown");
const footerbutton = document.getElementById("footer-buttonOne");
footerbutton.onclick = function () {
	if(footerdropdown.style.display !== "none"){
		footerdropdown.style.display = "none";
	}else{
		footerdropdown.style.display = "block";
	}
};

// header button
const headerdropdown = document.getElementById("header-dropdown");
const headerbutton = document.getElementById("header-buttonOne");
headerbutton.onclick = function () {
	if(headerdropdown.style.display !== "none"){
		headerdropdown.style.display = "none";
	}else{
		headerdropdown.style.display = "block";
	}
};
