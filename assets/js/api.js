
// arquivo para centralizar as funcões de consumo de api

async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/Polar0471/portfolio/main/data/profile.json'
    const fetching = await fetch(url) // retorna uma promise, por isso usamos o async
    return await fetching.json()
}