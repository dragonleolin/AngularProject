import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css'],
})
export class ExamplesComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['title', [Validators.required]],
      content: ['content', [Validators.required, Validators.minLength(5)]],
      check: true,
    });
  }

  submit() {
    if (this.form.valid) {
      console.log('valid');
    } else {
      console.log('invalid');
    }
  }
}
