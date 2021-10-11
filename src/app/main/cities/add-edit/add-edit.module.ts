import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/module/shared.module";
import { AddEditComponent } from "./add-edit.component";


@NgModule({
    declarations: [
        AddEditComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
    ],
    providers: [
        //AllOffersResolver
    ]
})

export class AddEditModule {}