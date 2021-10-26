import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatTabsModule } from "@angular/material";
import { NgZorroAntdModule, NzAlertModule, NzAvatarModule, NzCardModule, NzIconModule, NzMessageModule } from "ng-zorro-antd";
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
        NzCardModule 
    ],
    exports: [
        ReactiveFormsModule,
        FormsModule,
        NzAvatarModule,
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