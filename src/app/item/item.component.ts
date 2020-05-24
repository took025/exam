import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  records: Array<any>;
  isDesc = false;
  column = 'CategoryName';
  pcs: any;
  sorter = false;
  posts: FormGroup;
  post: any;
  subscription: Subscription = new Subscription();

  constructor(private pcService: AppService,
              private fb: FormBuilder, ) { }

  ngOnInit(): void {
    this.pcs = this.pcService.getProducts();

    this.posts = this.fb.group({
      productName: ['asus', Validators.required],
      price: ['3200', Validators.required],
      // tslint:disable-next-line: max-line-length
      ImageUrl: ['https://blueprint-api-production.s3.amazonaws.com/uploads/card/image/839531/a388f7be-7299-46cd-8dbf-4ed8d95e9da3.jpg', Validators.required],
    });
  }
  addPost(form: FormGroup) {
    this.pcs.push(
      {
        productName: form.value.productName,
        price: form.value.price,
        ImageUrl: form.value.ImageUrl,
      }
    );
    console.log(form);
    console.log(this.pcService);
    form.reset();
  }
  removeItem(i: number): void {
    this.pcs.splice(i, 1);
  }

  sort(property) {
    this.isDesc = !this.isDesc;
    this.column = property;
    const direction = this.isDesc ? 1 : -1;

    // tslint:disable-next-line: only-arrow-functions
    this.pcs.sort(function(a, b) {
      if (a[property] < b[property]) {
        return -1 * direction;
      }
      else if (a[property] > b[property]) {
        return 1 * direction;
      }
      else {
        return 0;
      }
    });
  }

}
