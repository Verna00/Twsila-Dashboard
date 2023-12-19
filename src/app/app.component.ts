import { Component, OnInit } from '@angular/core';

import { AccountService } from './_services';
import { User } from './_models';
import { MenuItem, MessageService, PrimeNGConfig } from 'primeng/api';

@Component({ 
    selector: 'app-root',
 templateUrl: 'app.component.html',
providers: [MessageService] } )
export class AppComponent implements OnInit{


    sidebarVisible: boolean = true;
    user?: User | null;
    MenuItem!: MenuItem[]; 
    constructor(private accountService: AccountService,
        private messageService: MessageService, 
        private primengConfig: PrimeNGConfig ) {
        this.accountService.user.subscribe(x => this.user = x);
    }
    ngOnInit() { 
    this.primengConfig.ripple = true; 
  
    this.MenuItem = [ 
      { 
     
        items: [ 
          { 
            label: 'Reset', "routerLink": ['register']
          }, 
          { 
            label: 'logout',  command: () => this.logout()
          } 
        ] 
      }]
    }
    logout() {
        this.accountService.logout();
    }
}