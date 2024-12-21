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
import { Subscription, timer } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CheckService } from '../../core/check.service';
import { Status } from '../../core/status.model';

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
  private checkService = inject(CheckService);
  //#endregion

  loading = false;

  mcStatus!: Status;

  form!: FormGroup;

  reloadSubscription!: Subscription;
  reloadTimer = timer(0, 5000);

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      serverIp: [environment.serverIp],
      serverPort: [environment.serverPort],
    });
  }

  onSubmit(): void {
    this.loading = true;
    if (this.reloadSubscription) {
      this.reloadSubscription.unsubscribe();
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
