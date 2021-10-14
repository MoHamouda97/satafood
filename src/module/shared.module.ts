import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgZorroAntdModule } from "ng-zorro-antd";
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
        NgZorroAntdModule   
    ],
    exports: [
        ReactiveFormsModule,
        FormsModule,
        AntModule,
        MatModule, 
        PipesModule,          
    ],
    providers: [
        
    ]
})

export class SharedModule {}