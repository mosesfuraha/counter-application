// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterControlsComponent } from './counter-controls/counter-controls.component';
import { counterReducer } from './store/counter.reducer';
import { counterHistoryReducer } from './store/counter.history.reducer';
import { AppState } from './store/app.state';

@NgModule({
  declarations: [
    AppComponent,
    CounterOutputComponent,
    CounterControlsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot<AppState>({
      counter: counterReducer,
      counterHistory: counterHistoryReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
