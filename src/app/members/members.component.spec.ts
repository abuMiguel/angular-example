// import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
// import { MembersComponent } from './members.component';
// import { MemberDetailsComponent } from '../member-details/member-details.component';
// import { AppService, Member } from '../app.service';
// import { Router } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';
// import { RouterModule } from '@angular/router';

// describe('MembersComponent', () => {
//   let component: MembersComponent;
//   let fixture: ComponentFixture<MembersComponent>;
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
//       declarations: [MembersComponent],
//       imports: [HttpClientModule, RouterModule],
//       providers: [
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
//     fixture = TestBed.createComponent(MembersComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should select a member', inject([AppService], (service: AppService) => {
//     component.selectRow(testMember);
//     expect(service.selectedMember).toEqual(testMember);
//   }));

//   it('should get background color of selected row', inject([AppService], (service: AppService) => {
//     service.selectedMember = testMember;
//     let color = component.getSelectionColor(testMember.id);
//     expect(color).toBe('lightgray');
//   }));

//   it('should get background color of unselected row', inject([AppService], (service: AppService) => {
//     component.selectRow(testMember);
//     let color = component.getSelectionColor(3);
//     expect(color).toBe('white');
//   }));

//   it('should determine if any member has been selected', inject([AppService], (service: AppService) => {
//     service.selectedMember = testMember;
//     let selected = component.isAMemberSelected();
//     expect(selected).toBe(true);
//   }));

//   it('should navigate to member details for adding a member', inject([Router], (router: Router, ) => {
//     component.goToAddMember();
//     expect(router.navigate).toHaveBeenCalledWith(['/member-details']);
//   }));

//   it('should navigate to member details for editing a member', inject([Router], (router: Router) => {
//     component.editSelectedMember();
//     expect(router.navigate).toHaveBeenCalledWith(['/member-details']);
//   }));

//   it('should determine if any member has been selected', inject([AppService], (service: AppService) => {
//     service.selectedMember = testMember;
//     component.deleteSelectedMember();
//     expect(service.selectedMember).toEqual(service.defaultMember);
//   }));

// });
