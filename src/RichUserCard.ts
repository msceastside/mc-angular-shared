import {Component, Input} from '@angular/core';

@Component({
    selector: 'rich-user-card',
    styles: [`
       h1 {
            color: blue;
        }
    `],
    template: `
        <a class="block block-link-hover2" href="javascript:void(0)">
        <div class="block-content block-content-full text-center bg-image" style="background-image: url('../assets/images/photo2.jpg');">
        <img class="img-avatar img-avatar96 img-avatar-thumb" src="../assets/images/avatar3.jpg" alt="">
        </div>
        <div class="block-content block-content-full text-center">
        <div class="font-w600 push-5">{{name}}</div>
        <div class="text-muted">{{title}}</div>
        </div>
        </a>
               `
})
export class RichUserCard {
    @Input() public name: string = "Meg Ryan";
    title = "Web Developer";
    avatarUrl = "assets/images/avatar3.jpg";
    backgroundUrl = "assets/images/photo2.jpg";
}
