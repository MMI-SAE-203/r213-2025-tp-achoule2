import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');



export async function getOffres() {
    try {
        let data = await pb.collection('maison').getFullList({
            sort: '-created',
        });
        data = data.map((item) => {
            item.imgUrl = pb.files.getUrl(item, item.imgUrl);
            return item;
        }); 
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la liste des maisons', error);
        return [];
    }
}
// Etape 11 //

/* export async function oneID(id) {
    const record = await pb.collection('maison').getOne(id);
    return record;
    } */


// Etape 12 //

/* export async function allMaisonsFavori() {
    const records = await pb.collection('maison').getFullList({
        filter: 'favori = true'
    });
    return records;
    } */

// Etape 13 //

/* export async function allMaisonsSorted() {
    const records = await pb.collection('maison').getFullList({
        sort: 'prix'
    });
    return records;
} */


// Etape 14 //

/* export async function bySurface(surface) {
    const records = await pb.collection('maison').getFullList({
        filter: `surface > ${surface}`
    });
    return records;
} */