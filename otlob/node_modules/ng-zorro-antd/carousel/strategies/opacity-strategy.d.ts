import { QueryList } from '@angular/core';
import { Observable } from 'rxjs';
import { NzCarouselContentDirective } from '../nz-carousel-content.directive';
import { NzCarouselBaseStrategy } from './base-strategy';
export declare class NzCarouselOpacityStrategy extends NzCarouselBaseStrategy {
    withCarouselContents(contents: QueryList<NzCarouselContentDirective> | null): void;
    switch(_f: number, _t: number): Observable<void>;
    dispose(): void;
}
