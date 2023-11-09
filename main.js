// Check if the name is already stored in local storage
const savedName = localStorage.getItem('name');
if (savedName) {
	document.getElementById('nameInput').value = savedName;
}

// Add an event listener to the name input field to save the name automatically
document.getElementById('nameInput').addEventListener('input', function() {
	// Get the name input value
	const name = document.getElementById('nameInput').value;

	// Save the name to local storage
	localStorage.setItem('name', name);

});


const todoList= [{
	name:'make dinner' ,
	dueDate:'2022-12-22',
	dueStartTime:'5:41',
	dueEndTime:'5:41'
 },
 {
	name:'wash dishes',
	dueDate:'2022-12-22',
	dueStartTime:'5:41AM',
	dueEndTime:'5:41AM'
 }
];//already listed todo-list

renderTodoList();//calling the function renderTodoList , check the function for how this works.
function renderTodoList(){
	let todoListHTML = ''; 

for(let i = 0; i < todoList.length ; i++){//for our index to be 0 , that is selecting the first sentence 'make dinner' , and the index is lesser than the todolist length , 0 lesser than 2 , then the increment step , 1 will be added to the index until the loop condition is not longer satisfied.
	const todoObject = todoList[i];//selecting the index 0 and 1 i.e , object created in the array todoList
	const name = todoObject.name;//the variable , "name" is selecting the object "name" in the todoList array using dot notation
	const dueDate = todoObject.dueDate;//the variable , "dueDate" is selecting the object "dueDate" in the todoList array using dot notation

	const dueStartTime = todoObject.dueStartTime;
	const dueEndTime = todoObject.dueEndTime;

	//using destructuring , we can rewrite the two codes above to be shorter.
	// const {name,dueDate} = todoObject;
	//done 
	const html = `  
<div>
<div>       
	<div>${name}</div>
	</div>
	<div>
		<div>${dueDate}</div>
	</div>
	<div>
		<div>${dueStartTime}</div>
	</div>
	<div>
		<div>${dueEndTime}</div>
	</div>
	<div>
		<button class="btn-delete" onclick="todoList.splice(${i},1 ); renderTodoList();">
			Delete
		</button>
</div>
</div>`;
			

	todoListHTML += html;
}

document.querySelector('.js-todo-list').
innerHTML = todoListHTML;
}


 function addTodo( ){

	//it is targeting the input tag to input the text for the todo
const inputElement = document.querySelector('.js-name-input');
//it is taking the value inside the input tag text and storing it inside the variable "name"
const name = inputElement.value;


//it is targeting the input tag to input the duedate  
const dateInputElement = document.querySelector('.js-due-date-input');
//it is taking the value inside the input tag duedate and storing it inside the variable dueDate"
const dueDate = dateInputElement.value;

//it is targeting the input tag to input the start-time
const startTimeInputElement = document.querySelector('.js-start-time-input');
//it is taking the value inside the input tag duedate and storing it inside the variable dueStartTime"
 const dueStartTime = startTimeInputElement.value;

		 //it is targeting the input tag to input the end-time
const endTimeInputElement = document.querySelector('.js-end-time-input');
//it is taking the value inside the input tag duedate and storing it inside the variable dueEndTime"
 const dueEndTime = endTimeInputElement.value;

//addding the input stored in the variable "name" and "dueDate" to the array.
todoList.push({
	name:name,//first "name" is for the object name and the second "name" is for the object value which is the variable "name" created
	dueDate:dueDate, //first "dueDate" is for the object name and the second "dueDate" is for the object value which is the variable "dueDate" created
	dueStartTime:dueStartTime,
	dueEndTime:dueEndTime

});

//reseting the input box to the default placeholder text after adding a todo
inputElement.value = '';
dateInputElement.value = '';
startTimeInputElement.value = '';
endTimeInputElement.value = '';

renderTodoList();
}
