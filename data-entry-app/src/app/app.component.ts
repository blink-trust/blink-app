import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-vault-app';
  addScreeen: boolean = true;
  vaultScreen: boolean = false;
  @Input()
  listScreen: boolean = false;
}
