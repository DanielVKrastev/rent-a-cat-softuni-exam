import { get } from "firebase/database";

const url = 'https://softuni2024-rent-a-cat-default-rtdb.europe-west1.firebasedatabase.app/rents';

export default {
  async rent(catId, userId) {
        const response = await fetch(`${url}.json`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({catId, userId}),
        })

        const result = await response.json();

        return result;
    },
    async getOne(catId) {
        const response = await fetch(`${url}.json?equalTo="${catId}"&orderBy="catId"`);
        const result = await response.json();

        return Object.values(result).at(0);
    }
}