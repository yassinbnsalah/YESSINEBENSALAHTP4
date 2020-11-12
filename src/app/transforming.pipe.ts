import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transforming'
})
export class TransformingPipe implements PipeTransform {
  transform(nom: string):string {
    return '* '+nom+' *';
    }
   

}
