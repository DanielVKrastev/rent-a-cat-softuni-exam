import { get } from "firebase/database";

const url = 'https://softuni2024-rent-a-cat-default-rtdb.europe-west1.firebasedatabase.app/cats';

async function getAll() {
    const response = await fetch(`${url}.json`);
    const result = await response.json();

    const cats = Object.keys(result).map(id => ({id, ...result[id]}));

    return cats;
    
}

export default{
    getAll,
}