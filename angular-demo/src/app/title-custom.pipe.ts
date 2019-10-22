import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCustom'
})
export class TitleCustomPipe implements PipeTransform {
  transform(title: string ,args: any[]): any {
    if (!title) return null;
    let prepositions = ['of', 'the']

    let words = title.split(' ')
    for (let i = 0; i < words.length; i++){
      let word = words[i]
      if (i>0 && prepositions.includes(word.toLowerCase())){
        words[i] = word.toLowerCase()
      }
      else{
        let firstLetter = word.substr(0,1).toUpperCase()
        let rest = word.substr(1, word.length).toLowerCase()
        words[i] = firstLetter + rest
      }
    }
    return words.join(' ')
  }

}
