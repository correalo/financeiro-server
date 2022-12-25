export class CreateUserDto {
  email: string;
  firstName: string;
  lastName: string;
  password: string;

  constructor(init: Partial<CreateUserDto>) {
    Object.assign(this, init);
  }
}
