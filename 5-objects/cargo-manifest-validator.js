// 1. Normalize Units Function
function normalizeUnits(manifest) {
  // Create a shallow copy to prevent mutation
  const normalized = { ...manifest };
  
  if (normalized.unit === "lb") {
    normalized.weight = normalized.weight * 0.45;
    normalized.unit = "kg";
  }
  
  return normalized;
}

// 2. Validate Manifest Function
function validateManifest(manifest) {
  const errors = {};
  const schema = ["containerId", "destination", "weight", "unit", "hazmat"];

  // Step A: Detect "Missing" properties completely absent from the object
  for (const key of schema) {
    if (!(key in manifest)) {
      errors[key] = "Missing";
    }
  }

  // Step B: Validate "Invalid" statuses for present keys
  
  // containerId validation: positive integer (> 0)
  if ("containerId" in manifest) {
    const val = manifest.containerId;
    if (typeof val !== "number" || Number.isNaN(val) || !Number.isInteger(val) || val <= 0) {
      errors.containerId = "Invalid";
    }
  }

  // destination validation: non-empty string after trimming whitespace
  if ("destination" in manifest) {
    const val = manifest.destination;
    if (typeof val !== "string" || val.trim() === "") {
      errors.destination = "Invalid";
    }
  }

  // weight validation: positive number (> 0)
  if ("weight" in manifest) {
    const val = manifest.weight;
    if (typeof val !== "number" || Number.isNaN(val) || val <= 0) {
      errors.weight = "Invalid";
    }
  }

  // unit validation: strictly "kg" or "lb"
  if ("unit" in manifest) {
    const val = manifest.unit;
    if (val !== "kg" && val !== "lb") {
      errors.unit = "Invalid";
    }
  }

  // hazmat validation: strictly boolean
  if ("hazmat" in manifest) {
    const val = manifest.hazmat;
    if (typeof val !== "boolean") {
      errors.hazmat = "Invalid";
    }
  }

  return errors;
}

// 3. Process Manifest Function
function processManifest(manifest) {
  const errors = validateManifest(manifest);
  
  // An empty errors object indicates a valid manifest
  if (Object.keys(errors).length === 0) {
    console.log(`Validation success: ${manifest.containerId}`);
    
    // Normalize units before reading total weight
    const normalizedManifest = normalizeUnits(manifest);
    console.log(`Total weight: ${normalizedManifest.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(errors);
  }
}