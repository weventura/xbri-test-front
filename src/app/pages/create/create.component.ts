import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-create',
  imports: [ReactiveFormsModule, FormsModule, NzButtonModule, NzFormModule, NzInputModule, NzCheckboxModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  createForm: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.maxLength(70)]),
    category: new FormControl('',[Validators.required]),
    quantity: new FormControl('',[Validators.required, Validators.email]),
    price: new FormControl('',[Validators.required]),
    active: new FormControl(false,[Validators.required])
  });

  onSave(): void {
    console.log('form value ', this.createForm.value);
  }

  onBack(): void {
    
  }
}
