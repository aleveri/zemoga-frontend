import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppConfiguracion } from './app.configuracion';
import { DataService } from './Services/data.service';
import { GuardiaService } from './Services/guardia.service';
import { AuthService } from './Services/auth.service';
import { CallbackComponent } from './Callback/callback/callback.component';
import { UserService } from './Services/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { ToastModule } from 'ng6-toastr';
import { BoxService } from './Services/box.service';
import { CombinedService } from './Services/combined.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    Ng4LoadingSpinnerModule.forRoot(),
    ToastModule.forRoot()    
  ],
  providers: [
    AppConfiguracion,
    DataService,
    GuardiaService,
    UserService,
    BoxService,
    CombinedService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
