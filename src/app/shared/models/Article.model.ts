export class Article {
    id!: number;
    name!: string;
    price!: number;
    on_sale?: boolean;
    image_url!: string;
    details_image_url!: string;
    evaluation!: number;
    category_id!: number;
    seller_id!: number;
    inspiration_id!: number;

    constructor(id: number, name: string, price: number,
         image_url: string, details_image_url: string, evaluation: number, category_id: number,
         seller_id: number, inspiration_id: number, on_sale?: boolean,){
             this.id = id;
             this.name = name;
             this.price = price;
             this.image_url = image_url;
             this.details_image_url = details_image_url;
             this.evaluation = evaluation;
             this.category_id = category_id;
             this.seller_id =seller_id;
             this.inspiration_id = inspiration_id;
             this.on_sale = on_sale;
    }
}