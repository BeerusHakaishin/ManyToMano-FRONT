export class Category {
    id!: number;
    name!: string;
    room_id!: number;
    constructor(
        id: number,
        name: string,
        room_id: number,
      ) {
        this.id = id;
        this.name = name;
        this.room_id = room_id;
      }
}