import type { ComponentType } from "react";
import { ProjectSetup11 } from "./01-project-setup";
import { CommandParsing12 } from "./02-command-parsing";
import { TaskModel13 } from "./03-task-model";
import { AddTasks14 } from "./04-add-tasks";
import { CompleteTasks15 } from "./05-complete-tasks";
import { DeleteTasks16 } from "./06-delete-tasks";
import { FilePersistence17 } from "./07-file-persistence";
import { Validation18 } from "./08-validation";
import { ErrorHandling19 } from "./09-error-handling";
import { CLIPolish110 } from "./10-cli-polish";

export const project01Content: Record<string, ComponentType> = {
  "ts-p01-s01": ProjectSetup11,
  "ts-p01-s02": CommandParsing12,
  "ts-p01-s03": TaskModel13,
  "ts-p01-s04": AddTasks14,
  "ts-p01-s05": CompleteTasks15,
  "ts-p01-s06": DeleteTasks16,
  "ts-p01-s07": FilePersistence17,
  "ts-p01-s08": Validation18,
  "ts-p01-s09": ErrorHandling19,
  "ts-p01-s10": CLIPolish110,
};
