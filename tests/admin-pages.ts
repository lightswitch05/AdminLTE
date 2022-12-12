import {DashboardPage} from "./pages/dashboard-page";
import { test as base } from '@playwright/test';
import {GroupsPage} from "./pages/groups-page";
import {ClientsPage} from "./pages/clients-page";


type AdminFixtures = {
  dashboardPage: DashboardPage;
  groupsPage: GroupsPage;
  clientsPage: ClientsPage;
};

export const test = base.extend<AdminFixtures>({
  dashboardPage: async ({ page }, use) => {
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.goto();
    await use(dashboardPage);
  },

  groupsPage: async ({ page }, use) => {
    const groupsPage = new GroupsPage(page);
    await groupsPage.goto();
    await use(groupsPage);
  },

  clientsPage: async ({ page }, use) => {
    const clientsPage = new ClientsPage(page);
    await clientsPage.goto();
    await use(clientsPage);
  },
});

export { expect } from '@playwright/test';
