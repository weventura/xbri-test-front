import { Component } from '@angular/core';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { Person } from '../../core/interfaces/person.interface';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [NzDividerModule, NzTableModule, FormsModule, NzInputModule, NzButtonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  search!: string;

  listOfData: Person[] = [
    {
      id: 1,
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      id: 2,
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      id: 3,
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];

  constructor(private router: Router) {}

  onNavigateToCreatePage(): void {
    this.router.navigate(['/create']);
  }

  onEditItem(id: number): void {

  }

  onDeleteItem(id: number): void {

  }
}
