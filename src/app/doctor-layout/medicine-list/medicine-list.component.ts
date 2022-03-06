import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.scss']
})
export class MedicineListComponent implements OnInit {
  search = false;
  orderBox = false;
  constructor() { }

  ngOnInit(): void {
  }

  isSearch(): void {
    this.search = true;
  }

  searchClose(): void {
    this.search = false;
  }

  add(){
    this.orderBox = true;
  }

}
