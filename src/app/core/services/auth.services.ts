import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private tokenKey!: string

  login() {
    this.tokenKey = 'MyFakeToken'
  }
  getToken(): string{
    return this.tokenKey
  }
}
