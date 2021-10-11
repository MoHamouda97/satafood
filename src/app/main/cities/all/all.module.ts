import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/module/shared.module";
import { AllComponent } from "./all.component";


@NgModule({
    declarations: [
        AllComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
    ],
    providers: [
        //AllOffersResolver
    ]
})

export class AllCitiesModule {}