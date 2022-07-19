import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'vuela'
})
export class VuelaPipe implements PipeTransform{

    transform(vuela:boolean = false): string {
        console.log(vuela)
        //if(enMayusculas === true){
          //  return cadena.toUpperCase();
        //}else{
         //   return cadena.toLowerCase();
        //} 
        // otra forma de hacer lo mismo
        return (vuela) ? 'vuela' : 'no vuela';
    }
}