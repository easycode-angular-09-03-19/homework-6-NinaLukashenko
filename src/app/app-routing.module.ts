import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { HomeComponent } from "./components/home/home.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { UserInfoComponent } from "./components/user-info/user-info.component";
import { PostsComponent } from "./components/posts/posts.component";
import { SecurityGuard } from "./guards/security.guard";

const routes: Routes = [
  {
    path: "user/:id",
    component: UserInfoComponent
  },
  { path: "posts", component: PostsComponent, canActivate: [SecurityGuard] },
  { path: "about", component: AboutComponent },
  { path: "", component: HomeComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
