console.log('bonus')


for (let i=0; i< membriTeam.length;i++){
    const member = membriTeam[i]
    // console.log(membriTeam[i])
    const nameMember = member.nome
    const roleMember = member.ruolo
    const pictureMember = member.foto
    memberEl.innerHTML+= `<div class="col-4 bg-white p-0 m-2 mc-adaptation"> 
    <img style="width:100% " src="${pictureMember}" alt="">
    <p class="member text-center">${nameMember}</p> 
    <p class="role text-center">${roleMember}</p>
    </div>`
}