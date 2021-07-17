import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

import { Subscription, timer } from 'rxjs';

import { CheckService } from 'src/app/features/dashboard/check.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'mcs-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  appRunning = false;

  mcStatus: any;

  form!: FormGroup;

  reloadSubscription!: Subscription;
  reloadTimer = timer(0, 5000);

  constructor(private formBuilder: FormBuilder, private domSanitizer: DomSanitizer, private checkService: CheckService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      serverIp: [environment.serverIp],
      serverPort: [environment.serverPort],
    });
  }

  onSubmit(): void {
    this.appRunning = true;
    if (this.reloadSubscription) {
      this.reloadSubscription.unsubscribe();
      this.mcStatus = null;
    }
    this.reloadSubscription = this.reloadTimer.subscribe(i => this.check(this.form.value.serverIp + ':' + this.form.value.serverPort));
  }

  check(serverAddress: string ): void {
    this.checkService.check(serverAddress).subscribe(response => this.mcStatus = response);
  }

  headerImage(): SafeStyle {
    // DomSanitizer bypassSecurityTrustStyle must used to get picture from different url
    return this.mcStatus ? this.domSanitizer.bypassSecurityTrustStyle(`url('${this.mcStatus.icon}')`) : '';
  }
}
