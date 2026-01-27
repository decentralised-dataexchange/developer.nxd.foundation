const fs = require("fs");
const path = require("path");

const files = [
  path.join(__dirname, "docs/datamarketplace-api/sidebar.ts"),
  path.join(__dirname, "docs/disp-api/sidebar.ts"),
];

// Global registry for labels to ensure uniqueness across ALL files
const globalLabelCounts = {};

files.forEach((file) => {
  if (!fs.existsSync(file)) {
    return;
  }
  console.log(`Processing ${file}...`);
  let content = fs.readFileSync(file, "utf8");

  const knownIds = new Set();
  let duplicateIds = 0;
  let intros = 0;
  let uniqueLabels = 0;

  // Regex for Doc blocks
  // Matches { type: "doc" ... } with optional trailing comma
  const blockRegex = /\{\s*type:\s*"doc"[\s\S]*?\s*\}(,)?/g;

  const newContent = content.replace(blockRegex, (match) => {
    // Extract ID
    const idMatch = match.match(/id:\s*"([^"]+)"/);
    if (!idMatch) return match;
    const id = idMatch[1];

    // 1. Remove Intro Pages
    if (
      id === "datamarketplace-api/dataspace-backend-api" ||
      id === "disp-api/disp-api-documentation"
    ) {
      intros++;
      return "";
    }

    // 2. Remove Duplicate IDs (within this file)
    if (knownIds.has(id)) {
      duplicateIds++;
      return "";
    }
    knownIds.add(id);

    // 3. Uniquify Labels
    const labelMatch = match.match(/label:\s*"([^"]+)"/);
    if (labelMatch) {
      const originalLabel = labelMatch[1];

      // Increment count
      if (!globalLabelCounts[originalLabel]) {
        globalLabelCounts[originalLabel] = 1;
      } else {
        globalLabelCounts[originalLabel]++;
        // Modify label in the match string
        const newLabel = `${originalLabel} (${globalLabelCounts[originalLabel]})`;
        match = match.replace(
          `label: "${originalLabel}"`,
          `label: "${newLabel}"`,
        );
        uniqueLabels++;
      }
    }

    return match;
  });

  if (duplicateIds > 0 || intros > 0 || uniqueLabels > 0) {
    console.log(
      `Modified ${file}: Removed ${duplicateIds} duplicates, ${intros} intros. Uniquified ${uniqueLabels} labels.`,
    );
    fs.writeFileSync(file, newContent, "utf8");
  } else {
    console.log(`No changes needed for ${file}`);
  }
});
