import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService, AlertService } from '@app/_services';
import { first } from 'rxjs';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.less']
})
export class CreateUserComponent implements OnInit {
  Addform!: FormGroup;
    id?: string;
    title!: string;
    loading = false;
    submitting = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];

        // form with validation rules
        this.Addform = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            username: ['', Validators.required],
            // password only required in add mode
            password: ['', [Validators.minLength(6), ...(!this.id ? [Validators.required] : [])]]
        });

        this.title = 'Add User';
        // if (this.id) {
        //     // edit mode
        //     this.title = 'Edit User';
        //     this.loading = true;
        //     this.accountService.getById(this.id)
        //         .pipe(first())
        //         .subscribe(x => {
        //             this.Addform.patchValue(x);
        //             this.loading = false;
        //         });
        // }
    }

    // convenience getter for easy access to Addform fields
    get f() { return this.Addform.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if Addform is invalid
        if (this.Addform.invalid) {
            return;
        }

        // this.submitting = true;
        // this.saveUser()
        //     .pipe(first())
        //     .subscribe({
        //         next: () => {
        //             this.alertService.success('User saved', { keepAfterRouteChange: true });
        //             this.router.navigateByUrl('/users');
        //         },
        //         error: error => {
        //             this.alertService.error(error);
        //             this.submitting = false;
        //         }
        //     })
    }


}
