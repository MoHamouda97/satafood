import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/module/shared.module";
import { AdressPopupComponent } from "./adress-popup/adress-popup.component";
import { OrderReportFilterComponent } from "./order-report-filter/order-report-filter.component";
import { OrderReportTblComponent } from "./order-report-tbl/order-report-tbl.component";
import { OrderReportComponent } from "./order-report.component";
import { OrderReportResolver } from "./services/order-report.resolver";
import { AgmCoreModule, GoogleMapsAPIWrapper  } from '@agm/core';

@NgModule({
    declarations: [
        OrderReportComponent,
        OrderReportTblComponent,
        OrderReportFilterComponent,
        AdressPopupComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        AgmCoreModule.forRoot({ apiKey: 'AIzaSyCjzzd4nbOiZJx3B53u9ZZAq0tcOsVUBdg' }),
    ],
    providers: [
        OrderReportResolver,
        GoogleMapsAPIWrapper
    ]
})

export class OrderReportModule {}