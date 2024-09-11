import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'form-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-item.component.html',
})
export class FormItemComponent {

  @Output() addItemEventEmitter = new EventEmitter();

  private counterId = 4;

  item:any = {

    product:'',
    price:'',
    quality:''

  }

  onSubmit(itemForm:NgForm):void{
    if(itemForm.valid){
      this.addItemEventEmitter.emit({id:this.counterId,...this.item});
    this.counterId++;

    this.item={

      product:'',
      price:'',
      quality:''

    };
    itemForm.reset();
    itemForm.resetForm();

    }

  }
}
