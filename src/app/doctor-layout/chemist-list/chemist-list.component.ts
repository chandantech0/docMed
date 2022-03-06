import {
  AfterViewInit,
  Component,
  OnInit,
} from '@angular/core';
import { MessageService } from 'primeng/api';
import { distinctUntilChanged, Subject, timeout } from 'rxjs';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-chemist-list',
  templateUrl: './chemist-list.component.html',
  styleUrls: ['./chemist-list.component.scss'],
  providers: [MessageService]
})
export class ChemistListComponent implements OnInit {
  search = false;
  chemistFind = false;
  searchValue = '';
  searchLoader = false;
  position: any;
  private searchTerms = new Subject<string>();
  constructor(
    private messageService: MessageService
  ) {
    this.searchTerms.pipe(debounceTime(1200),distinctUntilChanged()).subscribe((res: any) => {
      console.log(res);
      this.searchLoader = true;
    });
}

  ngOnInit(): void {
    this.getGeoLocation();
    setTimeout(() => {
        this.chemistFind = true;
    }, 2000);
  }

  getGeoLocation() {
    const successCallback = (position: any) => {
      this.position = position.coords.latitude;
      console.log(position)
    }

    const errorCallback = (position: any) => {
      console.log(position)
    }

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

      // Try HTML5 geolocation.
      // if (navigator.geolocation) {
      //   navigator.geolocation.getCurrentPosition(
      //     (position: GeolocationPosition) => {
      //       const pos = {
      //         lat: position.coords.latitude,
      //         lng: position.coords.longitude,
      //       };
      //       this.position = pos;
      //       console.log(pos)
      //     }
      //   );
      // } else {
      //   // Browser doesn't support Geolocation
      //   this.messageService.add({severity:'error', summary: 'Sticky', detail: 'Message Content'});
      // }
  }

  report(state: any) {
    this.position = state;
    console.log('Permission ' + state);
  }

  isSearch(): void {
    this.search = true;
    this.searchValue = '';
  }

  searchClose(): void {
    this.search = false;
    this.searchLoader = false;
  }

  searchHappen(value: any) {
   this.applyFilter(this.searchValue);
  }

  applyFilter(filterValue: string) {
    this.searchTerms.next(filterValue);
   }
 

}
