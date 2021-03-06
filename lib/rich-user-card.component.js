"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const user_card_model_1 = require("./user-card.model");
let RichUserCardComponent = class RichUserCardComponent {
};
__decorate([
    core_1.Input(),
    __metadata("design:type", user_card_model_1.UserCardModel)
], RichUserCardComponent.prototype, "userCard", void 0);
RichUserCardComponent = __decorate([
    core_1.Component({
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
], RichUserCardComponent);
exports.RichUserCardComponent = RichUserCardComponent;
//# sourceMappingURL=rich-user-card.component.js.map