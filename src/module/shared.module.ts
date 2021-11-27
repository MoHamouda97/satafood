import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
<<<<<<< HEAD
import { NgZorroAntdModule, NzAlertModule, NzAvatarModule, NzIconModule, NzMessageModule, NzSwitchModule, NzTimePickerModule } from "ng-zorro-antd";
=======
import { MatTabsModule } from "@angular/material";
import { NgZorroAntdModule, NzAlertModule, NzAvatarModule, NzCardModule, NzIconModule, NzMessageModule } from "ng-zorro-antd";
>>>>>>> 0b253574f2be8d083a83e579d04bf79a96ffd1ff
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
<<<<<<< HEAD
        NzSwitchModule,
        NzTimePickerModule

=======
        NzCardModule 
>>>>>>> 0b253574f2be8d083a83e579d04bf79a96ffd1ff
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
        NzCardModule ,
      MatTabsModule,
        PipesModule,          
    ],
    providers: [
        
    ]
})

export class SharedModule {}