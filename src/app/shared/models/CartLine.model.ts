export class CartLine {
  id!: number;
  quantity!: number;
  total_price!: number;
  article_id: number;
  cart_id: number;

  constructor(
    id: number,
    quantity: number,
    total_price: number,
    article_id: number,
    cart_id: number
  ) {
    this.id = id;
    this.quantity = quantity;
    this.total_price = total_price;
    this.article_id = article_id;
    this.cart_id = cart_id;
  }
}
