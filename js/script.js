//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// madeBy kkajetan_

//////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////


const karieraBtn = document.querySelector("#career");
const kryptoBtn = document.querySelector("#crypto");
const metaleBtn = document.querySelector("#metalsBtn");
const bankBtn = document.querySelector("#bank");
const sekcjaKariera = document.querySelector("#sectionCareer");
const sekcjaKrypto = document.querySelector("#sectionCrypto");
const sekcjaMetali = document.querySelector("#sectionMetals");
const sekcjaBank = document.querySelector("#sectionBank");
const zmianaRokuBtn = document.querySelector("#nextYear");
const szukajPracyBtn = document.querySelector("#changeJob");
const podniesUmiejetnosciBtn = document.querySelector("#study");
const nastepnyRokBtn = document.querySelector("#nextYear");
const bitcoinKurs = document.querySelector("#bitcoinKurs");
const ethereumKurs = document.querySelector("#ethereumKurs");
const carrdanoKurs = document.querySelector("#carrdanoKurs");
const litecoinKurs = document.querySelector("#litecoinKurs");
const zlotoKurs = document.querySelector("#zlotoKurs");
const srebroKurs = document.querySelector("#srebroKurs");
const platynaKurs = document.querySelector("#platynaKurs");
const diamentyKurs = document.querySelector("#diamentyKurs");
const metalsWallet = document.querySelector("#metalsWallet");
const goldBuyBtn = document.querySelector("#goldBuy");
const goldSellBtn = document.querySelector("#goldSell");
const silverBuyBtn = document.querySelector("#silverBuy");
const silverSellBtn = document.querySelector("#silverSell");
const platinumBuyBtn = document.querySelector("#platinumBuy");
const platinumSellBtn = document.querySelector("#platinumSell");
const diamondBuyBtn = document.querySelector("#diamondBuy");
const diamondSellBtn = document.querySelector("#diamondSell");
const btcBuyBtn = document.querySelector("#btcBuy");
const btcSellBtn = document.querySelector("#btcSell");
const ethBuyBtn = document.querySelector("#ethBuy");
const ethSellBtn = document.querySelector("#ethSell");
const crdBuyBtn = document.querySelector("#crdBuy");
const crdSellBtn = document.querySelector("#crdSell");
const ltcBuyBtn = document.querySelector("#ltcBuy");
const ltcSellBtn = document.querySelector("#ltcSell");
const cryptoWallet = document.querySelector("#cryptoWallet");
const chwilowka1 = document.querySelector("#loan1");
const chwilowka2 = document.querySelector("#loan2");
const chwilowka3 = document.querySelector("#loan3");
const chwilowka4 = document.querySelector("#loan4");
const kredytySekcja = document.querySelector(".kredyty");
const meSection = document.querySelector(".madeBy");
let kredyt = 0;
let btc = 111980.45;
let eth = 7618.12;
let crd = 1.57;
let ltc = 405.13;
let rok = 2023;
let kasa = 2000;
let krypto = [btc, eth, crd, ltc];
let iloscBtc = 0;
let iloscEth = 0;
let iloscCrd = 0;
let iloscLtc = 0;
let zloto = 8620.61;
let srebro = 101.66;
let platyna = 4271.77;
let diamenty = 34219.82;
let surowce = [zloto, srebro, platyna, diamenty];
let iloscZlota = 0;
let iloscSrebra = 0;
let iloscPlatyny = 0;
let iloscDiamentow = 0;
let wynagrodzenie = 0;
let umiej1 = 1;
let umiej2 = 1;
let umiej3 = 1;
let umiej4 = 1;
let sumaUmiejetnosci = 4;
let tury = 0;
let licznikChwilowek = 6;
let wersjachwilowki;
const prace1 = ["Kelner", "Kasjer", "Taksówkarz"];
const prace2 = ["Tirowiec", "Doradca klienta", "Mechanik"];
const prace3 = ["Architekt", "Lekarz", "Prawnik"];
const prace4 = [
	"Front-end Developer",
	"Back-end Developer",
	"Full-stack Developer",
];

// alert(
// 	"Twoim celem jest osiągnąć 100 000 PLN w jak najszybszym czasie! Na start otrzymujesz 2000 PLN. Powodzenia!"
// );

