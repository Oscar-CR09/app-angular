export class Item
{

  id!:number;
  product!:string;
  price !:number;
  quality!: number;

  total():number{
    return (this.price * this.quality);
  }

}
