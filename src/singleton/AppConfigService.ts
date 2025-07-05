export class AppConfigService {
  private static instance: AppConfigService | null = null;

  private configuration: Record<string, string>;

  private constructor() {
    this.configuration = {
      companyName: 'Acme Inc.',
      footer: 'Confidential',
    };
  }

  public get(key: string): string | undefined {
    return this.configuration[key];
  }

  public set(key: string, value: string): void {
    this.configuration[key] = value;
  }

  public static getInstance(): AppConfigService {
    if (!AppConfigService.instance) {
      AppConfigService.instance = new AppConfigService();
    }

    return AppConfigService.instance;
  }
}
