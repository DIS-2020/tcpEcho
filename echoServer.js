
//Hent 'net' biblioteket og gem det i en variabel
var net = "???"

//Herunder skal net's createServer-funktion benyttes med en callback-funktion der tager et socket objekt
/* Kald create server */(function(socket) {
socket.setEncoding("utf8"); //Den her skal I ikke røre

//Skriv noget til potentielle lyttere her

//Her skal I skrive hvad jeres socket skal gøre, når den modtager data med en callback-funktion

// Vi lukket socket ned ved afslutning
socket.on("end", function() {
    console.log("Client connection is terminated.")
});
}).listen(/* indsæt jeres port her*/, /* Indsæt jeres private IP-adresse her*/);