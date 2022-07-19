import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform{

    transform(cadena:string, enMayusculas:boolean = true): string {
        console.log(enMayusculas)
        //if(enMayusculas === true){
          //  return cadena.toUpperCase();
        //}else{
         //   return cadena.toLowerCase();
        //} 
        // otra forma de hacer lo mismo
        return (enMayusculas) ? cadena.toUpperCase() : cadena.toLowerCase();
    }
}