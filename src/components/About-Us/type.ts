/**
 * Type for Data About Us
 *
 * Version 1.0
 *
 * Date: 06-07-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 06-07-2022         TuanlA           Create
 */

export interface DataAboutUs {
  key: number,
  name?: string,
  position: string,
  birthday: string,
  avatar: string,
  university: string,
  social: SocialData,
}

interface SocialData {
  github: string,
  facebook: string,
}
