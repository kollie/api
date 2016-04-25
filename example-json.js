var person = {
	name: 'Israel',
	age: 23
};

var personJSON = JSON.stringify(person);
console.log(personJSON);
console.log(typeof personJSON);

var personObject = JSON.parse(personJSON);
console.log(typeof personObject);

console.log('Challenge Area');

var animal = '{"name": "Petty"}';

var animalObject = JSON.parse(animal);
animalObject.age = 3;


animal = JSON.stringify(animalObject);

console.log(animal);
