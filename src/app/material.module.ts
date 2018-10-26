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
    MatCheckboxModule
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
        MatCheckboxModule
    ],
    exports: [ MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatExpansionModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatCheckboxModule
    ]
})
export class MaterialModule {}
