
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { first, tap, filter, finalize } from 'rxjs/operators';
import { AppState } from 'src/app/apps/email/app.state';
import { select, Store } from '@ngrx/store';
import { isOtherReportsLoaded } from '../store/other-reports/other-reports.selectors';
import { loadOtherReports } from '../store/other-reports/other-reports.actions';

@Injectable()

export class OtherReportsResolver implements Resolve<any> {
    loading = false;

    constructor(private stroe: Store<AppState>) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<any> {
        return this.stroe
            .pipe(
                select(isOtherReportsLoaded),
                tap(OtherReportsLoaded => {
                    if (!this.loading && !OtherReportsLoaded) {
                        this.loading = true;
                        this.stroe.dispatch(loadOtherReports())
                    }
                }),
                filter(OtherReportsLoaded => OtherReportsLoaded),
                first(),
                finalize(() => this.loading = false)
            )
    }

}