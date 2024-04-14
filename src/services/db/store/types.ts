export interface IProduct {
    name: string;
    price: number;
    qtd: number;
    category: string;
}

export interface ProductsSells {
    title: string;
    category: string;
    price: number;
}

export interface ISell {
    whoSell: string;
    whoBought: string;
    totalPrice: number;
    date: string;
    productSells: ProductsSells[];
}
