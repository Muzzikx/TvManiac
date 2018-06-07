import {Pipe, PipeTransform} from '@angular/core';
import {padStart} from 'lodash';
import {Episode} from './tv.models';

@Pipe({
  name: 'episodies'
})
export class EpisodiesPipe implements PipeTransform {

  transform(episode: Partial<Episode>, upper: boolean = false): string {
    const pad = (n: number) => padStart(n.toString(), 2, '0');

    const [seasonNumber, episodeNumber] = [episode.season, episode.number].map(value => pad(value));

    return upper ? `S${seasonNumber}E${episodeNumber}`
      : `s${seasonNumber}e${episodeNumber}`;
  }
}
