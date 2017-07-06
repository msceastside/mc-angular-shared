import {Component, Input} from '@angular/core';
import {UserCardModel} from './user-card.model';

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
        <div class="font-w600 push-5">{{userCard.title1}}</div>
        <div class="text-muted">{{userCard.title2}}</div>
        </div>
        </a>
               `
})
export class RichUserCardComponent {
    @Input() userCard: UserCardModel;
}
