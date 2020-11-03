import { HomeStackParams } from './home-stack-navigator';
import { SettingsStackParams } from './settings-stack-navigator';
import { RootParams } from '../root-navigator';

export type MergedStackParams = HomeStackParams &
  SettingsStackParams &
  RootParams;
