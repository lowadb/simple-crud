import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAgregatorPipe } from './user-agregator.pipe';



@NgModule({
    declarations: [UserAgregatorPipe],
    exports: [
        UserAgregatorPipe
    ],
    imports: [
        CommonModule
    ]
})
export class PipesModule { }
