import { QuestData } from '../types';
import { BEGINNER_QUESTS } from './stories/beginner';
import { INTERMEDIATE_QUESTS } from './stories/intermediate';
import { ADVANCED_QUESTS } from './stories/advanced';

export const ALL_QUESTS: QuestData[] = [
  ...BEGINNER_QUESTS,
  ...INTERMEDIATE_QUESTS,
  ...ADVANCED_QUESTS,
];
