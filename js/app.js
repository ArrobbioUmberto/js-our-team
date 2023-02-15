console.log('ciao')

// Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
// Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg

const teamMember = {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    picture: './img/wayne-barnett-founder-ceo.jpg',
}

const teamMemberS = [
    teamMember,
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        picture: './img/angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        picture: './img/walter-gordon-office-manager.jpg',
    }, 
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        picture: './img/angela-lopez-social-media-manager.jpg',
    }, 
    {
        name: 'Scott Estrada',
        role: 'Developer',
        picture: './img/scott-estrada-developer.jpg',
    }, 
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        picture: './img/barbara-ramos-graphic-designer.jpg',
    }
]


for (let key in teamMemberS) {   // qui stampo tutte le proprietà di un oggetto tramite un ciclo for - in 
    // console.log(membriTeam[key])
}

const memberEl = document.querySelector('.row')

// for (let i=0; i< membriTeam.length;i++){
//     const member = membriTeam[i]
//     // console.log(membriTeam[i])
//     const nameMember = member.nome
//     const roleMember = member.ruolo
//     const pictureMember = member.foto
//     memberEl.innerHTML+= `<div class="col-4 bg-white p-0 m-2 mc-adaptation"> 
//     ${pictureMember},
//    ${nameMember}, 
//    ${roleMember}
//     </div>`
// }


