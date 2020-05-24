import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  httClient: any;

  constructor() { }

  products =  [
    {
        // productId: 1,
        productName: 'dell',
        price: 2000,
        // tslint:disable-next-line:max-line-length
        ImageUrl: 'https://i.dell.com/sites/csimages/Video_Imagery/all/xps_7590_touch.png'
      },
      {
        // productId: 2,
        productName: 'lg',
        price: 2500,
        ImageUrl: 'https://www.lg.com/us/images/laptops/md06060216/gallery/01-1100-v1.jpg'
      },
      {
        // productId: 3,
        productName: 'hp',
        price: 2002,
        // tslint:disable-next-line: max-line-length
        ImageUrl: 'https://cdn.mos.cms.futurecdn.net/ahevYTh9pWRzkNPF85MQhb-1200-80.jpg',
      },
  ];
  getProducts() {
      return this.products;
  }
  addPost(post: any): Observable<any> {
    return this.httClient.post('https://jsonplaceholder.typicode.com/posts', {
      productName: post.productName,
      year: post.year,
      ImageUrl: post.ImageUrl,
    });
  }
}
