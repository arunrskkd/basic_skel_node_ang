import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormArray} from '@angular/forms';
import { StockService } from '../../stock.service';
import { Subject } from 'rxjs/Subject';
@Component({
  selector: 'app-editstock',
  templateUrl: './editstock.component.html',
  styleUrls: ['./editstock.component.less']
})
export class EditstockComponent implements OnInit {
  stockform:FormGroup;
  constructor(private fb:FormBuilder,private serv:StockService) { }

  ngOnInit() {
    this.createForm();
    this.serv.editstock.subscribe((data) => { 
        this.stockform.setValue({
          id:data._id,
          name:data.name,
          price:data.price,
          quantity:data.quantity,
          description: data.description,
        })

       });
  }
  createForm() {
    this.stockform = this.fb.group({
      id:['',Validators.required ],
      name:['', Validators.required ],
      price:['', Validators.required ],
      quantity:['', Validators.required ],
      description: ['', Validators.required ]
      
   })
     

}

onsubmit(stockform:FormGroup){
  this.serv.updatestock(this.stockform.value);
  
 
}

}
