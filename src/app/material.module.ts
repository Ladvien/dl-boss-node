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
    MatSelectModule
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
        MatSelectModule
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
        MatSelectModule
    ]
})
export class MaterialModule {}
