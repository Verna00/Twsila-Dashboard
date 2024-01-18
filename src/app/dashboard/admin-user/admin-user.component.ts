import { Component, OnInit } from '@angular/core';
import { AccountService } from '@app/_services';
import { first } from 'rxjs';

interface Item {
  name: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.less']
})
export class AdminUserComponent implements OnInit {
  items: Item[] = [
    { name: 'Mohamed', email: 'Mohamed@gmail.com' ,role: 'admin' },
    { name: 'Alice',email: 'Alice@gmail.com' ,role: 'comapny' },
    { name: 'Bob',email: 'Bob@gmail.com' ,role: 'comapny' },
    { name: 'Ali',email: 'Ali@gmail.com' ,role: 'admin' }

    // ... more mock data
  ];

  users?: any[];

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.getAllUser()
  }
  createItem() {
    // You can implement the logic to create a new item here
    // For demonstration purposes, let's add a new empty item to the list
    this.items.push({ name: '', email: '',role:'' });
  }

  editItem(item: Item) {
    // You can implement the logic to edit an item here
    // For demonstration purposes, let's log the item being edited
    console.log('Editing:', item);
  }
getAllUser(){
  // this.accountService.getAll()
  // .pipe(first())
  // .subscribe(users => this.users = users);
  this.accountService.getAllAdmins().subscribe({
    next:(res:any)=>{
      this.users = res?.result
      console.log('res',res);

    },error:(err:any)=>{
      console.log(err ,'err');

    }
  })
}

  deleteUser(id: string) {
//     const user = this.users!.find(x => x.id === id);
//     user.isDeleting = true;
//     this.accountService.delete(id)
//         .pipe(first())
//         .subscribe(() => this.users = this.users!.filter(x => x.id !== id));
 }
}


