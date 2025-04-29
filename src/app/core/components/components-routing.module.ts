import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components.component';

const routes: Routes = [
  { path: '', component: ComponentsComponent,
  children: [
    {
      path: 'uikit',
      loadChildren: () =>
        import('./uikit/uikit.module').then((m) => m.UikitModule),
    },
    {
      path: 'typography',
      loadChildren: () =>
        import('./typography/typography.module').then((m) => m.TypographyModule),
    },
    {
      path: 'tabs',
      loadChildren: () => import('./tabs/tabs.module').then((m) => m.TabsModule),
    },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {}
