const forma = document.querySelector('#forma');
const selekcija = document.querySelector('#select-dino');
const dugme = document.querySelector('#btn-all');
const polje = document.querySelector('#textarea');

const inputKupac = document.querySelector('#kupac');
const sb = document.querySelector('#select-dino');
const divIspis = document.querySelector('#item-container');


let dinos = [
    {
        id: 0,
        name: 'Scipionyx',
        img: 'http://images.dinosaurpictures.org/Scipionyx_QY_200_3742.jpg',
        cena: 221
    },
    {
        id: 1,
        name: 'Becklespinax',
        img: 'http://images.dinosaurpictures.org/altispinax-becklespinax_e05c.jpg',
        cena: 275
    },
    {
        id: 2,
        name: 'Sciurumimus',
        img: 'http://images.dinosaurpictures.org/Sciurumimus_albersdoerferi_web_fa15.jpg',
        cena: 341
    },
    {
        id: 3,
        name: 'Hypsilophodon',
        img: 'http://images.dinosaurpictures.org/hypsilophodon-1024x636_6963.jpg',
        cena: 189
    },
    {
        id: 4,
        name: 'Dacentrurus',
        img: 'http://images.dinosaurpictures.org/Dacentrurus_20140118_5d27.jpg',
        cena: 315
    },
    {
        id: 5,
        name: 'Iguanodon',
        img: 'http://images.dinosaurpictures.org/Iguanodon_1157950_ea00.jpg',
        cena: 374
    },
    {
        id: 6,
        name: 'Asylosaurus',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Asylosaurus_NT.jpg/440px-Asylosaurus_NT.jpg',
        cena: 301
    },
    {
        id: 7,
        name: 'Efraasia',
        img: 'http://images.dinosaurpictures.org/efraasia_0a4e.jpg',
        cena: 199
    },
    {
        id: 8,
        name: 'Cryptosaurus',
        img: 'https://images.dinosaurpictures.org/Cryptosaurus/Cryptosaurus_tumblr_inline_on3a5nVchm1rx4yme_1280_94c8.jpg',
        cena: 218
    }
]

const optionKupovina = document.createElement('optgroup');
optionKupovina.label = 'Jaja dinosaurusa';
selekcija.appendChild(optionKupovina);


dinos.forEach(dinosaurus => {
    const opcija = document.createElement('option');
    opcija.textContent = dinosaurus.name;
    opcija.value = dinosaurus.name.toLowerCase();
    optionKupovina.appendChild(opcija);
});

const validnaForma = () => inputKupac.value.trim() !== ''
                        && inputKupac.value.length >= 4
                        && sb.value !== ''


let nizNarudzbina = [];
let cenaNarudzbine = 0;
let unosTextarea = '';
// let narudzbina = {};

forma.addEventListener('submit', e => {
    e.preventDefault();
    if(!validnaForma()){
        console.log("Forma nije validna! Ispuniti sva potrebna polja..");
        return;
    }else{
        for(let i = 0; i < dinos.length; i++){
            if(sb.value === dinos[i].name.toLowerCase()){
                cenaNarudzbine = dinos[i].cena;
            }
        }
        if(polje.value === ''){
            unosTextarea = '/';
        }else{
            unosTextarea = polje.value;
        }
        // narudzbina["IzabraniDinosaurus"] = sb.value;
        // narudzbina["Kupac"] = inputKupac.value;
        // narudzbina["Napomena"] = unosTextarea.value;
        // narudzbina["Cena"] = cenaNarudzbine;

        // nizNarudzbina.push(narudzbina);

        nizNarudzbina.push(
            {
            IzabraniDinosaurus: sb.value,
            Kupac: inputKupac.value,
            Napomena: unosTextarea,
            Cena: cenaNarudzbine,
            }
        );
        // console.log(nizNarudzbina[0]);
    }
    inputKupac.value = '';
    polje.value = '';
});     

dugme.addEventListener('click', () => {
    nizNarudzbina.forEach(porudzbina => {
        const divPorudzbina = document.createElement('div');
        divPorudzbina.className = "item";
        divIspis.appendChild(divPorudzbina);

        const pKupac = document.createElement('p');
        const spanKupac = document.createElement('span');
        divPorudzbina.appendChild(pKupac);
        pKupac.appendChild(spanKupac);
        pKupac.textContent = `${porudzbina.Kupac}`;

        const pNapomena = document.createElement('p');
        const spanNapomena = document.createElement('span');
        divPorudzbina.appendChild(pNapomena);
        pNapomena.appendChild(spanNapomena);
        pKupac.textContent = `${porudzbina.Napomena}`;
        
        const pDinosaurus = document.createElement('p');
        const spanDinosaurus = document.createElement('span');
        divPorudzbina.appendChild(pDinosaurus);
        pDinosaurus.appendChild(spanDinosaurus);
        pKupac.textContent = `${porudzbina.IzabraniDinosaurus}`;

        const pCena = document.createElement('p');
        const spanCena = document.createElement('span');
        divPorudzbina.appendChild(pCena);
        pCena.appendChild(spanCena);
        pKupac.textContent = `${porudzbina.Cena}`;
        
        const pDugmeObrisi = document.createElement('p');
        const dugmeObrisi = document.createElement('button');
        divPorudzbina.appendChild(pDugmeObrisi);
        pDugmeObrisi.appendChild(dugmeObrisi);
        dugmeObrisi.textContent = "Obrisi";
    });
});



