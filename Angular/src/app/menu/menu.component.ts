import { Component, OnInit, Input, Inject } from '@angular/core';
import { plat } from '../plat';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  Panier : any [] ;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  day = 0 ;
  total : number = 0;
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(MenuComponentDialog, {
      height: '700px',
      width: '1000px',
      data: {Panier: sessionStorage.getItem('panier')}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

  ngOnInit() {
  }

  selectDay(days)
  {
    console.log(days);
    this.day = days ;
  }
  alert()
  {
  
    this.total = +sessionStorage.getItem('total');
    console.log(this.total );
  }


}

@Component({
  selector: 'dmenu.component.dialog',
  templateUrl: 'menu.component.dialog.html',
})
export class MenuComponentDialog {

  constructor(
    public dialogRef: MatDialogRef<MenuComponentDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
