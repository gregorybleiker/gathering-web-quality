import { User } from './user.model';

export class LoginState {
  constructor(
    public id: number,
    public userName: string,
    public role: string,
    public authAction: string,
    public routerLink: string
  ) {}

  static LoggedIn(user: User): LoginState {
    return new LoginState(user.id, user.name, user.role, 'Log out', '/logout');
  }

  static LoggedOut(): LoginState {
    return new LoginState(-1, '', '', 'Log in', '/login');
  }

  static Load(isLoggedIn: boolean, user: User): LoginState {
    if (isLoggedIn) {
      return LoginState.LoggedIn(user);
    }

    return LoginState.LoggedOut();
  }
}
