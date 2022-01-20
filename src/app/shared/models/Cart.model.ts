export class Cart {
    id!: number;
    price!: number;
    service_used?: boolean;
    constructor(id: number, price: number,service_used?: boolean){
        this.id = id;
        this.price = price;
        this.service_used = service_used;
    }
}