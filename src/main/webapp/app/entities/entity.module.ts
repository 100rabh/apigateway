import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ApigatewayBlogModule } from './blog/blog.module';
import { ApigatewayEntryModule } from './entry/entry.module';
import { ApigatewayTagModule } from './tag/tag.module';
import { ApigatewayProductModule } from './product/product.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        ApigatewayBlogModule,
        ApigatewayEntryModule,
        ApigatewayTagModule,
        ApigatewayProductModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ApigatewayEntityModule {}
