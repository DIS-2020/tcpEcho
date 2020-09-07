# Echo server/client

I dag skal vi lave vores første server og client fra bunden. Jeg har her givet jer noget kode I skal færddiggøre, og den følgende guide vil hjælpe jer på vej.
Det er en god idé at have koden fra første øvelsestime ved siden for inspiration. Desuden kan I finde brugbar dokumentation på dette link - https://nodejs.org/api/net.html. 

Klon dette repository ned på din computer. Den burde meget gerne indeholde en mappe med to filer - server og client.

## SERVER
### Step 1
Vi starter med at lave vores server. Inde i server filen skal i først bruge 'net' biblioteket fra node. Gem det i en variabel.

### Step 2
Nu skal I benytte net's (altså jeres variable) createServer-funktion med en callback-funktion, der tager et socket-objekt med som parameter. Funktionen er allerede lavet for jer, i skal bare kalde den rigtige metode fra 'net'.

### Step 3
I den her callback funktion kan vi skrive til hvem end der laver forbindelse til vores socket. I kan kalde '.write' på jeres callback-funktions parameter og skrive en lille besked.

### Step 4
Nu kan I fortælle jeres server hvad den skal gøre når den modtager data. Dette gøres ved at kalde '.on' fra jeres parameter. Jeres server modtager "data", hvorefter I kan behandle denne data i en funktion. Prøv her at sørge for at serveren skriver den data den modtager tilbage til dens socket (derfor en 'echo'-server). 

### Step 5 
Til slut skal I give .listen jeres ønskede port samt jeres private IP-adresse. (Windows kan finde deres private IP-adresse ved at skrive 'ipconfig' i terminalen og OS X kan finde det under 'Netværk' i systemindstillinger.

I kan derefter teste jeres server ved at skrive 'telnet *JERES IP* *JERES PORT*' i terminalen, ligesom første øvelsestime.

## CLIENT
### Step 1
Gå nu ind i jeres client-fil. Først skal i som før, hente net-biblioteket.

### Step 2
Jeg har allerede lavet jeres client objekt, herfra skal i kalde en metode '.connect'. Den tager 3 parameter med; den ønskede port, destinations IP'en og en funktion. Udfyld porten og IP-adressen.

### Step 3
Brug ligesom før '.write' til at skrive noget til serveren når I tilsluttet.

### Step 4
Igen ligesom på server-siden, brug '.on' til at behandle den data i modtager fra serveren (for eksempel skriv den i loggen).

I er færdige! Prøv nu at starte jeres server og client ved at åbne to terminaler og skrive henholdvis "node echoServer.js" og "node echoClient.js". Det I sender fra Client-siden burde meget gerne blive sendt tilbage. Eventuelt prøv at bytte IP med din sidemakker.

Den færdige løsning ligger på den branch der hedder 'solution'.
