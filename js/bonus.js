console.log('bonus')


for (let i=0; i< teamMemberS.length;i++){
    const member = teamMemberS[i]
    // console.log(membriTeam[i])
    const nameMember = member.name
    const roleMember = member.role
    const pictureMember = member.picture
    memberEl.innerHTML+= `<div class="col-4 bg-white p-0 m-2 mc-adaptation"> 
    <img style="width:100% " src="${pictureMember}" alt="">
    <p class="member text-center">${nameMember}</p> 
    <p class="role text-center">${roleMember}</p>
    </div>`
}