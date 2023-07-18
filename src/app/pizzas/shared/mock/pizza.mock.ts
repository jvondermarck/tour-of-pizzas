import { Pizza } from '../model/pizza';

export const MOCK_PIZZAS: Pizza[] = [
  {
    id: 1,
    name: 'Margherita',
    toppings: ['tomato', 'mozzarella', 'basil'],
    status: 'available',
    price: 6,
    size: 'small',
    image: 'assets/img/pizza-1.png',
    description: 'The Queen of all pizzas, the Margherita is topped with tomato sauce, mozzarella, and basil.'
  },
  {
    id: 2,
    name: 'Pepperoni',
    toppings: ['tomato', 'mozzarella', 'pepperoni'],
    status: 'available',
    price: 7,
    size: 'medium',
    image: 'assets/img/pizza-2.png',
    description: 'A true classic, the Pepperoni pizza is topped with tomato sauce, mozzarella, and pepperoni.'
  }
];
