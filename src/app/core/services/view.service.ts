import { ViewPortSizes } from './../../shared/models/view-port-sizes.model';

import { Injectable, OnDestroy } from '@angular/core';
import { BreakpointObserver, MediaMatcher, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Platform } from '@angular/cdk/platform';
@Injectable()
export class ViewService {

  viewPortSizes$: Observable<ViewPortSizes>;

  constructor(public breakpointObserver: BreakpointObserver,
    public mediaMatcher: MediaMatcher,
    private platform: Platform) {
    this.viewPortSizes$ = breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
      Breakpoints.Web,
      Breakpoints.WebLandscape,
      Breakpoints.WebPortrait,
      Breakpoints.Handset,
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait,
      Breakpoints.Tablet,
      Breakpoints.TabletLandscape,
      Breakpoints.TabletPortrait
    ]).pipe(
      map(() => ({
        isXSmall: breakpointObserver.isMatched(Breakpoints.XSmall),
        isSmall: breakpointObserver.isMatched(Breakpoints.Small),
        isMedium: breakpointObserver.isMatched(Breakpoints.Medium),
        isLarge: breakpointObserver.isMatched(Breakpoints.Large),
        isXLarge: breakpointObserver.isMatched(Breakpoints.XLarge),
        isWeb: breakpointObserver.isMatched(Breakpoints.Web),
        isWebLandscape: breakpointObserver.isMatched(Breakpoints.WebLandscape),
        isWebPortrait: breakpointObserver.isMatched(Breakpoints.WebPortrait),
        isHandset: breakpointObserver.isMatched(Breakpoints.Handset),
        isHandsetLandscape: breakpointObserver.isMatched(Breakpoints.HandsetLandscape),
        isHandsetPortrait: breakpointObserver.isMatched(Breakpoints.HandsetPortrait),
        isTablet: breakpointObserver.isMatched(Breakpoints.Tablet),
        isTabletLandscape: breakpointObserver.isMatched(Breakpoints.TabletLandscape),
        isTabletPortrait: breakpointObserver.isMatched(Breakpoints.TabletPortrait)
      })
      )
    );
  }
}
