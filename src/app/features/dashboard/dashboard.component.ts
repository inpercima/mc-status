import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

import { CheckService } from 'src/app/core/check.service';

@Component({
  selector: 'mcs-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  mcStatus: any;

  constructor(private domSanitizer: DomSanitizer, private checkService: CheckService) { }

  ngOnInit(): void {
    this.checkService.check().subscribe(response => this.mcStatus = response);
  }

  headerImage(): SafeStyle {
    // DomSanitizer bypassSecurityTrustStyle must used to get picture from different url
    return this.domSanitizer.bypassSecurityTrustStyle(`url('${this.mcStatus.icon}')`);
  }
}
