export interface Recipe {
    id: number;
    name: string;
    description: string[];
    ingredients: string[];
    steps: string[];
    imgUrl: string;
    videoUrl: string;
}