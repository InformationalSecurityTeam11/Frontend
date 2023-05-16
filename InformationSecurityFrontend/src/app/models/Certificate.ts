import {User} from "./User";

export interface CertificateInfo {
  ownerInfo : User,
  startDate : string,
  expireDate : string,
  type : string,
  serialNumber : number

}

export interface ValidateCertificate {
  valid: boolean,
  startDate : string,
  expiredDate :string
}
