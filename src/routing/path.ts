export class PATHS {
  public static HOME_PATH(): string {
    return '/'
  }

  public static CONTACT_US_PATH(): string {
    return '/contacts-us'
  }

  public static ABOUT_US_PATH(): string {
    return '/about-us'
  }

  public static ASSIGNMENT_PATH(): string {
    return '/assignment'
  }

  public static ASSIGNMENT_DETAIL_PATH(id: string): string {
    return `${PATHS.ASSIGNMENT_PATH}/${id}`
  }
}
