import {Directive} from "@angular/core";
@Directive({
    selector: 'button[counting]',
    host: {
        '(click)': 'onClick($event.target)'
    }
})
export class CountClicks{
    numberOfClicks = 0;

    onClick(btn) {
        console.log("button", btn, "number of clicks:", this.numberOfClicks++);
    }
}