const chowajMenu = () => {
	sekcjaKariera.classList.remove("show");
	sekcjaKariera.classList.add("hide");
	sekcjaKrypto.classList.remove("show");
	sekcjaKrypto.classList.add("hide");
	sekcjaMetali.classList.remove("show");
	sekcjaMetali.classList.add("hide");
	sekcjaBank.classList.remove("show");
	sekcjaBank.classList.add("hide");
	meSection.classList.add("hide");
};
const karieraMenu = () => {
	chowajMenu();
	sekcjaKariera.classList.add("show");
};
const kryptoMenu = () => {
	chowajMenu();
	sekcjaKrypto.classList.add("show");
};
const towaryMenu = () => {
	chowajMenu();
	sekcjaMetali.classList.add("show");
};
const bankMenu = () => {
	chowajMenu();
	sekcjaBank.classList.add("show");
};
const podniesUmiejetnosci = () => {
	if (kasa >= 500) {
		kasa -= 500;
		umiej1 += 0.5;
		umiej2 += 0.5;
		umiej3 += 0.5;
		umiej4 += 0.5;
		sumaUmiejetnosci += 2;
		const umiejetnosc1 = (document.querySelector(
			"#skill1"
		).innerHTML = `Samodyscyplina: ${umiej1}`);
		const umiejetnosc2 = (document.querySelector(
			"#skill2"
		).innerHTML = `Umiejętności twarde: ${umiej2}`);
		const umiejetnosc3 = (document.querySelector(
			"#skill3"
		).innerHTML = `Umiejętności miekkie: ${umiej3}`);
		const umiejetnosc4 = (document.querySelector(
			"#skill4"
		).innerHTML = `Wiedza ${umiej4}`);
		aktualizacjaBanku();
	} else {
		alert(`Brakuje ci ${500 - kasa} PLN`);
	}
};
const szukajPracy = () => {
	const wynagrodzenieStatus = document.querySelector(".salary");
	if (sumaUmiejetnosci < 10 && sumaUmiejetnosci > 0) {
		let praca = prace1[Math.floor(Math.random() * prace1.length)];
		document.querySelector(".job").innerHTML = `Wykonywana praca: ${praca}`;
		switch (praca) {
			case "Kelner":
				wynagrodzenie = 2200;
				break;
			case "Kasjer":
				wynagrodzenie = 2500;
				break;
			case "Taksówkarz":
				wynagrodzenie = 2400;
				break;
		}
	} else if (sumaUmiejetnosci < 20 && sumaUmiejetnosci > 10) {
		let praca = prace2[Math.floor(Math.random() * prace2.length)];
		document.querySelector(".job").innerHTML = `Wykonywana praca: ${praca}`;
		switch (praca) {
			case "Tirowiec":
				wynagrodzenie = 4200;
				break;
			case "Doradca klienta":
				wynagrodzenie = 3900;
				break;
			case "Mechanik":
				wynagrodzenie = 4500;
				break;
		}
	} else if (sumaUmiejetnosci < 30 && sumaUmiejetnosci > 20) {
		let praca = prace3[Math.floor(Math.random() * prace3.length)];
		document.querySelector(".job").innerHTML = `Wykonywana praca: ${praca}`;
		switch (praca) {
			case "Architekt":
				wynagrodzenie = 7000;
				break;
			case "Lekarz":
				wynagrodzenie = 6200;
				break;
			case "Prawnik":
				wynagrodzenie = 6800;
				break;
		}
	} else if (sumaUmiejetnosci > 30) {
		let praca = prace4[Math.floor(Math.random() * prace4.length)];
		document.querySelector(".job").innerHTML = `Wykonywana praca: ${praca}`;
		switch (praca) {
			case "Front-end Developer":
				wynagrodzenie = 9200;
				break;
			case "Back-end Developer":
				wynagrodzenie = 9500;
				break;
			case "Full-stack Developer":
				wynagrodzenie = 10800;
				break;
		}
	}
	wynagrodzenieStatus.innerHTML = `Wynagrodzenie: ${wynagrodzenie} PLN`;
	szukajPracyBtn.classList.add("hide");
};
const czyWygrales = () => {
	kasa >= 100000
		? alert(`Brawo udało ci się zgromadzić ${kasa} w ${rok - 2023} lata.`)
		: alert(`Otrzymałeś ${wynagrodzenie} PLN.`);
};
const rynekKrypto = () => {
	krypto = krypto.map((element) =>
		(element * (Math.random() * (1.3 - 0.7) + 0.7)).toFixed(2)
	);
	bitcoinKurs.innerHTML = krypto[0];
	ethereumKurs.innerHTML = krypto[1];
	carrdanoKurs.innerHTML = krypto[2];
	litecoinKurs.innerHTML = krypto[3];
};
const rynekSurowcow = () => {
	surowce = surowce.map((element) =>
		(element * (Math.random() * (1.3 - 0.7) + 0.7)).toFixed(2)
	);
	zlotoKurs.innerHTML = surowce[0];
	srebroKurs.innerHTML = surowce[1];
	platynaKurs.innerHTML = surowce[2];
	diamentyKurs.innerHTML = surowce[3];
};
const szansaStracenia = (e) =>{
	
}

