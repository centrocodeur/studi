import { Octokit } from "https://esm.sh/octokit"
import { Home } from "./modules/Home.js"

new Home()
/*
 Test de la librairie octokit 
const octokit = new Octokit()
console.log("hello")
console.log(octokit)

// octokit.rest.repos => provient du SDK
// get => Methode du SDK pour récupérer ici les repos.
octokit.rest.repos
  .get({owner: "centrocodeur",
	repo: "repotest",
  })
  .then(({data})=>{
	console.log("Repo récupéré", data)
	console.log(data.url)
  })
  */

