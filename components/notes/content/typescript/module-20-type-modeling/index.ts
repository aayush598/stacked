import type { ComponentType } from "react";
import { WhatAreDecoratorsNote } from "./01-what-are-decorators";
import { DecoratorSyntaxNote } from "./02-decorator-syntax";
import { ClassDecoratorsNote } from "./03-class-decorators";
import { MethodDecoratorsNote } from "./04-method-decorators";
import { PropertyDecoratorsNote } from "./05-property-decorators";
import { AccessorDecoratorsNote } from "./06-accessor-decorators";
import { ParameterDecoratorsNote } from "./07-parameter-decorators";
import { DecoratorFactoriesNote } from "./08-decorator-factories";
import { MetadataNote } from "./09-metadata";
import { ReflectMetadataNote } from "./10-reflect-metadata";
import { DecoratorsWithClassesNote } from "./11-decorators-with-classes";
import { LegacyVsStage3DecoratorsNote } from "./12-legacy-vs-stage3-decorators";
import { PracticalPatternsM20Note } from "./13-practical-patterns";

export const module20Content: Record<string, ComponentType> = {
  "ts-m20-s01": WhatAreDecoratorsNote,
  "ts-m20-s02": DecoratorSyntaxNote,
  "ts-m20-s03": ClassDecoratorsNote,
  "ts-m20-s04": MethodDecoratorsNote,
  "ts-m20-s05": PropertyDecoratorsNote,
  "ts-m20-s06": AccessorDecoratorsNote,
  "ts-m20-s07": ParameterDecoratorsNote,
  "ts-m20-s08": DecoratorFactoriesNote,
  "ts-m20-s09": MetadataNote,
  "ts-m20-s10": ReflectMetadataNote,
  "ts-m20-s11": DecoratorsWithClassesNote,
  "ts-m20-s12": LegacyVsStage3DecoratorsNote,
  "ts-m20-s13": PracticalPatternsM20Note,
};
