import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  orderForm: FormGroup;
  items: FormArray;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.orderForm = new FormGroup({
      items: new FormArray([]),
    });
  }
  arrData = [
    { name: 'uiyuiyu', description: 'name', price: '' },
    { name: 'name', description: 'ara', price: '' },
  ];
  arrDatas = [
    { name: 'phuc', description: 'name', price: '' },
    { name: 'namessss', description: 'ara', price: '' },
  ];
  createItem(): FormGroup {
    return this.formBuilder.group({
      name: '',
      description: '',
      price: '',
    });
  }

  addItem(): void {
    this.items = this.orderForm.get('items') as FormArray;

    for (let i = 0; i < this.arrData.length; i++) {
      let obj: any = this.arrData[i].name;

      const temp = this.formBuilder.group({
        [this.arrData[i].name]: '',
      });

      console.log(temp);
      this.items.push(temp);
    }
  }

  addItemData() {
    const arr = this.orderForm.get('items').value;
    console.log(this.orderForm.get('items').value);
  }

  change(event) {
    console.log(event);
    const arr = this.orderForm.get('items').value;
    console.log(arr[event]);
    console.log('đasadsa');
    if (arr[event].name === 'p') {
      for (let i = 0; i < this.arrDatas.length; i++) {
        this.arrData.push(this.arrDatas[i]);
        let obj: any = this.arrDatas[i].name;
        console.log('đasadsa');
        const temp = this.formBuilder.group({
          [this.arrDatas[i].name]: '',
        });

        console.log(temp);
        this.items.push(temp);
      }
    }
    console.log(this.orderForm.get('items').value);
  }
}
