import * as React from 'react';
import iconJson from './icons/file-icons-icon-theme-mod.json';
const iconSpec = iconJson as IconSpec;

interface ReferenceToIconDefinition {
  [name: string]: string | undefined;
}

interface IconDefinition {
  fontCharacter: string;
  fontColor?: string;
  fontId: string;
}

interface IconDefinitions {
  [key: string]: IconDefinition; 
}

interface IconSpec {
  file: string;
  folder: string;
  fileExtensions: ReferenceToIconDefinition;
  fileNames: ReferenceToIconDefinition;
  iconDefinitions: IconDefinitions
}

const getExtension = (filename: string): string | undefined =>
  filename.split('.').pop();

const resolveIconDefinition = (filename: string): IconDefinition => {
  const definition = iconSpec.fileNames[filename];
  if (definition !== undefined) {
    return iconSpec.iconDefinitions[definition];
  }

  const extension = getExtension(filename);
  if (extension !== undefined) {
    const definition = iconSpec.fileExtensions[extension];
    if (definition) {
      return iconSpec.iconDefinitions[definition];
    }
  }

  return iconSpec.iconDefinitions[iconSpec.file];
};

interface SickFileIconProps {
  filename: string;
  isFolder: boolean;
}

export const SickFileIcon = ({ filename, isFolder }: SickFileIconProps) => {
  const def = isFolder ? iconSpec.iconDefinitions[iconSpec.folder] : resolveIconDefinition(filename);
  let char = def.fontCharacter;
  if (char.startsWith("\\")) {
    char = String.fromCharCode(parseInt(def.fontCharacter.replace("\\", ""), 16));
  }
  return (
    <span style={{ fontFamily: def.fontId, color: def.fontColor}} dangerouslySetInnerHTML={{__html: char}}/>
  );
};
