import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgZorroAntdModule, NzAlertModule, NzAvatarModule, NzIconModule, NzMessageModule } from "ng-zorro-antd";
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
        NzIconModule
    ],
    exports: [
        ReactiveFormsModule,
        FormsModule,
        NzAvatarModule,
        AntModule,
        MatModule, 
        PipesModule,          
    ],
    providers: [
        
    ]
})

export class SharedModule {}