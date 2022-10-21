import { Component, OnInit } from '@angular/core';
import { Book } from 'src/types/Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  book: Book[] = [
    {
      name: 'Clean Code',
      author: 'Robert C Martin',
      image:
        'https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
      amount: 28,
    },
    {
      name: 'Pragmatic Programmer',
      author: 'David Thomas',
      image:
        'https://m.media-amazon.com/images/I/51W1sBPO7tL._SX380_BO1,204,203,200_.jpg',
      amount: 20,
    },
    {
      name: 'Art of Computer Programming',
      author: 'Donald John Fuller',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/41gCSRxxVeL._SY429_BO1,204,203,200_.jpg',
      amount: 236,
    },
    {
      name: 'Introduction to Algorithms',
      author: 'T Cormen',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/41VndKVtiXL._SX442_BO1,204,203,200_.jpg',
      amount: 92,
    },
  ];

  isShowing: boolean = true;

  constructor() {
    console.log({constructor: 'constructor'});
    
  }

  ngOnInit(): void {
    console.log({OnInIt:'On In It'});
    
  }

  addToCart(book: Book){
    console.log(event);
    
  }
}
