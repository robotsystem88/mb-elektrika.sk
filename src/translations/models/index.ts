import { mercedesModels } from './mercedes';
import { bmwModels } from './bmw';
import { porscheModels } from './porsche';
import { teslaModels } from './tesla';
import { smartModels } from './smart';
import { type ModelPageContent } from './types';

export const modelPages: Record<string, ModelPageContent> = {
  ...mercedesModels,
  ...bmwModels,
  ...porscheModels,
  ...teslaModels,
  ...smartModels
}