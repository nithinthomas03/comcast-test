import { Pipe, PipeTransform } from '@angular/core';
@Pipe({  name: 'orderColumnBy' })
export class OrderByColumnPipe implements PipeTransform {

    transform(results: Array<any>, args?: any): any {
        if(results!== undefined){
            return results.sort(function(a, b){
                if(a[args.property] < b[args.property]){
                    return -1 * args.direction;
                }
                else if( a[args.property] > b[args.property]){
                    return 1 * args.direction;
                }
                else{
                    return 0;
                }
            });
        }else{
            return results;
        }
    };
}