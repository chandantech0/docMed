import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SelectloginComponent } from "./selectlogin/selectlogin.component";
import { InputTextModule } from "primeng/inputtext";
import { AutoCompleteModule } from "primeng/autocomplete";
import { CalendarModule } from "primeng/calendar";
import { ChipsModule } from "primeng/chips";
import { DropdownModule } from "primeng/dropdown";
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { MultiSelectModule } from "primeng/multiselect";
import { InputTextareaModule } from "primeng/inputtextarea";
import {ButtonModule} from 'primeng/button';
import { RippleModule } from "primeng/ripple";
import {InplaceModule} from 'primeng/inplace';
import {SkeletonModule} from 'primeng/skeleton';
import { FocusDirective } from "../doctor-layout/services/directives/focus.directive";
import {CardModule} from 'primeng/card';
import {ToastModule} from 'primeng/toast';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    AutoCompleteModule,
    CalendarModule,
    ChipsModule,
    DropdownModule,
    InputMaskModule,
    InputNumberModule,
    CascadeSelectModule,
    MultiSelectModule,
    InputTextareaModule,
    ButtonModule,
    RippleModule,
    SkeletonModule,
    CardModule,
    ToastModule
  ],
  declarations: [
    FocusDirective
  ],
  entryComponents: [
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    AutoCompleteModule,
    CalendarModule,
    ChipsModule,
    DropdownModule,
    InputMaskModule,
    InputNumberModule,
    CascadeSelectModule,
    MultiSelectModule,
    InputTextareaModule,
    ButtonModule,
    RippleModule,
    SkeletonModule,
    FocusDirective,
    CardModule,
    ToastModule
  ]
})
export class SharedModule {}
