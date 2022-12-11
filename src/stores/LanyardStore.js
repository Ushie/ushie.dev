import { readable } from "svelte/store";

const fetchLanyard = () => {
    const json = fetch('https://api.lanyard.rest/v1/users/399862294143696897').then((r) => r.json());
    console.log(json);
    return json;
};

const LanyardData = readable(fetchLanyard());
console.log(LanyardData);
export default LanyardData; 