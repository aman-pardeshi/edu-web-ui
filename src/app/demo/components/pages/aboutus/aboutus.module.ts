import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsRoutingModule } from './aboutus-routing.module';
import { AboutUsComponent } from './aboutus.component';
import { HeaderComponent } from "../../../../components/Shared/header/header.component";

@NgModule({
	imports: [
    CommonModule,
    AboutUsRoutingModule,
    HeaderComponent
],
	declarations: [AboutUsComponent]
})
export class AboutUsModule { }
