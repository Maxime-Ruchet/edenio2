import PocketBase from 'pocketbase' ;
export const pb = new PocketBase('http://127.0.0.1:8090') ;
import type { EvenementResponse, GlossaireResponse, ProduitsResponse, RecettesResponse } from './pocketbase-types';

export async function Allevenement() {
  const records = await pb.collection('evenement').getFullList<EvenementResponse>()
  return records
}


export async function oneID(id: string) {
    const oneRecord = await pb.collection('evenement').getOne<EvenementResponse>(id,);
    return oneRecord;
}

export async function Allglossaire() {
  const records = await pb.collection('glossaire').getFullList<GlossaireResponse>()
  return records
}

export async function oneIDglossaire(id: string) {
  const oneRecord = await pb.collection('glossaire').getOne<GlossaireResponse>(id,);
  return oneRecord;
}

export async function Allproduits() {
  const records = await pb.collection('produits').getFullList<ProduitsResponse>()
  return records
}

export async function oneIDproduits(id: string) {
  const oneRecord = await pb.collection('produits').getOne<ProduitsResponse>(id,);
  return oneRecord;
}

export async function Allrecettes() {
  const records = await pb.collection('recettes').getFullList<RecettesResponse>()
  return records
}

export async function oneIDrecettes(id: string) {
  const oneRecord = await pb.collection('recettes').getOne<RecettesResponse>(id,);
  return oneRecord;
}