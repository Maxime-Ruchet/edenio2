import PocketBase from 'pocketbase' ;
const pb = new PocketBase('http://127.0.0.1:8090') ;

export async function Allevenement() {
    const records = await pb.collection('evenement').getFullList();
    return records;
}