import { Debug } from './debug.model';
import { Motd } from './motd.model';
import { Players } from './players.module';

export interface Status {
  ip: string;
  port: number;
  debug: Debug;
  motd: Motd;
  players: Players;
  version: string;
  online: boolean;
  protocol: number;
  protocol_name: string;
  icon: string;
  eula_bl: boolean;
}
