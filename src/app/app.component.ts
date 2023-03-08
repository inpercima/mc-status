import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeStyle, Title } from '@angular/platform-browser';
import { Subscription, timer } from 'rxjs';

import { environment } from '../environments/environment';
import { CheckService } from './check.service';
import { MaterialModule } from './shared/material/material.module';

@Component({
  selector: 'mcs-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public appname: string;

  appRunning = false;

  mcStatus: any;

  form!: FormGroup;

  reloadSubscription!: Subscription;
  reloadTimer = timer(0, 5000);

  // Adds the custom theme to the app root.
  @HostBinding('class') class = `${environment.theme}-theme`;

  public constructor(
    private dialog: MatDialog,
    private titleService: Title,
    public overlayContainer: OverlayContainer,
    private formBuilder: FormBuilder,
    private domSanitizer: DomSanitizer,
    private checkService: CheckService
  ) {
    this.appname = environment.appname;
    this.titleService.setTitle(this.appname);
    // Adds the custom theme to dialogs.
    this.overlayContainer.getContainerElement().classList.add(`${environment.theme}-theme`);
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      serverIp: [environment.serverIp],
      serverPort: [environment.serverPort],
    });
  }

  openDialog(ref: TemplateRef<any>): void {
    this.dialog.open(ref, {
      maxWidth: '800px',
    });
  }

  onSubmit(): void {
    this.appRunning = true;
    if (this.reloadSubscription) {
      this.reloadSubscription.unsubscribe();
      this.mcStatus = null;
    }
    this.reloadSubscription = this.reloadTimer.subscribe(() => this.check(this.form.value.serverIp + ':' + this.form.value.serverPort));
  }

  check(serverAddress: string): void {
    this.checkService.check(serverAddress).subscribe((response) => (this.mcStatus = response));
  }

  headerImage(): SafeStyle {
    // DomSanitizer bypassSecurityTrustStyle must used to get picture from different url
    return this.mcStatus ? this.domSanitizer.bypassSecurityTrustStyle(`url('${this.mcStatus.icon}')`) : '';
  }
}
