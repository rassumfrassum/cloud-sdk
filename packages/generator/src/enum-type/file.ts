/* Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved. */

import { SourceFileStructure, StructureKind } from 'ts-morph';
import { VdmEnumType } from '../vdm-types';
import { enumTypeClass } from './enum';

export function enumTypeSourceFile(enumType: VdmEnumType): SourceFileStructure {
  return {
    kind: StructureKind.SourceFile,
    statements: [enumTypeClass(enumType)]
  };
}
