class Home{
	constructor(){
		console.log('HOME')
		this.descriptionHTML  = document.querySelector('.js-home-description')
		this.profilHTML = document.querySelector('.js-home-profil-url')
		this.avatarHTML = document.querySelector('.js-home-avatar')

		console.log(this.descriptionHTML)
		console.log(this.profilHTML)

		//this.APIdata ={}
		this.init()
		
	}

	init(){
		// Récupérer les information depuis l'API github
		this.getUserInformations()

		

     
	}

	getUserInformations(){
		//https://api.github.com/users/centrocodeur/
		fetch("https://api.github.com/users/centrocodeur")
		  .then((response)=> response.json())
		  .then((data)=> {
			//console.log('OK dans le then')
			console.log(data)
			//this.APIdata = data
            this.updateHTML(data)
		 //	this.updateProfilUrl()
		  //	this.updateAvatar()
		
			//return response.json()
		  })
		  .catch((error) => {
			console.log("ERREUR lors de l'appel api ", error)

		  })
		  
	}

	updateHTML(APIdata){

		// Afficher la description de mon profil Github
		this.descriptionHTML.textContent = APIdata.bio
		// Afficher l'url de mon prifil github
		this.profilHTML.setAttribute("href", APIdata.html_url)
		// Afficher mon avatar
		this.avatarHTML.setAttribute("src", APIdata.avatar_url)
		
	}

	/*
	updateProfilUrl(){
		this.profilHTML.setAttribute("href", this.APIdata.html_url)
	}

	updateAvatar(){
		this.avatarHTML.setAttribute("src", this.APIdata.avatar_url)
	}
	*/
}
export {Home}