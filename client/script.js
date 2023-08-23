const input = document.getElementById("input-for-analyze");
const button = document.getElementById('button');


let valueFromUser = 

button.addEventListener('click', function() {

    valueFromUser = input.value;
    input.value = "";
    getAddons();
    
    axios.post('http://localhost:3001/analyze', { valueFromUser })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        }
    );
});

function getAddons() {
    axios.get('http://localhost:3001/getAddons')
        .then(response => {
            const length = response.data.length - 1;
            console.log(response.data)
            console.log(length)
            // show on frontend
            const firstAddon = document.getElementById('first-addon');
            const secondAddon = document.getElementById('second-addon');
            const thirdAddon = document.getElementById('third-addon');
            firstAddon.innerHTML = response.data[length].first_addon;
            secondAddon.innerHTML = response.data[length].second_addon;
            thirdAddon.innerHTML = response.data[length].third_addon;

        })
        .catch(error => {
            console.log(error);
        }
    );
}




