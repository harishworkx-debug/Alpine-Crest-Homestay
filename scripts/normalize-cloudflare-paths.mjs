import fs from "node:fs/promises";
import path from "node:path";

async function normalize() {
  const root = process.cwd();

  // 1. Normalize .output/server/wrangler.json
  const serverWranglerPath = path.join(root, ".output/server/wrangler.json");
  try {
    const raw = await fs.readFile(serverWranglerPath, "utf-8");
    const json = JSON.parse(raw);
    let changed = false;
    if (json.assets?.directory && json.assets.directory.includes("\\")) {
      json.assets.directory = json.assets.directory.replace(/\\/g, "/");
      changed = true;
    }
    if (json.main && json.main.includes("\\")) {
      json.main = json.main.replace(/\\/g, "/");
      changed = true;
    }
    if (changed) {
      await fs.writeFile(serverWranglerPath, JSON.stringify(json, null, 2) + "\n");
      console.log(
        "[normalize-cloudflare-paths] Normalized .output/server/wrangler.json paths to forward slashes",
      );
    }
  } catch {
    // File may not exist in non-cloudflare builds
  }

  // 2. Normalize .wrangler/deploy/config.json
  const deployConfigPath = path.join(root, ".wrangler/deploy/config.json");
  try {
    const raw = await fs.readFile(deployConfigPath, "utf-8");
    const json = JSON.parse(raw);
    let changed = false;
    if (json.configPath && json.configPath.includes("\\")) {
      json.configPath = json.configPath.replace(/\\/g, "/");
      changed = true;
    }
    if (changed) {
      await fs.writeFile(deployConfigPath, JSON.stringify(json, null, 2) + "\n");
      console.log(
        "[normalize-cloudflare-paths] Normalized .wrangler/deploy/config.json paths to forward slashes",
      );
    }
  } catch {
    // File may not exist
  }
}

normalize();