const nastepnyRok = () => {
	rynekKrypto();
	rynekSurowcow();
	kasa += wynagrodzenie;
	szukajPracyBtn.classList.remove("hide");
	czyWygrales();
	splataChwilowki(wersjachwilowki);
	aktualizacjaBanku();
};
const kupnoZlota = () => {
	let ilekupujesz = prompt("Ile chcesz uncji kupić");
	if (ilekupujesz === "") {
		alert("Nie podałeś ilości!");
	} else if (typeof ilekupujesz !== "object") {
		ilekupujesz = parseFloat(ilekupujesz);
		let cena = ilekupujesz * surowce[0];
		if (kasa < cena) {
			alert(`Brakuje ci ${cena - kasa} PLN`);
		} else {
			iloscZlota += ilekupujesz;
			alert(
				`Zakupiono pomyślnie. Aktualnie posiadasz ${iloscZlota} uncji złota.`
			);
			kasa -= cena;
			aktualizacjaBanku();
		}
	}
};
const kupnoSrebra = () => {
	let ilekupujesz = prompt("Ile chcesz uncji kupić");
	if (ilekupujesz === "") {
		alert("Nie podałeś ilości!");
	} else if (typeof ilekupujesz !== "object") {
		ilekupujesz = parseFloat(ilekupujesz);
		let cena = ilekupujesz * surowce[1];
		if (kasa < cena) {
			alert(`Brakuje ci ${cena - kasa} PLN`);
		} else {
			iloscSrebra += ilekupujesz;
			alert(
				`Zakupiono pomyślnie. Aktualnie posiadasz ${iloscSrebra} uncji srebra.`
			);
			kasa -= cena;
			aktualizacjaBanku();
		}
	}
};
const kupnoPlatyny = () => {
	let ilekupujesz = prompt("Ile chcesz uncji kupić");
	if (ilekupujesz === "") {
		alert("Nie podałeś ilości!");
	} else if (typeof ilekupujesz !== "object") {
		ilekupujesz = parseFloat(ilekupujesz);
		let cena = ilekupujesz * surowce[2];
		if (kasa < cena) {
			alert(`Brakuje ci ${cena - kasa} PLN`);
		} else {
			iloscPlatyny += ilekupujesz;
			alert(
				`Zakupiono pomyślnie. Aktualnie posiadasz ${iloscPlatyny} uncji platyny.`
			);
			kasa -= cena;
			aktualizacjaBanku();
		}
	}
};
const kupnoDiamentow = () => {
	let ilekupujesz = prompt("Ile chcesz uncji kupić");
	if (ilekupujesz === "") {
		alert("Nie podałeś ilości!");
	} else if (typeof ilekupujesz !== "object") {
		ilekupujesz = parseFloat(ilekupujesz);
		let cena = ilekupujesz * surowce[3];
		if (kasa < cena) {
			alert(`Brakuje ci ${cena - kasa} PLN`);
		} else {
			iloscDiamentow += ilekupujesz;
			alert(
				`Zakupiono pomyślnie. Aktualnie posiadasz ${iloscDiamentow} karat diamentów.`
			);
			kasa -= cena;
			aktualizacjaBanku();
		}
	}
};

