import create from 'zustand';
import { Product } from '@/../../apps/store/app/types';
import { persist } from 'zustand/middleware';

export interface CartStore {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, newQuantity: number) => void;
}

export const useStore = create<CartStore>(
  persist(
    (set, get: () => CartStore) => ({
      cartItems: [],
      addToCart: (product: Product) => {
        const existingItem = get().cartItems.find(item => item.id === product.id);
        if (existingItem) {
          // If the product already exists in the cart, update its quantity
          set((state: CartStore) => ({
            cartItems: state.cartItems.map(item =>
              item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
            )
          }));
        } else {
          // If the product doesn't exist in the cart, add it with the specified quantity
          set((state: CartStore) => ({ cartItems: [...state.cartItems, product] }));
        }
      },
      removeFromCart: (productId: number) =>
        set((state: CartStore) => ({ cartItems: state.cartItems.filter(item => item.id !== productId) })),
      updateQuantity: (productId: number, newQuantity: number) => {
        // Ensure the new quantity is not less than 1
        const validatedQuantity = Math.max(newQuantity, 1);
        set((state: CartStore) => ({
          cartItems: state.cartItems.map(item =>
            item.id === productId ? { ...item, quantity: validatedQuantity } : item
          )
        }));
      },
    }),
    {
      name: 'cart-store', // Storage key
      getStorage: () => localStorage // Use localStorage
    }
  ) as any
);
