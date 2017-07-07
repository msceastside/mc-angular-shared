import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RichUserCardComponent } from './src/rich-user-card.component';
import { UserCardModel } from './src/user-card.model';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        RichUserCardComponent,
        UserCardModel
    ],
    providers: [
    ],
    exports: [
        RichUserCardComponent
    ]
})
export class SharedModule { }

export * from './src/user-card.model';