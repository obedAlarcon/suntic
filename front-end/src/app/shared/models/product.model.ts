import { Category } from "./category.model";


export interface Product {
    id: number,
    name:string,
    image:string,
    description:string,
    price:number,    
    category :Category;
    
   
}

