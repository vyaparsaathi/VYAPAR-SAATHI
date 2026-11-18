const puppeteer = require("puppeteer-core");
const fs = require("fs");
const path = require("path");

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const ARTIFACT_DIR = "C:\\Users\\vivek\\.gemini\\antigravity-cli\\brain\\9ad173ed-0c43-4132-bb87-4506be047d69";
const PREVIEW_DIR = "D:\\Website\\Vyapar Saathi\\preview_screenshots";

async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 400;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 100);
    });
  });
}

async function capture() {
  console.log("Launching headless Chrome...");
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--enable-webgl", "--ignore-gpu-blocklist"],
  });

  // 1. Desktop Screenshot
  console.log("Capturing Desktop 1440x900 with autoscroll...");
  const pageDesktop = await browser.newPage();
  await pageDesktop.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  await pageDesktop.goto("http://localhost:3000", { waitUntil: "networkidle0", timeout: 30000 });
  await autoScroll(pageDesktop);
  await new Promise((r) => setTimeout(r, 1500));

  const desktopHeroPath = path.join(PREVIEW_DIR, "desktop-hero.png");
  await pageDesktop.screenshot({ path: desktopHeroPath });
  fs.copyFileSync(desktopHeroPath, path.join(ARTIFACT_DIR, "desktop-hero.png"));

  const desktopFullPath = path.join(PREVIEW_DIR, "desktop-full.png");
  await pageDesktop.screenshot({ path: desktopFullPath, fullPage: true });
  fs.copyFileSync(desktopFullPath, path.join(ARTIFACT_DIR, "desktop-full.png"));
  console.log("Desktop screenshots saved.");

  // 2. Mobile Screenshot
  console.log("Capturing Mobile 390x844 with autoscroll...");
  const pageMobile = await browser.newPage();
  await pageMobile.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await pageMobile.goto("http://localhost:3000", { waitUntil: "networkidle0", timeout: 30000 });
  await autoScroll(pageMobile);
  await new Promise((r) => setTimeout(r, 1500));

  const mobileHeroPath = path.join(PREVIEW_DIR, "mobile-hero.png");
  await pageMobile.screenshot({ path: mobileHeroPath });
  fs.copyFileSync(mobileHeroPath, path.join(ARTIFACT_DIR, "mobile-hero.png"));

  const mobileFullPath = path.join(PREVIEW_DIR, "mobile-full.png");
  await pageMobile.screenshot({ path: mobileFullPath, fullPage: true });
  fs.copyFileSync(mobileFullPath, path.join(ARTIFACT_DIR, "mobile-full.png"));
  console.log("Mobile screenshots saved.");

  await browser.close();
  console.log("All screenshots updated!");
}

capture().catch((err) => {
  console.error(err);
  process.exit(1);
});
