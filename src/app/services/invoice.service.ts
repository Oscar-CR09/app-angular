import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice';
import { invoiceData} from '../data/invoice.data';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private invoice: Invoice = invoiceData;

  constructor() { }

  getInvoice(): Invoice {
    const total = this.calculaTotal();
    return {... this.invoice, total} ;

  }

  calculaTotal() {
  //   let total =0;

  //   this.invoice.items.forEach(item=>{
  //     total += item.total();

  //   });
  //   return total;
  // }

  return this.invoice.items.reduce((total,item) => total + (item.price+item.quality),0);

}
}
