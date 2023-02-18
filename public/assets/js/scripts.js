// admin activer btn franchise  

/*window.onload = () => {
    let active_franchise = document.querySelectorAll("[id=franchise_active]");
    for (let button of active_franchise) {
        button.addEventListener("click", function() {
            let id = this.dataset.id;
            fetch(`/admin/activer_une_franchise/${id}`)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } 
                    throw new Error('request failed.');
                })
                .then(data => {
                    // request was successful
                    // do something with the response data
                    alert(data.message="L'état de la franchise a bien été modifier")
                })
                .catch(error => {
                    console.log('There has been a problem with your fetch operation:', error.message);
                });
        });
    }
}*/

// admin activer btn structure

window.onload = () => {
    let active_structure = document.querySelectorAll("[id=structure_active]");
    for (let button of active_structure) {
        button.addEventListener("click", function() {
            let id = this.dataset.id;
            fetch(`/admin/activer_une_structure/${id}`)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } 
                    throw new Error('request failed.');
                })
                .then(data => {
                    // request was successful
                    // do something with the response data  
                    alert(data.message="La structure a bien été modifier")
                
                })
                .catch(error => {
                    console.log('There has been a problem with your fetch operation:', error.message);
                });
        });
    }
}

// admin activer btn permission

window.onload = () => {
    let active_permission = document.querySelectorAll("[id=permission_active]");
    for (let button of active_permission) {
        button.addEventListener("click", function() {
            let id = this.dataset.id;
            fetch(`/admin/activer_une_permission/${id}`)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } 
                    throw new Error('request failed.');
                })
                .then(data => {
                    // request was successful
                    // do something with the response data
                        alert(data.message="La permission a bien été modifier")    
                    
                })
                .catch(error => {
                    console.log('There has been a problem with your fetch operation:', error.message);
                });
        });
    }
}

// Ajout d'une modale pour supprimer une franchise

let supprimer = document.querySelectorAll(".modalSupprimerFranchise")
for (let button of supprimer ) {
  button.addEventListener("click", function() {
    document.querySelector(".modal-footer a").href=`/admin/supprimer_une_franchise/${this.dataset.id}`
    document.querySelector(".modal-body").innerText = `Etes vous sûr(e) de vouloir supprimer la franchise ? "${this.dataset.name}"`
  })
  
}


// Ajout d'une modale pour supprimer une structure


  let Delete = document.querySelectorAll(".modalSupprimerStructure")
  for (let button of Delete ) {
    button.addEventListener("click", function() {
      document.querySelector(".modal-footer a").href=`/admin/supprimer_une_structure/${this.dataset.id}`
      document.querySelector(".modal-body").innerText = `Etes vous sûr(e) de vouloir supprimer la structure ?"${this.dataset.name}"`
    })
    
  }



    

