import pkg from "./package.json"

const manifest = {
  manifest_version: 2,
  name: pkg.displayName,
  short_name: pkg.name,
  description: pkg.description,
  version: pkg.version,
  applications: {
    gecko: {
      strict_min_version: "54.0",
    },
  },
  chrome_settings_overrides: {
    homepage: "./src/index.html",
  },
  chrome_url_overrides: {
    newtab: "./src/index.html",
  },
  background: {
    scripts: ["./src/background/index.ts"],
    persistent: false,
  },
  permissions: ["storage", "topSites"],
}

export default function getManifest() {
  return manifest
}
