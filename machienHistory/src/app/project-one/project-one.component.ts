
import { Component } from '@angular/core';
interface Project {
  id: number;
  name: string;
  status: string;
  type: string;
}
@Component({
  selector: 'app-project-one',
  templateUrl: './project-one.component.html',
  styleUrls: ['./project-one.component.css']
})
export class ProjectOneComponent {
  projects: Project[] = [
    { id: 1, name: 'Project One', status: 'Active', type: 'Private' },
    { id: 2, name: 'Project Two', status: 'Disabled', type: 'Business'},
    { id: 3, name: 'Project Three', status: 'Active', type: 'Personal'},
    { id: 4, name: 'Project Four', status: 'Disabled', type: 'Education'},
    { id: 5, name: 'Project Five', status: 'Active', type: 'Research' },
    { id: 6, name: 'Project Six', status: 'Active', type: 'Business' },
    { id: 7, name: 'Project Seven', status: 'Disabled', type: 'Personal' },
    { id: 8, name: 'Project Eight', status: 'Active', type: 'Private'},
    { id: 9, name: 'Project Nine', status: 'Active', type: 'Education' },
    { id: 10, name: 'Project Ten', status: 'Disabled', type: 'Research' },
    { id: 11, name: 'Project Eleven', status: 'Active', type: 'Business' },
    { id: 12, name: 'Project Twelve', status: 'Disabled', type: 'Personal' },
    { id: 13, name: 'Project Thirteen', status: 'Active', type: 'Private' },
    { id: 14, name: 'Project Fourteen', status: 'Disabled', type: 'Education' },
    { id: 15, name: 'Project Fifteen', status: 'Active', type: 'Research'},
    { id: 16, name: 'Project Sixteen', status: 'Active', type: 'Business' },
    { id: 17, name: 'Project Seventeen', status: 'Disabled', type: 'Personal' },
    { id: 18, name: 'Project Eighteen', status: 'Active', type: 'Private' },
    { id: 19, name: 'Project Nineteen', status: 'Active', type: 'Education' },
    { id: 20, name: 'Project Twenty', status: 'Disabled', type: 'Research'},
  ];
  isAdmin: boolean =true;
  pageSize = 5; // Number of items to display per page
  currentPage = 1; // The initial page number
  showProject(projectId: number) {
    // logic to show the project with the given ID
  }

  editProject(projectId: number) {
    // logic to edit the project with the given ID
  }
}


















// // projects.component.ts
// import { Component, OnInit } from '@angular/core';
// import { ProjectService } from './project.service';
//
// @Component({
//   selector: 'app-projects',
//   templateUrl: './projects.component.html',
//   styleUrls: ['./projects.component.css']
// })
// export class ProjectsComponent implements OnInit {
//   projects: any[];
//
//   constructor(private projectService: ProjectService) { }
//
//   ngOnInit() {
//     this.projectService.getProjects().subscribe(projects => {
//       this.projects = projects;
//     });
//   }
//
//   updateProjectName(project: any) {
//     const updatedProject = { ...project, name: 'Project One' };
//     this.projectService.updateProject(updatedProject).subscribe(result => {
//       console.log(result);
//       // Update the projects array with the updated project
//       const index = this.projects.findIndex(p => p.id === project.id);
//       this.projects[index] = updatedProject;
//     });
//   }
// }
//
// // project.service.ts
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class ProjectService {
//   private apiUrl = 'https://api.example.com/projects';
//
//   constructor(private http: HttpClient) { }
//
//   getProjects() {
//     return this.http.get<any[]>(this.apiUrl);
//   }
//
//   updateProject(project: any) {
//     return this.http.put<any>(`${this.apiUrl}/${project.id}`, project);
//   }
// }
