import { UPDATE_LOCATION as ROUTER_UPDATE_LOCATION } from '@angular-redux/router';
import { ActionCreator, Dispatchable, PayloadAction } from './root.actions';
import { Injectable } from '@angular/core';
import { RootState } from './root.reducer';
import { NgRedux } from '@angular-redux/store';

// Unfortunately the angular redux library does not provide the action type as a literal type, so we need to type the key as string
export type UPDATE_LOCATION = string;

export interface NavigationAction extends PayloadAction<UPDATE_LOCATION, string> {
}

@Injectable()
export class NavigationActions extends ActionCreator<NavigationActions, RootState> {
  constructor(protected ngRedux: NgRedux<RootState>) {
    super();
  }

  @Dispatchable()
  navigate(url: string): NavigationAction {
    return {
      type: ROUTER_UPDATE_LOCATION,
      payload: url
    };
  }
}