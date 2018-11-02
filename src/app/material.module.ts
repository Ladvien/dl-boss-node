import { NgModule } from '@angular/core';
import {
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatExpansionModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCheckboxModule,
    MatDividerModule,
    MatTabsModule,
    MatSelectModule,
    MatRadioModule,
    MatSliderModule
} from '@angular/material';

@NgModule({
    imports: [ MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatExpansionModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatCheckboxModule,
        MatDividerModule,
        MatTabsModule,
        MatSelectModule,
        MatRadioModule,
        MatSliderModule
    ],
    exports: [ MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatExpansionModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatCheckboxModule,
        MatDividerModule,
        MatTabsModule,
        MatSelectModule,
        MatRadioModule,
        MatSliderModule
    ]
})
export class MaterialModule {}
