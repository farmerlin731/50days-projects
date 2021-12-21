const jokeEL = document.getElementById('joke');
const btnChg = document.getElementById('chg-joke');


getJoke();

btnChg.addEventListener('click', (e) => {
    getJoke();
})



// async function getJoke() {
//     const config = {
//         headers: {
//             Accept: 'application/json',
//         },
//     };
//     console.log('test1');

//     const res = await fetch('https://icanhazdadjoke.com', config)
//     console.log('test2');

//     const data = await res.json()

//     jokeEL.textContent = data.joke

//     console.log('test3');
// }


function getJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    };
    console.log('test1');

    fetch('https://icanhazdadjoke.com', config)
        .then(res => res.json()) //Json is functon.. don't forget the ().
        .then(data => {
            jokeEL.textContent = data.joke;
        console.log('test2')});
        console.log('test3');
}

