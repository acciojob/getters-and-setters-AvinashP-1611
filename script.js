//complete this code
class Person {
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	get getName(){
		return this.name;
	}
	get getAge(){
		return this.age
	}
	set setName(name){
		return this.name
	}
	set setAge(Newage){
	  this.age=Newage;
	}
}

class Student extends Person {
	// constructor(name,age){
	// 	super(name,age)
	// }
	study(){
		console.log(this.name+" is studying");
	}
}

class Teacher extends Person {
	// constructor(name,age){
	// 	super(name,age)
	// }
	teach(){
		console.log(this.name+" is teaching");
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
