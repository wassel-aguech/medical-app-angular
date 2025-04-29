import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailComponent } from './email.component';

const routes: Routes = [
  { path: '', component: EmailComponent,
  children: [
    {
      path: 'compose',
      loadChildren: () =>
        import('./compose/compose.module').then((m) => m.ComposeModule),
    },
    {
      path: 'inbox',
      loadChildren: () =>
        import('./inbox/inbox.module').then((m) => m.InboxModule),
    },
    {
      path: 'mail-view',
      loadChildren: () =>
        import('./mail-view/mail-view.module').then((m) => m.MailViewModule),
    },
    {
      path: 'confirm-mail',
      loadChildren: () =>
        import('./confirm-mail/confirm-mail.module').then(
          (m) => m.ConfirmMailModule
        ),
    },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmailRoutingModule {}
