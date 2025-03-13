import { Injectable } from '@nestjs/common';
import { Song } from './songs.entity';

@Injectable()
export class SongsService {
   private currentId: number = 0;
   private songs: Song[] = [];
    
   findAll(): Song[] {
    return this.songs;
    }

    findOne(id: number): Song {
        const song = this.songs.find(song => song.id === id);
        if (!song) {
            throw new Error(`Song with id ${id} not found`);
        }
        return song;
    }

    create(song: Song): Song {
        song.id = ++this.currentId;
        this.songs.push(song);
        return song;
    }

    update(id: number, song: Song): Song {
        const index = this.songs.findIndex(song => song.id === id);
        this.songs[index] = song;
        return song;
    }

    delete(id: number): Song {
        const index = this.songs.findIndex(song => song.id === id);
        const song = this.songs[index];
        this.songs.splice(index, 1);
        return song;
    }


}
