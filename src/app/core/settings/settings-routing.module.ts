import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';

const routes: Routes = [
  { path: '', component: SettingsComponent,
  children: [
    {
      path: 'localization-details',
      loadChildren: () =>
        import('./localization-details/localization-details.module').then(
          (m) => m.LocalizationDetailsModule
        ),
    },
    {
      path: 'payment-settings',
      loadChildren: () =>
        import('./payment-settings/payment-settings.module').then(
          (m) => m.PaymentSettingsModule
        ),
    },
    {
      path: 'email-settings',
      loadChildren: () =>
        import('./email-settings/email-settings.module').then(
          (m) => m.EmailSettingsModule
        ),
    },
    {
      path: 'social-settings',
      loadChildren: () =>
        import('./social-settings/social-settings.module').then(
          (m) => m.SocialSettingsModule
        ),
    },
    {
      path: 'social-links',
      loadChildren: () =>
        import('./social-links/social-links.module').then(
          (m) => m.SocialLinksModule
        ),
    },
    {
      path: 'seo-settings',
      loadChildren: () =>
        import('./seo-settings/seo-settings.module').then(
          (m) => m.SeoSettingsModule
        ),
    },
    {
      path: 'theme-settings',
      loadChildren: () =>
        import('./theme-settings/theme-settings.module').then(
          (m) => m.ThemeSettingsModule
        ),
    },
    {
      path: 'others-settings',
      loadChildren: () =>
        import('./others-settings/others-settings.module').then(
          (m) => m.OthersSettingsModule
        ),
    },
    {
      path: 'bank-settings',
      loadChildren: () =>
        import('./bank-settings/bank-settings.module').then(
          (m) => m.BankSettingsModule
        ),
    },
    {
      path: 'change-password',
      loadChildren: () =>
        import('./change-password/change-password.module').then(
          (m) => m.ChangePasswordModule
        ),
    },
  { path: 'general-settings', loadChildren: () => import('./general-settings/general-settings.module').then(m => m.GeneralSettingsModule) }

  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
