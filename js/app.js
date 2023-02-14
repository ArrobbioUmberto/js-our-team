console.log('ciao')

// Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
// Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg

const membroTeam = {
    nome: 'Wayne Barnett',
    ruolo: 'Founder & CEO',
    foto: './img/wayne-barnett-founder-ceo.jpg',
}

const membriTeam = [
    membroTeam,
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: './img/angela-caroll-chief-editor.jpg',
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: './img/walter-gordon-office-manager.jpg',
    }, 
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: './img/angela-lopez-social-media-manager.jpg',
    }, 
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: './img/scott-estrada-developer.jpg',
    }, 
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: './img/barbara-ramos-graphic-designer.jpg',
    }
]


for (let key in membriTeam) {   // qui stampo tutte le proprietà di un oggetto tramite un ciclo for - in 
    // console.log(membriTeam[key])
}

const memberEl = document.querySelector('.row')

for (let i=0; i< membriTeam.length;i++){
    const member = membriTeam[i]
    // console.log(membriTeam[i])
    const nameMember = member.nome
    const roleMember = member.ruolo
    const pictureMember = member.foto
    memberEl.innerHTML+= `<div class="col-4 bg-white p-0 m-2 mc-adaptation"> 
    ${pictureMember},
   ${nameMember}, 
   ${roleMember}
    </div>`
}


