import { defineConfig, loadEnv } from "vite";
// import react from "@vitejs/plugin-react"; // Remove this if not using React
import { stringToSlug } from "./src/utils";

export default () => {
  const env = loadEnv("dev", process.cwd());
  return defineConfig({
    base: `/${stringToSlug(env.VITE_TEAM_NAME)}/`,
    assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg'], // Include image file types
  });
};
