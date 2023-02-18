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