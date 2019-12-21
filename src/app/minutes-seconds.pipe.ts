import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutesSeconds'
})
export class MinutesSecondsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
  	const minutes: number = Math.floor(value / 60);
  	let minutesString: string = '';
  	if (minutes != 0) {
  		minutesString = `${minutes} min `;
  	}
  	const seconds: number = (value - minutes * 60);
  	let secondsString: string = '';
  	if (seconds != 0) {
  		secondsString = `${seconds} sec`;
  	}
    return `${minutesString}${secondsString}`;
  }
}
