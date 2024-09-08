import { Invoice } from "../models/invoice";

export const invoiceData: any = {

  id:1,
  name: 'Componentes de PC',
  client:{
    name:'Oscar',
    lastname:'Cer',
    address:{
      country:'Mx',
      city:"Ecatepec",
      street:'amazon',
      number:15,

    }
  },
  company:{
    name:'new Age',
    fiscalNumber:31232123,
  },
  items:[

  {
    id:1,
    product:'cpu Intel i9',
    price:599,
    quality:1,

  },

  {
    id:2,
    product:'corsar Teclado Mecanico',
    price:399,
    quality:2,

  },

  {
    id:3,
    product:'Monitor Asus',
    price:899,
    quality:3,

  }

  ]

 }
