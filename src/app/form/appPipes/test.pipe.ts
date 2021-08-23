import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'testPipe'
})
export class TestPipe implements PipeTransform{
    transform(value:any, limit:number){
        return value.substr(0,limit) + "...";
    }
}