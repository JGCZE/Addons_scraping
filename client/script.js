const input = document.getElementById("input-for-analyze");
const button = document.getElementById('button');


let valueFromUser = 

button.addEventListener('click', function() {
    valueFromUser = input.value;
    
    axios.post('http://localhost:3001/analyze', { valueFromUser })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        }
    );
    getAddons();
});




console.log(typeof(output))

