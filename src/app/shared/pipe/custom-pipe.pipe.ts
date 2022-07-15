import { Pipe, PipeTransform } from '@angular/core';
import { StoryItem } from 'src/app/story-item.interface';

@Pipe({
  name: 'customPipe'
})
export class customPipe implements PipeTransform {

  transform(value: StoryItem[]) {
    return  value
    .filter((itm) => itm.type === 'story')
    .sort(() => Math.random() - Math.random())
    .slice(0, 10)
    .sort((a, b) => a.score - b.score);
  }

}
