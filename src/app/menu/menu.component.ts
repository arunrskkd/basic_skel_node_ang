import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {
  items: any[];
  constructor() { }
  
  ngOnInit() {
    this.items = [
   
      
            {label: 'Stock Management',
                  items: [
                    {label: 'Stock', icon: 'fa-angle-right',routerLink: '/stock/stock'}, 
                                 
                  ]},
            // {label: 'Add product', icon: 'fa-angle-right',routerLink: '/shopping/addproducts'},
            // {label: 'View product', icon: 'fa-angle-right',routerLink: '/shopping/viewproducts'},
            // {label: 'Product list', icon: 'fa-angle-right',routerLink: '/purchase/productlist'},
            // {label: 'Purchased Products', icon: 'fa-angle-right',routerLink: '/purchase/boughtproducts'},
            
         
    
     
     
  ];

  }
  

}
