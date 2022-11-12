const buscarPokemon = async () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;

    let data = await fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("images/pokemon-sad.png")
        }
        else {
            return res.json();
        }
    });
    
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            let pokeInfo = data.abilities;
            pokeImage(pokeImg);
            pokeData(pokeInfo);
            console.log(pokeImg);
            console.log(pokeInfo);
        }
    }


const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokeData = (abilities) =>{
    const pokeInfo = document.getElementById("habilidades");
    const  abilitiesName = abilities.map((item) => item.ability.name);
    pokeInfo.innerHTML = abilitiesName[0];
}

