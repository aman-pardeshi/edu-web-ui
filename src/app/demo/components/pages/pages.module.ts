import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { HeaderComponent } from 'src/app/components/Shared/header/header.component';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HeaderComponent,
        PagesRoutingModule
    ]
})
export class PagesModule { }
