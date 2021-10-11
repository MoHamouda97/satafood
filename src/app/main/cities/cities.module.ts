import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CitiesRoutes } from './offers.routes';
import { AllCitiesModule } from './all/all.module';
import { AddEditModule } from './add-edit/add-edit.module';


@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(CitiesRoutes),
        AllCitiesModule,
        AddEditModule
    ],
    exports: [],
    providers: [
        
    ]
})

export class CitiesModule {}