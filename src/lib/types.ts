export enum UserAccessType {
  RESTRICTED = 'RESTRICTED',
  STANDARD = 'STANDARD',
  STAFF = 'STAFF',
  ADMIN = 'ADMIN',
  MARKETING = 'MARKETING',
  MERCH_STORE_MANAGER = 'MERCH_STORE_MANAGER',
  MERCH_STORE_DISTRIBUTOR = 'MERCH_STORE_DISTRIBUTOR',
}

export enum UserAccountState {
  PENDING = 'PENDING',
  ACTIVE = 'ACTIVE',
  BLOCKED = 'BLOCKED',
  PASSWORD_RESET = 'PASSWORD_RESET',
}

export type Uuid = string;
export interface LoggedInUser {
  uuid: string;
  email: string;
  firstName: string;
  lastName: string;
  profilePicture: string | null;
  accessType: UserAccessType;
  state: UserAccountState;
  graduationYear: number;
  major: string;
  bio: string | null;
  points: number;
  credits: number;
}
