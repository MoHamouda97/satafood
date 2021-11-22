import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgZorroAntdModule, NzAlertModule, NzAvatarModule, NzIconModule, NzMessageModule, NzSwitchModule, NzTimePickerModule } from "ng-zorro-antd";
import { AntModule } from "./ant.module";
import { MatModule } from "./mat.module";
import { PipesModule } from "./pipes.module";

@NgModule({
    declarations: [
        
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
        NzTimePickerModule

    ],
    exports: [
        ReactiveFormsModule,
        FormsModule,
        NzAvatarModule,
        NzSwitchModule
,
NzTimePickerModule
,
        AntModule,
        MatModule, 
        PipesModule,          
    ],
    providers: [
        
    ]
})

export class SharedModule {}