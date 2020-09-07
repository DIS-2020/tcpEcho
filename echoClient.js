//Kald igen net bilblioteket og gem i en variabel

var client = new net.Socket();

client.connect(/* Ønskede Port */, /* Destinations IP-adressen */, function() {
	console.log('Connected'); // Skriver til vores log når vi er tilsluttet
	// Skriv noget til serveren med .write
});

// Brug her client.on til at behandle data i modtager fra serveren. 

//Nedenstående lukker jeres forbindelse ved termination
client.on('close', function() {
	console.log('Connection closed');
});