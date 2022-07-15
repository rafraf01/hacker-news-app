import { Component, HostListener, OnInit } from '@angular/core';
import { StoryService } from '../service/story.service';
import { catchError, concatMap, finalize, map, switchMap, take } from 'rxjs/operators';
import { forkJoin, throwError } from 'rxjs';
import { StoryItem } from '../story-item.interface';
import { customPipe } from '../shared/pipe/custom-pipe.pipe';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  storyIds: string[] = [];
  isLoading = true;
  stories: StoryItem[] = [];
  offsetFlag = false;

  constructor(
    private service: StoryService,
    private sortPipe: customPipe
    ) { }

  ngOnInit() {
    this.loadStories();
  }

  forkApiCall(array: string[]) {
    return forkJoin(
      array.map(id => this.service.fetchStoryItems(id).pipe(
        concatMap(itm => this.service.fetchUserById(itm.by).pipe(
          map(({ karma }) => ({ ...itm, karma }))
        ))
      )))
  }

  loadStories() {
    this.isLoading = true
    this.service.fetchStories().pipe(
      switchMap(idArray => this.forkApiCall(idArray)),
      map(storyArray => this.sortPipe.transform(storyArray)),
      take(1),
      finalize(() => this.isLoading = false)
    ).subscribe((res: StoryItem[]) => {
      this.stories = res;
    },
    err => catchError(() => throwError(err)),
    () => {
      console.log('Api call complete');
    });
  }

  @HostListener('window:scroll', ['$event'])
  getScrollHeight() {
    this.offsetFlag = (window.scrollY > 250) ? true : false;
  }

  backToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }
}
 