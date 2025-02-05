import { logger } from "../helpers/logger";
import { ProjectType } from "../types/ProjectType";
import { Detector } from "./detector";
import { existsSync } from "fs";

export default class HardhatDetector implements Detector {
  public projectType: ProjectType = "hardhat";

  public matches(path: string): boolean {
    logger.debug("Checking if " + path + " is a Hardhat project");
    return (
      existsSync(path + "/hardhat.config.js") ||
      existsSync(path + "/hardhat.config.ts")
    );
  }
}
