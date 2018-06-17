import { LoginState } from './login.state';

describe('LoginState', () => {
  const user = { id: 1, name: 'John Doe', role: 'Member' };

  it('should create logged in state', () => {
    const loginState = LoginState.LoggedIn(user);

    expect(loginState.id).toBe(1);
    expect(loginState.userName).toBe('John Doe');
    expect(loginState.role).toBe('Member');
    expect(loginState.routerLink).toBe('/logout');
  });

  it('should create logged out state', () => {
    const loginState = LoginState.LoggedOut();

    expect(loginState.id).toBe(-1);
    expect(loginState.userName).toBe('');
    expect(loginState.role).toBe('');
    expect(loginState.authAction).toBe('Log in');
    expect(loginState.routerLink).toBe('/login');
  });

  it('should load from auth state when not logged in', () => {
    const loginState = LoginState.Load(false, user);

    expect(loginState.id).toBe(-1);
    expect(loginState.userName).toBe('');
    expect(loginState.role).toBe('');
    expect(loginState.authAction).toBe('Log in');
    expect(loginState.routerLink).toBe('/login');
  });

  it('should load from auth state when logged in', () => {
    const loginState = LoginState.Load(true, user);

    expect(loginState.id).toBe(1);
    expect(loginState.userName).toBe('John Doe');
    expect(loginState.role).toBe('Member');
    expect(loginState.authAction).toBe('Log out');
    expect(loginState.routerLink).toBe('/logout');
  });
});
