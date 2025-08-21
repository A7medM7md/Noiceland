import { Component } from '@angular/core';
import { ICategory } from '../../modules/icategory';

@Component({
  selector: 'app-footer-component',
  imports: [],
  templateUrl: './footer-component.html',
  styleUrl: './footer-component.css'
})
export class FooterComponent {
  CategoriesList: ICategory[];

  constructor() {
    this.CategoriesList = [
      {
        link: "/category/animation",
        title: "Animation"
      },
      {
        link: "/category/architecture",
        title: "Architecture"
      },
      {
        link: "/category/graphic-design",
        title: "Graphic Design"
      },
      {
        link: "/category/illustration",
        title: "Illustration"
      },
      {
        link: "/category/interactive-design",
        title: "Interactive Design"
      },
      {
        link: "/category/miscellaneous",
        title: "Miscellaneous"
      },
      {
        link: "/category/photography",
        title: "Photography"
      },
      {
        link: "/category/product-design",
        title: "Product Design"
      }
    ]
  }
}
