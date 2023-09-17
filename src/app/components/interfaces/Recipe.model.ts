export interface Recipe {
    id: number;
    name: string;
    description: string[];
    ingredients: Ingredient[];
    steps: string[];
    imgUrl: string;
    videoUrl: string;
}

export interface Ingredient {
    ingredient: string;
    quantity: string;
}