import type { ComponentType } from "react";
import { FunctionTypesNote } from "./01-function-types";
import { FunctionOverloadsNote } from "./02-function-overloads";
import { OverloadSignaturesNote } from "./03-overload-signatures";
import { ImplementationSignaturesNote } from "./04-implementation-signatures";
import { ThisTypesNote } from "./05-this-types";
import { HigherOrderFunctionsNote } from "./06-higher-order-functions";
import { GenericFunctionsM12Note } from "./07-generic-functions";
import { FunctionConstraintsNote } from "./08-function-constraints";
import { OptionalChainingNote } from "./09-optional-chaining";
import { NullishCoalescingNote } from "./10-nullish-coalescing";
import { CallbackTypingNote } from "./11-callback-typing";

export const module12Content: Record<string, ComponentType> = {
  "ts-m12-s01": FunctionTypesNote,
  "ts-m12-s02": FunctionOverloadsNote,
  "ts-m12-s03": OverloadSignaturesNote,
  "ts-m12-s04": ImplementationSignaturesNote,
  "ts-m12-s05": ThisTypesNote,
  "ts-m12-s06": HigherOrderFunctionsNote,
  "ts-m12-s07": GenericFunctionsM12Note,
  "ts-m12-s08": FunctionConstraintsNote,
  "ts-m12-s09": OptionalChainingNote,
  "ts-m12-s10": NullishCoalescingNote,
  "ts-m12-s11": CallbackTypingNote,
};
