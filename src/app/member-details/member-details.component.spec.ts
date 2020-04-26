// import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

// import { MemberDetailsComponent } from './member-details.component';
// import { AppService, Member } from '../app.service';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';

// import { HttpClientModule } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';

// // Bonus points!
// describe('MemberDetailsComponent', () => {
//   let component: MemberDetailsComponent;
//   let fixture: ComponentFixture<MemberDetailsComponent>;
//   let testMember: Member = {
//     id: 2,
//     firstName: 'john',
//     lastName: 'smith',
//     jobTitle: 'driver',
//     team: 'Formula 1 - Car 77',
//     status: 'Active'
//   };

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [MemberDetailsComponent],
//       imports: [
//         FormsModule,
//         ReactiveFormsModule,
//         HttpClientModule,
//         RouterModule
//       ],
//       providers: [
//         HttpClient,
//         AppService,
//         FormBuilder,
//         {
//           provide: Router,
//           useClass: class {
//             navigate = jasmine.createSpy('navigate');
//           }
//         }
//       ]
//     }).compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(MemberDetailsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should generate header for adding a member', () => {
//     expect(component.header).toBe('Add Member to Racing Team');
//   });

//   it('should get action for editing a member', inject([AppService], (service: AppService) => {
//     service.selectedMember.id = 1;
//     let action = component.getCurrentAction();
//     expect(action).toBe('edit');
//   }));

//   it('should get action for adding a member', () => {
//     let action = component.getCurrentAction();
//     expect(action).toBe('add');
//   });

//   it('should create a default member form', inject([AppService], (service: AppService) => {
//     let memberModel: Member = service.defaultMember;
//     let memberForm: FormGroup = component.createForm(memberModel);
//     expect(memberForm).toBeTruthy();
//   }));

//   it('should add a new member', inject([AppService], (service: AppService) => {
    
//     //todo: how to test form submission to server
//     service.selectedMember = testMember;
//     service.selectedMember.id = 0;
//     component.onSubmit();
    
//     expect().nothing();
//   }));

//   it('should navigate to member summary', inject([AppService], (service: AppService) => {
//     //component.goBackToSummary();

//     //todo: how do we test navigation?
//     expect().nothing();
//   }));

// });
