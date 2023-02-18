// admin activer btn franchise  

window.onload = () => {
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
}