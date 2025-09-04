import React, { createContext, useContext, useReducer, useEffect } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: string;
  originalPrice: string;
  image: string;
  quantity: number;
  moq: string;
  supplier: string;
}

interface WishlistItem {
  id: number;
  name: string;
  price: string;
  originalPrice: string;
  image: string;
  rating: number;
  reviews: number;
  moq: string;
  supplier: string;
  location: string;
}

interface StoreState {
  cart: CartItem[];
  wishlist: WishlistItem[];
  cartCount: number;
  wishlistCount: number;
}

type StoreAction =
  | { type: 'ADD_TO_CART'; payload: CartItem }
  | { type: 'REMOVE_FROM_CART'; payload: number }
  | { type: 'UPDATE_CART_QUANTITY'; payload: { id: number; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'ADD_TO_WISHLIST'; payload: WishlistItem }
  | { type: 'REMOVE_FROM_WISHLIST'; payload: number }
  | { type: 'MOVE_TO_CART'; payload: number };

const initialState: StoreState = {
  cart: [],
  wishlist: [],
  cartCount: 0,
  wishlistCount: 0,
};

const storeReducer = (state: StoreState, action: StoreAction): StoreState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        const updatedCart = state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return {
          ...state,
          cart: updatedCart,
          cartCount: updatedCart.reduce((sum, item) => sum + item.quantity, 0),
        };
      }
      const newCart = [...state.cart, { ...action.payload, quantity: 1 }];
      return {
        ...state,
        cart: newCart,
        cartCount: newCart.reduce((sum, item) => sum + item.quantity, 0),
      };
    }

    case 'REMOVE_FROM_CART': {
      const newCart = state.cart.filter(item => item.id !== action.payload);
      return {
        ...state,
        cart: newCart,
        cartCount: newCart.reduce((sum, item) => sum + item.quantity, 0),
      };
    }

    case 'UPDATE_CART_QUANTITY': {
      const newCart = state.cart.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: Math.max(0, action.payload.quantity) }
          : item
      ).filter(item => item.quantity > 0);
      return {
        ...state,
        cart: newCart,
        cartCount: newCart.reduce((sum, item) => sum + item.quantity, 0),
      };
    }

    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
        cartCount: 0,
      };

    case 'ADD_TO_WISHLIST': {
      const exists = state.wishlist.some(item => item.id === action.payload.id);
      if (exists) return state;
      const newWishlist = [...state.wishlist, action.payload];
      return {
        ...state,
        wishlist: newWishlist,
        wishlistCount: newWishlist.length,
      };
    }

    case 'REMOVE_FROM_WISHLIST': {
      const newWishlist = state.wishlist.filter(item => item.id !== action.payload);
      return {
        ...state,
        wishlist: newWishlist,
        wishlistCount: newWishlist.length,
      };
    }

    case 'MOVE_TO_CART': {
      const wishlistItem = state.wishlist.find(item => item.id === action.payload);
      if (!wishlistItem) return state;
      
      const cartItem: CartItem = {
        id: wishlistItem.id,
        name: wishlistItem.name,
        price: wishlistItem.price,
        originalPrice: wishlistItem.originalPrice,
        image: wishlistItem.image,
        quantity: 1,
        moq: wishlistItem.moq,
        supplier: wishlistItem.supplier,
      };

      const existingCartItem = state.cart.find(item => item.id === action.payload);
      let newCart;
      if (existingCartItem) {
        newCart = state.cart.map(item =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newCart = [...state.cart, cartItem];
      }

      const newWishlist = state.wishlist.filter(item => item.id !== action.payload);
      
      return {
        ...state,
        cart: newCart,
        wishlist: newWishlist,
        cartCount: newCart.reduce((sum, item) => sum + item.quantity, 0),
        wishlistCount: newWishlist.length,
      };
    }

    default:
      return state;
  }
};

const StoreContext = createContext<{
  state: StoreState;
  dispatch: React.Dispatch<StoreAction>;
} | null>(null);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  // Load from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('dropmart-cart');
    const savedWishlist = localStorage.getItem('dropmart-wishlist');
    
    if (savedCart) {
      const cart = JSON.parse(savedCart);
      cart.forEach((item: CartItem) => {
        dispatch({ type: 'ADD_TO_CART', payload: item });
      });
    }
    
    if (savedWishlist) {
      const wishlist = JSON.parse(savedWishlist);
      wishlist.forEach((item: WishlistItem) => {
        dispatch({ type: 'ADD_TO_WISHLIST', payload: item });
      });
    }
  }, []);

  // Save to localStorage when state changes
  useEffect(() => {
    localStorage.setItem('dropmart-cart', JSON.stringify(state.cart));
  }, [state.cart]);

  useEffect(() => {
    localStorage.setItem('dropmart-wishlist', JSON.stringify(state.wishlist));
  }, [state.wishlist]);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};