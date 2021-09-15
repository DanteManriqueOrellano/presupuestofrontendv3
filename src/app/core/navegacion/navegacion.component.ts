import { Component,ViewChild  } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { ActivatedRoute,NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent  {
  
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(
    private observer: BreakpointObserver,
    private router:Router,
    private route:ActivatedRoute
    ) {
      this.router.events.subscribe(ev => {
        if (ev instanceof NavigationStart) {
          this.loading = true;
        }
        if (ev instanceof NavigationEnd || ev instanceof NavigationCancel || ev instanceof NavigationError) {
          this.loading = false;
        }
      });
    }

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }
  /*Reemplazar estos valores con valores reales */
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  

 goToInsumo(){
   this.router.navigate(['/insumo'])
 }

 loading = false;
  title = 'angu-res';
  

 
  

}
