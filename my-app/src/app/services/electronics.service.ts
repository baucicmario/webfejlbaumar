import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Electronic } from '../models/electronics.model';
import { Firestore, getDocs, query, where, collectionData, collection, doc, getDoc, orderBy, limit as firestoreLimit, addDoc, updateDoc, deleteDoc } from '@angular/fire/firestore'; // Import Firestore

@Injectable({
  providedIn: 'root',
})
export class ElectronicsService {

  constructor(private firestore: Firestore) {}

  private electronicsCollection = collection(this.firestore, 'electronics'); // Define collection path

  getAllElectronics(): Observable<Electronic[]> {
    return collectionData(this.electronicsCollection, { idField: 'id' }) as Observable<Electronic[]>;
  }

  async getElectronicById(id: string): Promise<Electronic | undefined> {
    const electronicDoc = doc(this.firestore, 'electronics', id);
    const docSnapshot = await getDoc(electronicDoc);
    return docSnapshot.exists() ? docSnapshot.data() as Electronic : undefined;
  }
  

  async addElectronic(electronic: Electronic): Promise<void> {
    try {
      await addDoc(this.electronicsCollection, electronic);
    } catch (error) {
      console.error('Error adding electronic:', error);
      // Handle the error appropriately (e.g., throw a custom error or display an error message)
    }
  }
  

  async updateElectronic(electronic: Electronic): Promise<void> {
    const electronicDoc = doc(this.firestore, 'electronics', electronic.id);
    await updateDoc(electronicDoc, electronic as any); // Type casting
  }
  
  
  async deleteElectronic(id: string): Promise<void> {
    const electronicDoc = doc(this.firestore, 'electronics', id);
    await deleteDoc(electronicDoc);
  }
  

  createEmptyElectronic(): Electronic {
    return { id: '', name: '', description: '', price: 0, imageUrl: '', category: '' }; // Empty electronic object
  }

  async addEmptyElectronic(): Promise<void> {
    const emptyElectronic = this.createEmptyElectronic();
    await this.addElectronic(emptyElectronic); // Use the created object
  }
  
  async getElectronicsByCategoryAndPriceRange(category: string, minPrice: number, maxPrice: number): Promise<Electronic[]> {
    const querySnapshot = await getDocs(query(collection(this.firestore, 'electronics'), where('category', '==', category), where('price', '>=', minPrice), where('price', '<=', maxPrice)));
    const electronics: Electronic[] = [];
    querySnapshot.forEach(doc => {
      electronics.push({ id: doc.id, ...doc.data() } as Electronic);
    });
    return electronics;
  }

  
  async getElectronicsOrderedByPrice(limitValue: number): Promise<Electronic[]> {
    const querySnapshot = await getDocs(query(collection(this.firestore, 'electronics'), orderBy('price'), firestoreLimit(limitValue)));
    const electronics: Electronic[] = [];
    querySnapshot.forEach(doc => {
      electronics.push({ id: doc.id, ...doc.data() } as Electronic);
    });
    return electronics;
}
}
