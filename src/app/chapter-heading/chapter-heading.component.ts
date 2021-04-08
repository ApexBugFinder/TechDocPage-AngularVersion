import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-chapter-heading',
  templateUrl: './chapter-heading.component.html',
  styleUrls: ['./chapter-heading.component.scss']
})
export class ChapterHeadingComponent implements OnInit {

  @Input() heading = 'No Heading';
  constructor() { }

  ngOnInit(): void {

    // this.heading = 'Introduction';
  }

}
