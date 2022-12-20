import {Page} from "@playwright/test";
import {Locator} from "playwright";

export abstract class AdminPage {
  protected readonly page;
  readonly getActiveNavItem: Locator;
  readonly getNavbarHostname: Locator;
  readonly getStatusLoad: Locator;
  readonly getStatusMemoryUsage: Locator;
  readonly getQueryOverTimeChart: Locator;
  readonly getDomainsOnAdlistStat: Locator;

  protected constructor(page: Page) {
    this.page = page;
    this.getActiveNavItem = this.page.locator('ul.sidebar-menu li.active');
    this.getNavbarHostname = this.page.locator('.navbar-text code');
    this.getStatusLoad = this.page.locator('section.sidebar span').getByText('Load:');
    this.getStatusMemoryUsage = this.page.locator('section.sidebar span').getByText('Memory usage:');
    this.getQueryOverTimeChart = this.page.locator('#queryOverTimeChart');
    this.getDomainsOnAdlistStat = this.page.locator('#domains_being_blocked');
  }

  public screenshot() {
    return this.page.screenshot({
      mask: [
        this.getNavbarHostname,
        this.getStatusLoad,
        this.getStatusMemoryUsage,
        this.getQueryOverTimeChart,
      ],
      fullPage: true,
    });
  }
}
