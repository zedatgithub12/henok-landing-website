import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

// For Node.js environments, load environment variables from .env
let dotenvLoaded = false;
const loadDotenv = async () => {
  if (!dotenvLoaded) {
    try {
      const dotenv = await import("dotenv");
      dotenv.config();
      dotenvLoaded = true;
    } catch {}
  }
};

function getEnvVar(key) {
  try {
    if (import.meta.env) {
      return import.meta.env[key];
    }
  } catch {
    // import.meta not available, fall through to process.env
  }
  // Fall back to process.env (Node.js context)
  return process.env[key];
}

// Create a singleton instance to avoid multiple auth requests
let docInstance = null;

/**
 * Get an authenticated Google Sheets document instance
 * @returns {Promise<GoogleSpreadsheet>} Authenticated Google Spreadsheet instance
 */
export async function getSheetDocument() {
  // Load dotenv if needed
  await loadDotenv();

  // Return cached instance if available
  if (docInstance) {
    return docInstance;
  }

  try {
    // Get credentials from environment variables
    const credentials = {
      type: "service_account",
      project_id: getEnvVar("PUBLIC_GOOGLE_PROJECT_ID"),
      private_key_id: getEnvVar("PUBLIC_GOOGLE_PRIVATE_KEY_ID"),
      private_key: getEnvVar("PUBLIC_GOOGLE_PRIVATE_KEY").replace(/\\n/g, "\n"),
      client_email: getEnvVar("PUBLIC_GOOGLE_SERVICE_ACCOUNT_EMAIL"),
      client_id: getEnvVar("PUBLIC_GOOGLE_CLIENT_ID"),
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
      client_x509_cert_url:
        getEnvVar("PUBLIC_GOOGLE_CLIENT_CERT_URL") ||
        `https://www.googleapis.com/robot/v1/metadata/x509/${encodeURIComponent(
          getEnvVar("PUBLIC_GOOGLE_SERVICE_ACCOUNT_EMAIL")
        )}`,
    };

    // Create JWT auth client with full credentials
    const serviceAccountAuth = new JWT({
      email: credentials.client_email,
      key: credentials.private_key,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    // Create new document instance with auth
    const doc = new GoogleSpreadsheet(
      getEnvVar("PUBLIC_GOOGLE_SHEET_ID"),
      serviceAccountAuth
    );

    // Load document info
    await doc.loadInfo();

    // Cache for future use
    docInstance = doc;
    return doc;
  } catch (error) {
    throw new Error(`Google Sheets authentication failed: ${error}`);
  }
}