const kupnoBtc = () => {
	let ilekupujesz = prompt("Ile chcesz kupić");
	if (ilekupujesz === "") {
		alert("Nie podałeś ilości!");
	} else if (typeof ilekupujesz !== "object") {
		ilekupujesz = parseFloat(ilekupujesz);
		let cena = ilekupujesz * krypto[0];
		if (kasa < cena) {
			alert(`Brakuje ci ${cena - kasa} PLN`);
		} else {
			iloscBtc += ilekupujesz;
			alert(`Zakupiono pomyślnie. Aktualnie posiadasz ${iloscBtc} BTC.`);
			kasa -= cena;
			aktualizacjaBanku();
		}
	}
};
const kupnoEth = () => {
	let ilekupujesz = prompt("Ile chcesz kupić");
	if (ilekupujesz === "") {
		alert("Nie podałeś ilości!");
	} else if (typeof ilekupujesz !== "object") {
		ilekupujesz = parseFloat(ilekupujesz);
		let cena = ilekupujesz * krypto[1];
		if (kasa < cena) {
			alert(`Brakuje ci ${cena - kasa} PLN`);
		} else {
			iloscEth += ilekupujesz;
			alert(`Zakupiono pomyślnie. Aktualnie posiadasz ${iloscEth} ETH.`);
			kasa -= cena;
			aktualizacjaBanku();
		}
	}
};
const kupnoCrd = () => {
	let ilekupujesz = prompt("Ile chcesz kupić");
	if (ilekupujesz === "") {
		alert("Nie podałeś ilości!");
	} else if (typeof ilekupujesz !== "object") {
		ilekupujesz = parseFloat(ilekupujesz);
		let cena = ilekupujesz * krypto[2];
		if (kasa < cena) {
			alert(`Brakuje ci ${cena - kasa} PLN`);
		} else {
			iloscCrd += ilekupujesz;
			alert(`Zakupiono pomyślnie. Aktualnie posiadasz ${iloscCrd} CRD.`);
			kasa -= cena;
			aktualizacjaBanku();
		}
	}
};
const kupnoLtc = () => {
	let ilekupujesz = prompt("Ile chcesz kupić");
	if (ilekupujesz === "") {
		alert("Nie podałeś ilości!");
	} else if (typeof ilekupujesz !== "object") {
		ilekupujesz = parseFloat(ilekupujesz);
		let cena = ilekupujesz * krypto[3];
		if (kasa < cena) {
			alert(`Brakuje ci ${cena - kasa} PLN`);
		} else {
			iloscLtc += ilekupujesz;
			alert(`Zakupiono pomyślnie. Aktualnie posiadasz ${iloscLtc} LTC.`);
			kasa -= cena;
			aktualizacjaBanku();
		}
	}
};
const sprzedazBtc = () => {
	let ilesprzedajesz = prompt("Ile chcesz sprzedać");
	if (ilesprzedajesz === "") {
		alert("Nie podałeś ilości!");
	} else {
		ilesprzedajesz = parseFloat(ilesprzedajesz);
		if (ilesprzedajesz <= iloscBtc) {
			kasa += krypto[0] * ilesprzedajesz;
			iloscBtc -= ilesprzedajesz;
			alert(
				`Pomyślnie sprzedałeś krypto. Otrzymałeś ${krypto[0] * ilesprzedajesz}`
			);
			aktualizacjaBanku();
		} else {
			alert("Nie masz wystarczającej ilości kryptowaluty.");
		}
	}
};
const sprzedazEth = () => {
	let ilesprzedajesz = prompt("Ile chcesz sprzedać");
	if (ilesprzedajesz === "") {
		alert("Nie podałeś ilości!");
	} else {
		ilesprzedajesz = parseFloat(ilesprzedajesz);
		if (ilesprzedajesz <= iloscBtc) {
			kasa += krypto[1] * ilesprzedajesz;
			iloscEth -= ilesprzedajesz;
			alert(
				`Pomyślnie sprzedałeś krypto. Otrzymałeś ${krypto[1] * ilesprzedajesz}`
			);
			aktualizacjaBanku();
		} else {
			alert("Nie masz wystarczającej ilości kryptowaluty.");
		}
	}
};
const sprzedazCrd = () => {
	let ilesprzedajesz = prompt("Ile chcesz sprzedać");
	if (ilesprzedajesz === "") {
		alert("Nie podałeś ilości!");
	} else {
		ilesprzedajesz = parseFloat(ilesprzedajesz);
		if (ilesprzedajesz <= iloscCrd) {
			kasa += krypto[2] * ilesprzedajesz;
			iloscCrd -= ilesprzedajesz;
			alert(
				`Pomyślnie sprzedałeś krypto. Otrzymałeś ${krypto[2] * ilesprzedajesz}`
			);
			aktualizacjaBanku();
		} else {
			alert("Nie masz wystarczającej ilości kryptowaluty.");
		}
	}
};
const sprzedazLtc = () => {
	let ilesprzedajesz = prompt("Ile chcesz sprzedać");
	if (ilesprzedajesz === "") {
		alert("Nie podałeś ilości!");
	} else {
		ilesprzedajesz = parseFloat(ilesprzedajesz);
		if (ilesprzedajesz <= iloscLtc) {
			kasa += krypto[3] * ilesprzedajesz;
			iloscBtc -= ilesprzedajesz;
			alert(
				`Pomyślnie sprzedałeś krypto. Otrzymałeś ${krypto[3] * ilesprzedajesz}`
			);
			aktualizacjaBanku();
		} else {
			alert("Nie masz wystarczającej ilości kryptowaluty.");
		}
	}
};
const sprzedazZlota = () => {
	let ilesprzedajesz = prompt("Ile chcesz sprzedać");
	if (ilesprzedajesz === "") {
		alert("Nie podałeś ilości!");
	} else {
		ilesprzedajesz = parseFloat(ilesprzedajesz);
		if (ilesprzedajesz <= iloscZlota) {
			kasa += surowce[0] * ilesprzedajesz;
			iloscZlota -= ilesprzedajesz;
			alert(
				`Pomyślnie sprzedałeś metal. Otrzymałeś ${surowce[0] * ilesprzedajesz}`
			);
			aktualizacjaBanku();
		} else {
			alert("Nie masz wystarczającej ilości metali.");
		}
	}
};
const sprzedazSrebra = () => {
	let ilesprzedajesz = prompt("Ile chcesz sprzedać");
	if (ilesprzedajesz === "") {
		alert("Nie podałeś ilości!");
	} else {
		ilesprzedajesz = parseFloat(ilesprzedajesz);
		if (ilesprzedajesz <= iloscSrebra) {
			kasa += surowce[1] * ilesprzedajesz;
			iloscSrebra -= ilesprzedajesz;
			alert(
				`Pomyślnie sprzedałeś metal. Otrzymałeś ${surowce[1] * ilesprzedajesz}`
			);
			aktualizacjaBanku();
		} else {
			alert("Nie masz wystarczającej ilości metali.");
		}
	}
};
const sprzedazPlatyny = () => {
	let ilesprzedajesz = prompt("Ile chcesz sprzedać");
	if (ilesprzedajesz === "") {
		alert("Nie podałeś ilości!");
	} else {
		ilesprzedajesz = parseFloat(ilesprzedajesz);
		if (ilesprzedajesz <= iloscPlatyny) {
			kasa += surowce[2] * ilesprzedajesz;
			iloscPlatyny -= ilesprzedajesz;
			alert(
				`Pomyślnie sprzedałeś metal. Otrzymałeś ${surowce[2] * ilesprzedajesz}`
			);
			aktualizacjaBanku();
		} else {
			alert("Nie masz wystarczającej ilości metali.");
		}
	}
};
const sprzedazDiamentow = () => {
	let ilesprzedajesz = prompt("Ile chcesz sprzedać");
	if (ilesprzedajesz === "") {
		alert("Nie podałeś ilości!");
	} else {
		ilesprzedajesz = parseFloat(ilesprzedajesz);
		if (ilesprzedajesz <= iloscDiamentow) {
			kasa += surowce[3] * ilesprzedajesz;
			iloscDiamentow -= ilesprzedajesz;
			alert(
				`Pomyślnie sprzedałeś metal. Otrzymałeś ${surowce[3] * ilesprzedajesz}`
			);
			aktualizacjaBanku();
		} else {
			alert("Nie masz wystarczającej ilości metali.");
		}
	}
};
const portfelKrypto = () => {
	alert(`Posiadasz:
    ${iloscBtc} BTC
    ${iloscEth} ETH
    ${iloscCrd} CRD
    ${iloscLtc} LTC`);
};
const portfelSurowcow = () => {
	alert(`Posiadasz:
    ${iloscZlota} Uncji złota
    ${iloscSrebra} Uncji srebra
    ${iloscPlatyny} Uncji platyny
    ${iloscDiamentow} Karat diamentów`);
};
const aktualizacjaBanku = () => {
	document.querySelector("#bankMoney").innerHTML = `Twoje saldo: ${kasa} PLN`;
};
const zmianaRoku = () => {
	rok++;
	const rokTekst = (document.querySelector(".year").innerHTML = `Rok ${rok}`);
};
const chwilowki = (wersja) => {
	if (wersja == 1) {
		kasa += 2500;
		wersjachwilowki = 1;
	} else if (wersja == 2) {
		kasa += 5000;
		wersjachwilowki = 2;
	} else if (wersja == 3) {
		kasa += 7500;
		wersjachwilowki = 3;
	} else if (wersja == 4) {
		kasa += 10000;
		wersjachwilowki = 3;
	}
	licznikChwilowek = 6;
	aktualizacjaBanku();
	kredytySekcja.classList.add("hide");
};
const splataChwilowki = (wersja) => {
	licznikChwilowek--;
	if (wersja == 1 && licznikChwilowek >= 0) {
		kasa -= 750;
	} else if (wersja == 2 && licznikChwilowek >= 0) {
		kasa -= 1200;
	} else if (wersja == 3 && licznikChwilowek >= 0) {
		kasa -= 2500;
	} else if (wersja == 4 && licznikChwilowek >= 0) {
		kasa -= 1500;
	}
	if (licznikChwilowek < 0) {
		kredytySekcja.classList.remove("hide");
	}
};

