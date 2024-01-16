//complete this code
class Person {
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	get getName(){
		return this.name;
	}
	set setAge(age){
	  this.age=age;
	}
}

class Student extends Person {
	constructor(){
		
	}
	study(){
		console.log(this.name+" is studying");
	}
}

class Teacher extends Person {
	constructor(){
		
	}
	teach(){
		console.log(this.name+" is studying");
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;