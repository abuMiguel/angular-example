// import { Component, OnInit, OnChanges } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AppService, Member } from '../app.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-member-details',
//   templateUrl: './member-details.component.html',
//   styleUrls: ['./member-details.component.css']
// })
// export class MemberDetailsComponent implements OnInit, OnChanges {
//   memberModel: Member = this.appService.selectedMember;
//   memberForm: FormGroup = this.createForm(this.memberModel);
//   submitted = false;
//   alertType: string;
//   alertMessage: string;
//   teams = [];
//   header = 'Add Member to Racing Team';

//   constructor(private fb: FormBuilder, private appService: AppService, private router: Router) { }

//   ngOnInit() {
//     let action = this.getCurrentAction();
//     this.header = action === 'add' ? 'Add Member to Racing Team' : 'Edit Member of Racing Team';
//     this.appService.getTeams().subscribe(teams => (this.teams = teams));
//   }

//   get firstName() { return this.memberForm.get('firstName'); }
//   get lastName() { return this.memberForm.get('lastName'); }
//   get jobTitle() { return this.memberForm.get('jobTitle'); }

//   ngOnChanges() { }

//   createForm(model: Member): FormGroup {
//     return this.fb.group({
//       id: [model.id],
//       firstName: [model.firstName, Validators.required],
//       lastName: [model.lastName, Validators.required],
//       jobTitle: [model.jobTitle, Validators.required],
//       team: [model.team, Validators.required],
//       status: [model.status, Validators.required]
//     });
//   }

//   getCurrentAction(): string {
//     return this.memberModel.id < 1 ? "add" : "edit";
//   }

//   onSubmit(): void {
//     this.memberModel = this.memberForm.value as Member;
//     let action: string = this.getCurrentAction();
//     this.appService.addOrEditMember(this.memberModel, action).subscribe(
//       res => this.goBackToSummary(),
//       e => console.log(e)
//     );
//   }

//   goBackToSummary(): void {
//     this.router.navigateByUrl("/members");
//   }
// }