karieraBtn.addEventListener("click", karieraMenu);
kryptoBtn.addEventListener("click", kryptoMenu);
metaleBtn.addEventListener("click", towaryMenu);
bankBtn.addEventListener("click", bankMenu);
zmianaRokuBtn.addEventListener("click", zmianaRoku);
podniesUmiejetnosciBtn.addEventListener("click", podniesUmiejetnosci);
szukajPracyBtn.addEventListener("click", szukajPracy);
nastepnyRokBtn.addEventListener("click", nastepnyRok);
btcBuyBtn.addEventListener("click", kupnoBtc);
ethBuyBtn.addEventListener("click", kupnoEth);
crdBuyBtn.addEventListener("click", kupnoCrd);
ltcBuyBtn.addEventListener("click", kupnoLtc);
btcSellBtn.addEventListener("click", sprzedazBtc);
ethSellBtn.addEventListener("click", sprzedazEth);
crdSellBtn.addEventListener("click", sprzedazCrd);
ltcSellBtn.addEventListener("click", sprzedazLtc);
cryptoWallet.addEventListener("click", portfelKrypto);
chwilowka1.addEventListener("click", function () {
	chwilowki(1);
});
chwilowka2.addEventListener("click", function () {
	chwilowki(2);
});
chwilowka3.addEventListener("click", function () {
	chwilowki(3);
});
chwilowka4.addEventListener("click", function () {
	chwilowki(4);
});
goldBuyBtn.addEventListener("click", kupnoZlota);
goldSellBtn.addEventListener("click", sprzedazZlota);
silverBuyBtn.addEventListener("click", kupnoSrebra);
silverSellBtn.addEventListener("click", sprzedazSrebra);
platinumBuyBtn.addEventListener("click", kupnoPlatyny);
platinumSellBtn.addEventListener("click", sprzedazPlatyny);
diamondBuyBtn.addEventListener("click", kupnoDiamentow);
diamondSellBtn.addEventListener("click", sprzedazDiamentow);
metalsWallet.addEventListener("click", portfelSurowcow);
