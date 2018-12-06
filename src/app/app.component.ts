import { Component } from '@angular/core';
import { formatDate, registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Enkant';
  passOrder = true; 
  today: string ;
  day: number = Date.now();

  ngOnInit() {
    registerLocaleData(localeFr, 'fr-FR', localeFrExtra);
    this.today = formatDate(this.day,'shortTime','fr-FR','');
    if (this.today < "10:00")
    {
      this.passOrder = false;
    }
    
  }

}
