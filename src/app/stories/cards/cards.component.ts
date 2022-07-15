import { Component, Input, OnInit } from '@angular/core';
import { StoryService } from '../../service/story.service';
import { take , map, tap} from 'rxjs/operators';
import { StoryItem } from '../../story-item.interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input() story: any;
  @Input() index: number | undefined;

  ngOnInit(): void {
  }


  toDateString(timestamp: string) {
    return timestamp = new Date().toDateString();
  }
}
