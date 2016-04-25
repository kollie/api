var argv = require ('yargs')
	.command('hello', 'Greets a user', function (yargs) {
		yargs.options({
			name: {
				demand: true,
				alias: 'n',
				description: 'Your first name goes here'
			},
			lastname: {
				demand: true,
				alias: 'l',
				description: 'Your last name goes here'
			}
		}).help('help');
	})
	.help('help')
	.argv;
var command = argv._[0];

console.log(argv);

if (command === 'hello' && typeof argv.name !== 'underfined' && typeof lastname !== 'underfined') {
	console.log('Hello ' + argv.name + ' ' + argv.lastname + '!');
}
else if (command === 'hello' && typeof argv.name !== 'underfined') {
	console.log('Hello ' + argv.name +'!'); 
} 
else if (command === 'hello') {
	console.log('Hello world');
}