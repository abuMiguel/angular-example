// import { Component, OnInit } from '@angular/core';
// import { AppService, Member } from '../app.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-members',
//   templateUrl: './members.component.html',
//   styleUrls: ['./members.component.css']
// })
// export class MembersComponent implements OnInit {
//   members = [];

//   constructor(public appService: AppService, private router: Router) {}

//   ngOnInit() {
//     this.reloadMembers();
//   }

//   reloadMembers(){
//     this.appService.getMembers().subscribe(members => (this.members = members));
//     this.appService.resetSelectedMember();
//   }

//   selectRow(member: Member){
//     this.appService.selectedMember = member;
//   }

//   getSelectionColor(memberId: number){
//     if(this.appService.selectedMember.id === memberId){
//       return 'lightgray';
//     }
//     return 'white';
//   }

//   isAMemberSelected(){
//     return this.appService.selectedMember.id > 0;
//   }

//   goToAddMember() {
//     this.appService.resetSelectedMember();
//     this.router.navigate(["/member-details"]);
//   }

//   editSelectedMember() {
//     this.router.navigate(["/member-details"]);
//   }

//   deleteSelectedMember() {
//     this.appService.deleteMember().subscribe(
//       res => {

//       }
//     );
//   }
// }
