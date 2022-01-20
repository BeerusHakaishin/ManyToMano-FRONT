export class Seller {
  id!: number;
  name!: string;
  shipping_fees: number;
  logo_url: String;
  constructor(
    id: number,
    name: string,
    shipping_fees: number,
    logo_url: String
  ) {
    this.id = id;
    this.name = name;
    this.shipping_fees = shipping_fees;
    this.logo_url = logo_url;
  }
}
