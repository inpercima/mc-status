import { DatePipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';
import { McStatusService } from './mc-status.service';

@Component({
  selector: 'mcs-dashboard',
  imports: [
    DatePipe,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    ReactiveFormsModule,
  ],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  //#region Injections
  private formBuilder = inject(FormBuilder);
  private domSanitizer = inject(DomSanitizer);
  private mcStatusService = inject(McStatusService);
  //#endregion

  readonly mcStatus = this.mcStatusService.getStatus();
  readonly isLoading = this.mcStatusService.isLoading();
  isFirstRun = true;
  interval = 0;

  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      serverIp: [environment.serverIp],
      serverPort: [environment.serverPort],
    });
  }

  onSubmit(): void {
    if (this.isFirstRun) {
      this.isFirstRun = false;
      this.loadStatus();
      this.startInterval();
    } else {
      clearInterval(this.interval);
      this.loadStatus();
      this.reloadStatus();
      this.startInterval();
    }
  }

  loadStatus(): void {
    this.mcStatusService.setAddress(this.form.value.serverIp + ':' + this.form.value.serverPort);
  }

  reloadStatus(): void {
    this.mcStatusService.reloadResource();
  }

  startInterval(): void {
    this.interval = setInterval(() => {
      this.reloadStatus();
    }, 5000);
  }

  headerImage(): SafeStyle {
    // DomSanitizer bypassSecurityTrustStyle must used to get picture from different url
    return this.mcStatus() ? this.domSanitizer.bypassSecurityTrustStyle(`url('${this.mcStatus()?.icon}')`) : '';
  }
}
