const puppeteer = require("puppeteer-core");
const fs = require("fs");
const path = require("path");

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const ARTIFACT_DIR = "C:\\Users\\vivek\\.gemini\\antigravity-cli\\brain\\9ad173ed-0c43-4132-bb87-4506be047d69";
const PREVIEW_DIR = "D:\\Website\\Vyapar Saathi\\preview_screenshots";

async function captureSections() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--enable-webgl"],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle0" });
  await new Promise((r) => setTimeout(r, 1000));

  const sections = [
    { id: "#hero", name: "01-hero.png" },
    { id: "#journey", name: "02-journey.png" },
    { id: "#services", name: "03-services.png" },
    { id: "#about", name: "04-why-us.png" },
    { id: "#portfolio", name: "05-portfolio.png" },
    { id: "#pricing", name: "06-pricing.png" },
    { id: "#contact", name: "07-contact.png" },
  ];

  for (const sec of sections) {
    const el = await page.$(sec.id);
    if (el) {
      await page.evaluate((selector) => {
        const target = document.querySelector(selector);
        if (target) target.scrollIntoView({ behavior: "instant", block: "start" });
      }, sec.id);
      await new Promise((r) => setTimeout(r, 800));
      const filePath = path.join(PREVIEW_DIR, sec.name);
      await page.screenshot({ path: filePath });
      fs.copyFileSync(filePath, path.join(ARTIFACT_DIR, sec.name));
      console.log(`Saved ${sec.name}`);
    }
  }

  // Also toggle language to Hindi and take hero shot
  console.log("Testing Hindi language toggle...");
  const langBtn = await page.$("button[aria-label='Switch Language EN / HI']");
  if (langBtn) {
    await langBtn.click();
    await new Promise((r) => setTimeout(r, 500));
    await page.evaluate(() => window.scrollTo(0, 0));
    await new Promise((r) => setTimeout(r, 800));
    const hiPath = path.join(PREVIEW_DIR, "08-hero-hindi.png");
    await page.screenshot({ path: hiPath });
    fs.copyFileSync(hiPath, path.join(ARTIFACT_DIR, "08-hero-hindi.png"));
    console.log("Saved 08-hero-hindi.png");
  }

  // Mobile drawer test
  console.log("Testing Mobile navigation drawer...");
  const pageMob = await browser.newPage();
  await pageMob.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await pageMob.goto("http://localhost:3000", { waitUntil: "networkidle0" });
  await new Promise((r) => setTimeout(r, 800));
  const menuBtn = await pageMob.$("button[aria-label='Toggle Navigation Menu']");
  if (menuBtn) {
    await menuBtn.click();
    await new Promise((r) => setTimeout(r, 500));
    const mobMenuPath = path.join(PREVIEW_DIR, "09-mobile-menu.png");
    await pageMob.screenshot({ path: mobMenuPath });
    fs.copyFileSync(mobMenuPath, path.join(ARTIFACT_DIR, "09-mobile-menu.png"));
    console.log("Saved 09-mobile-menu.png");
  }

  await browser.close();
  console.log("All section screenshots finished!");
}

captureSections().catch(console.error);
