import type { ComponentType } from "react";
import { module01Content } from "./module-01-introduction";
import { module03Content } from "./module-03-basic-types";
import { module04Content } from "./module-04-variables-functions-operators";
import { module05Content } from "./module-05-interfaces-type-aliases";
import { module06Content } from "./module-06-objects-arrays-tuples";
import { module07Content } from "./module-07-enums-special-types";
import { module08Content } from "./module-08-classes-oop";
import { module09Content } from "./module-09-generics";
import { module10Content } from "./module-10-type-assertions";
import { module11Content } from "./module-11-type-guards";
import { module12Content } from "./module-12-advanced-functions";
import { module13Content } from "./module-13-modules-namespaces";
import { module14Content } from "./module-14-advanced-types";
import { module15Content } from "./module-15-mapped-types";
import { module16Content } from "./module-16-conditional-types";
import { module17Content } from "./module-17-template-literal-types";
import { module18Content } from "./module-18-tuples-advanced";
import { module19Content } from "./module-19-utility-types";
import { module20Content } from "./module-20-type-modeling";
import { module21Content } from "./module-21-declaration-files";
import { module22Content } from "./module-22-tsconfig";
import { module23Content } from "./module-23-dom-browser";
import { module24Content } from "./module-24-node";
import { module25Content } from "./module-25-error-handling";
import { module26Content } from "./module-26-testing";
import { module27Content } from "./module-27-performance";
import { module28Content } from "./module-28-build-tools";
import { module29Content } from "./module-29-react";
import { module30Content } from "./module-30-frameworks";
import { module31Content } from "./module-31-patterns";
import { module32Content } from "./module-32-type-level-programming";
import { module33Content } from "./module-33-migration";
import { module34Content } from "./module-34-production";
import { module35Content } from "./module-35-expert-topics";
import { project01Content } from "./project-01-cli-todo";
import { project02Content } from "./project-02-typed-rest-api";
import { project03Content } from "./project-03-task-management";
import { project04Content } from "./project-04-form-builder";
import { project05Content } from "./project-05-state-management";
import { project06Content } from "./project-06-component-library";
import { project07Content } from "./project-07-fullstack-app";

export const typescriptNoteContent: Record<string, ComponentType> = {
  ...module01Content,
  ...module03Content,
  ...module04Content,
  ...module05Content,
  ...module06Content,
  ...module07Content,
  ...module08Content,
  ...module09Content,
  ...module10Content,
  ...module11Content,
  ...module12Content,
  ...module13Content,
  ...module14Content,
  ...module15Content,
  ...module16Content,
  ...module17Content,
  ...module18Content,
  ...module19Content,
  ...module20Content,
  ...module21Content,
  ...module22Content,
  ...module23Content,
  ...module24Content,
  ...module25Content,
  ...module26Content,
  ...module27Content,
  ...module28Content,
  ...module29Content,
  ...module30Content,
  ...module31Content,
  ...module32Content,
  ...module33Content,
  ...module34Content,
  ...module35Content,
  ...project01Content,
  ...project02Content,
  ...project03Content,
  ...project04Content,
  ...project05Content,
  ...project06Content,
  ...project07Content,
};

export const revisionChecklist = [
  { id: 1, topic: "Type Annotations", status: "complete" },
  { id: 2, topic: "Type Inference", status: "complete" },
  { id: 3, topic: "Explicit vs Inferred Types", status: "complete" },
  { id: 4, topic: "Primitive Types", status: "complete" },
  { id: 5, topic: "Null", status: "complete" },
  { id: 6, topic: "Undefined", status: "complete" },
  { id: 7, topic: "Void", status: "complete" },
  { id: 8, topic: "Never", status: "complete" },
  { id: 9, topic: "Any", status: "complete" },
  { id: 10, topic: "Unknown", status: "complete" },
  { id: 11, topic: "Object", status: "complete" },
  { id: 12, topic: "Literal Types", status: "complete" },
  { id: 13, topic: "Numeric Literal Types", status: "complete" },
  { id: 14, topic: "String Literal Types", status: "complete" },
  { id: 15, topic: "Boolean Literal Types", status: "complete" },
  { id: 16, topic: "Array Types", status: "complete" },
  { id: 17, topic: "Readonly Arrays", status: "complete" },
  { id: 18, topic: "Tuple Types", status: "complete" },
  { id: 19, topic: "Readonly Tuples", status: "complete" },
  { id: 20, topic: "Optional Tuple Elements", status: "complete" },
  { id: 21, topic: "Rest Elements in Tuples", status: "complete" },
  { id: 22, topic: "Named Tuple Elements", status: "complete" },
  { id: 23, topic: "Enum Types", status: "complete" },
  { id: 24, topic: "Numeric Enums", status: "complete" },
  { id: 25, topic: "String Enums", status: "complete" },
  { id: 26, topic: "Heterogeneous Enums", status: "incomplete" },
  { id: 27, topic: "Const Enums", status: "incomplete" },
  { id: 28, topic: "Enum Alternatives Using Literal Unions", status: "incomplete" },
  { id: 29, topic: "Type Widening", status: "complete" },
  { id: 30, topic: "Type Narrowing", status: "complete" },
  { id: 31, topic: "Type Compatibility", status: "complete" },
  { id: 32, topic: "Type Assignability", status: "complete" },
  { id: 33, topic: "Important TypeScript Type Relationships", status: "complete" },
  { id: 34, topic: "Common TypeScript Mistakes and Best Practices", status: "complete" },
  { id: 35, topic: "Practical Exercises", status: "incomplete" },
  { id: 36, topic: "Module 3 — Final revision checklist", status: "complete" },
];
