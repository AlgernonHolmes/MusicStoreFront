import product1 from './assets/guitar.jpg'
import product2 from './assets/violin.jpg'
import product3 from './assets/bass.jpg'
import product4 from './assets/drums.jpg'
import product5 from './assets/trumpet.jpg'


export async function fetchProducts() {
    try {
        const response = await fetch('http://localhost:8080/Instrument/');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        const transformedProducts = data.map(product => {
            let productImage;
            if (product.name.includes('guitar')) {
                productImage = product1;
            } else if (product.name.includes('violin')) {
                productImage = product2;
            } else if (product.name.includes('bass')) {
                productImage = product3;
            } else if (product.name.includes('drums')) {
                productImage = product4;
            } else if (product.name.includes('trumpet')) {
                productImage = product5;
            } else {
                productImage = 0;
            }
            return {
                ...product,
                productImage
            };
        });

        const shuffledProducts = transformedProducts.sort(() => Math.random() - 0.5);
        return shuffledProducts;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}


export const PRODUCTS = await fetchProducts();
