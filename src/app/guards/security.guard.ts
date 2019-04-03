import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class SecurityGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(route, state) {
    const userState = true;
    if (!userState) {
      this.router.navigate(["/about"]);
      return false;
    }
    return true;
  }
}
