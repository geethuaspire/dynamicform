import { from } from 'rxjs';
import { AbstractControl, ValidationErrors, ValidatorFn  } from '@angular/forms';

export class UsernameValidators {
    static shouldNotContainSpaces(
        control:AbstractControl
    ):ValidationErrors | null{
        const value = control.value as string;
        console.log(value);
        
        if(value && value.indexOf(' ') !== -1){
            return {
                shouldNotContainSpaces:true,
            };
        }
        return null;
    }
}