import type { ComponentType } from "react";
import { module01Content } from "./module-01-introduction";
import { module03Content } from "./module-03-basic-types";
import { module04Content } from "./module-04-variables-functions-operators";
import { module05Content } from "./module-05-interfaces-type-aliases";
import { module06Content } from "./module-06-objects-arrays-tuples";
import { module07Content } from "./module-07-enums-special-types";

export const typescriptNoteContent: Record<string, ComponentType> = {
  ...module01Content,
  ...module03Content,
  ...module04Content,
  ...module05Content,
  ...module06Content,
  ...module07Content,
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
