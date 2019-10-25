import { ErrorHandler } from "@angular/core";

export class AppErrorHandler extends ErrorHandler  {
    handleError(error) {
        alert('An enexpected error has occured.')
        console.log(error)
    }
}