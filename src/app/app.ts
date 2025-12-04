import { DOCUMENT } from '@angular/common';
import { Component, inject, TemplateRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Title } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { Dashboard } from './features/dashboard/dashboard';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [Dashboard, MatButtonModule, MatDialogModule, MatIconModule, MatMenuModule, MatToolbarModule],
})
export class App {
  //#region Injections
  private dialog = inject(MatDialog);
  private titleService = inject(Title);
  private document = inject<Document>(DOCUMENT);
  //#endregion

  public appname: string;

  public constructor() {
    this.appname = environment.appname;
    this.titleService.setTitle(this.appname);
    this.document.body.classList.add(`${environment.theme}-theme`);
  }

  openDialog(ref: TemplateRef<Element>): void {
    this.dialog.open(ref, {
      maxWidth: '800px',
    });
  }
}
