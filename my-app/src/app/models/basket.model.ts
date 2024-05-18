// basket.model.ts
import { Electronic } from './electronics.model';

export interface BasketItem {
  electronic: Electronic;
  quantity: number;
}
