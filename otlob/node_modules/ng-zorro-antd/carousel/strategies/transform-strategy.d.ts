import { QueryList } from '@angular/core';
import { Observable } from 'rxjs';
import { NzCarouselContentDirective } from '../nz-carousel-content.directive';
import { PointerVector } from '../nz-carousel-definitions';
import { NzCarouselBaseStrategy } from './base-strategy';
export declare class NzCarouselTransformStrategy extends NzCarouselBaseStrategy {
    private isDragging;
    private isTransitioning;
    private readonly vertical;
    dispose(): void;
    withCarouselContents(contents: QueryList<NzCarouselContentDirective> | null): void;
    switch(_f: number, _t: number): Observable<void>;
    dragging(_vector: PointerVector): void;
    private verticalTransform;
    private horizontalTransform;
    private prepareVerticalContext;
    private prepareHorizontalContext;
}
