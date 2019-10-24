import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';

export class CredentialsValidators {
    static passwordsMustMatch(control: AbstractControl): ValidationErrors | null{
        if(control.get('new').value !== control.get('confirm').value){
            return {passwordsDontMatch: true}
        }
        return null
    }

    static password(control: AbstractControl): Promise<ValidationErrors|null> | Observable<ValidationErrors|null>{
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(control.value !== '123'){
                    resolve({invalidPassword: true});
                }
                else {
                    resolve(null);
                }
            }, 2000);
        });
    }
}