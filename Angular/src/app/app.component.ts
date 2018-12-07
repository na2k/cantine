import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cantiniereProject';

  ngOnInit() {
    function horloge()
    {
      var date = new Date();
      if((date.getHours() == 10 && date.getMinutes()<30) || date.getHours() < 11)
      {
        $('#enable').slideDown('slow');
        $('#disable').slideUp('slow');
      }
      else
      {
        $('#enable').slideUp('slow');
        $('#disable').slideDown('slow');
      }
    }
    horloge();
  }

}
