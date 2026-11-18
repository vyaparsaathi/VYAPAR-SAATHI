const puppeteer = require("puppeteer-core");
const fs = require("fs");
const path = require("path");

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const ARTIFACT_DIR = "C:\\Users\\vivek\\.gemini\\antigravity-cli\\brain\\9ad173ed-0c43-4132-bb87-4506be047d69";
const PREVIEW_DIR = "D:\\Website\\Vyapar Saathi\\preview_screenshots";

async function run() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--enable-webgl", "--ignore-gpu-blocklist"],
  });

  // 1. Desktop Full Page
  console.log("1. Capturing Desktop Full Page...");
  const pageDesk = await browser.newPage();
  await pageDesk.setViewport({ width: 1440, height: 900 });
  await pageDesk.goto("http://localhost:3000", { waitUntil: "networkidle0" });
  await new Promise((r) => setTimeout(r, 2000));

  const deskHero = path.join(PREVIEW_DIR, "desktop-hero.png");
  await pageDesk.screenshot({ path: deskHero });
  fs.copyFileSync(deskHero, path.join(ARTIFACT_DIR, "desktop-hero.png"));

  const deskFull = path.join(PREVIEW_DIR, "desktop-full.png");
  await pageDesk.screenshot({ path: deskFull, fullPage: true });
  fs.copyFileSync(deskFull, path.join(ARTIFACT_DIR, "desktop-full.png"));
  console.log("Desktop full page saved.");

  // 2. Hindi View
  console.log("2. Capturing Hindi Language View...");
  const pageHi = await browser.newPage();
  await pageHi.setViewport({ width: 1440, height: 900 });
  await pageHi.goto("http://localhost:3000", { waitUntil: "networkidle0" });
  await new Promise((r) => setTimeout(r, 1000));
  const langBtn = await pageHi.$("button[aria-label='Switch Language EN / HI']");
  if (langBtn) {
    await langBtn.click();
    await new Promise((r) => setTimeout(r, 1200));
  }
  const hiHero = path.join(PREVIEW_DIR, "hindi-hero.png");
  await pageHi.screenshot({ path: hiHero });
  fs.copyFileSync(hiHero, path.join(ARTIFACT_DIR, "hindi-hero.png"));
  console.log("Hindi hero saved.");

  // 3. Mobile Hero & Full Page
  console.log("3. Capturing Mobile Views (390x844)...");
  const pageMob = await browser.newPage();
  await pageMob.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await pageMob.goto("http://localhost:3000", { waitUntil: "networkidle0" });
  await new Promise((r) => setTimeout(r, 2000));

  const mobHero = path.join(PREVIEW_DIR, "mobile-hero.png");
  await pageMob.screenshot({ path: mobHero });
  fs.copyFileSync(mobHero, path.join(ARTIFACT_DIR, "mobile-hero.png"));

  const mobFull = path.join(PREVIEW_DIR, "mobile-full.png");
  await pageMob.screenshot({ path: mobFull, fullPage: true });
  fs.copyFileSync(mobFull, path.join(ARTIFACT_DIR, "mobile-full.png"));
  console.log("Mobile full page saved.");

  // 4. Mobile Drawer Open
  console.log("4. Capturing Mobile Navigation Drawer Open...");
  const menuBtn = await pageMob.$("button[aria-label='Toggle Navigation Menu']");
  if (menuBtn) {
    await menuBtn.click();
    await new Promise((r) => setTimeout(r, 600));
  }
  const mobMenu = path.join(PREVIEW_DIR, "mobile-menu.png");
  await pageMob.screenshot({ path: mobMenu });
  fs.copyFileSync(mobMenu, path.join(ARTIFACT_DIR, "mobile-menu.png"));
  console.log("Mobile menu saved.");

  await browser.close();
  console.log("All comprehensive screenshots successfully created!");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
