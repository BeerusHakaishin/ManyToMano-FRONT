export class Inspiration {
  id!: number;
  name!: String;
  image_url!: String;

  constructor(id: number, name: string, image_url: String) {
    this.id = id;
    this.name = name;
    this.image_url = image_url;
  }
}
