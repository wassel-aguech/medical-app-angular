import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './blogs.component';

const routes: Routes = [
  { path: '', component: BlogsComponent,
  children: [
    {
      path: 'blog',
      loadChildren: () => import('./blog/blog.module').then((m) => m.BlogModule),
    },
    {
      path: 'blog-details',
      loadChildren: () =>
        import('./blog-details/blog-details.module').then(
          (m) => m.BlogDetailsModule
        ),
    },
    {
      path: 'add-blog',
      loadChildren: () =>
        import('./add-blog/add-blog.module').then((m) => m.AddBlogModule),
    },
    {
      path: 'edit-blog',
      loadChildren: () =>
        import('./edit-blog/edit-blog.module').then((m) => m.EditBlogModule),
    },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogsRoutingModule {}
