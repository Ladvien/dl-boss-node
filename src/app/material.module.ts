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
    MatDividerModule
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
        MatDividerModule
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
        MatDividerModule
    ]
})
export class MaterialModule {}
