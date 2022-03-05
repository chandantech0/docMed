import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chemist-list',
  templateUrl: './chemist-list.component.html',
  styleUrls: ['./chemist-list.component.scss']
})
export class ChemistListComponent implements OnInit {
  search = false;
  @ViewChild('search') public searchElement!: ElementRef;
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
  }

  isSearch(): void {
    this.search = true;
    setTimeout(()=>{ // this will make the execution after the above boolean has changed
      this.searchElement.nativeElement.focus();
    },0); 
  }

  searchClose(): void {
    this.search = false;
  }

}
