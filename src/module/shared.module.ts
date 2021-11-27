import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatTabsModule } from "@angular/material";
import { NgZorroAntdModule, NzAlertModule, NzAvatarModule, NzCardModule, NzIconModule, NzMessageModule, NzSwitchModule, NzTimePickerModule } from "ng-zorro-antd";
import { PopupDetailsComponent } from "src/app/main/orders/order-report/popup-details/popup-details.component";
import { AntModule } from "./ant.module";
import { MatModule } from "./mat.module";
import { PipesModule } from "./pipes.module";

@NgModule({
    declarations: [
        PopupDetailsComponent,

    ],
    imports: [
        CommonModule,  
        AntModule,
        PipesModule,     
        NgZorroAntdModule ,   
        NzMessageModule, 
        NzAlertModule,
        NzIconModule,
        NzSwitchModule,
        NzTimePickerModule,

    ],
    exports: [
        ReactiveFormsModule,
        FormsModule,
        NzAvatarModule,
        NzSwitchModule
,
NzTimePickerModule
,
PopupDetailsComponent,

        AntModule,
        MatModule, 
        NzCardModule ,
      MatTabsModule,
        PipesModule,          
    ],
    providers: [
        
    ]
})

export class SharedModule {}