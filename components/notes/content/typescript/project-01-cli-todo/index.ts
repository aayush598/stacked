import type { ComponentType } from "react";
import { ProjectSetupNote11 } from "./01-project-setup";
import { CommandParsingNote12 } from "./02-command-parsing";
import { TaskModelNote13 } from "./03-task-model";
import { AddTasksNote14 } from "./04-add-tasks";
import { CompleteTasksNote15 } from "./05-complete-tasks";
import { DeleteTasksNote16 } from "./06-delete-tasks";
import { FilePersistenceNote17 } from "./07-file-persistence";
import { ValidationNote18 } from "./08-validation";
import { ErrorHandlingNote19 } from "./09-error-handling";
import { CliPolishNote110 } from "./10-cli-polish";

export const project01Content: Record<string, ComponentType> = {
  "ts-p01-s01": ProjectSetupNote11,
  "ts-p01-s02": CommandParsingNote12,
  "ts-p01-s03": TaskModelNote13,
  "ts-p01-s04": AddTasksNote14,
  "ts-p01-s05": CompleteTasksNote15,
  "ts-p01-s06": DeleteTasksNote16,
  "ts-p01-s07": FilePersistenceNote17,
  "ts-p01-s08": ValidationNote18,
  "ts-p01-s09": ErrorHandlingNote19,
  "ts-p01-s10": CliPolishNote110,
};
