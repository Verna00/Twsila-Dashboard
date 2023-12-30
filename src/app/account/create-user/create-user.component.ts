import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService, AlertService } from '@app/_services';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
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
    this.Addform = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required]],
      mobile: ['', Validators.required],
      password: ['', [Validators.minLength(8), ...(!this.id ? [Validators.required] : [])]]
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

  isNumberKey(event: any) {
    var charCode = (event.which) ? event.which : event.keyCode;
    if (charCode == 46 || charCode > 31 && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    }
    return true;
  }
  onSubmit() {
    console.log(this.Addform.value, 'ddd');

    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if Addform is invalid
    if (this.Addform.invalid) {
      return;
    }

    this.submitting = true;
    this.accountService.CreateAdminAccount(this.Addform.value)
      .subscribe({
        next: (res: any) => {
          console.log(res, 'res');

          this.alertService.success('User saved', { keepAfterRouteChange: true });
          const returnUrl =  '/';
          this.router.navigateByUrl(returnUrl);
        },
        error: (error) => {
          console.log(error, 'err');

          this.alertService.error(error.message);
          this.submitting = false;
        }
      })
  }
}
