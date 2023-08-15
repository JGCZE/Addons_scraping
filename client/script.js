const input = document.getElementById("input-for-analyze");
const button = document.getElementById('button');


let valueFromUser = 

button.addEventListener('click', function() {
    console.log('click');
    valueFromUser = input.value;
    console.log(valueFromUser);
    
    axios.post('http://localhost:3001/analyze', { valueFromUser })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        }
    );
});


