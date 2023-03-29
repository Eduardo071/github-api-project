const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                         <img src="${user.avatarUrl}" alt="Foto de perfil do usuário" />
                         <div class="data">
                             <h1>${user.name ?? 'Não possui nome cadastrado na plataforma😢'}</h1>
                             <p>${user.bio ?? 'Não possui bio cadastrado na plataforma😢'}</p>
                             <div class="followData">
                             <h3 class="followers">Seguidores: ${user.followers}</h3>
                             <h3 class="following">Seguindo: ${user.following}</h3>
                             </div>
                         </div>
                         </div>`

                        // Adicionar na tela o conteúdo dos eventos

                         let repositoriesItens = ''
                         user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`)
                        
                         if(user.repositories.length > 0){
                            this.userProfile.innerHTML += `<div class="repositories section">
                                                                <h2>Repositórios</h2>
                                                                <ul>${repositoriesItens}</ul>
                                                           </div>`
                         }
    },

    renderNotFound(){
        this.userProfile.innerHTML = `<h3>O usuário não foi encontrado</h3>`
    }
}

export { screen }