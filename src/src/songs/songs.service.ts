import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './create-song.dto'; 
import { Song } from './songs.entity';

@Injectable()
export class SongsService {
    private currentId : number = 0;
    private songs: Song[] = [];

    create(CreateSongDTO : CreateSongDto){
        const song: Song = {
            id : this.currentId,
            title : CreateSongDTO.title,
            artist : CreateSongDTO.artist
        }
        ++this.currentId;
        this.songs.push(song);
    }

    findAll() : Song[]{
        return this.songs
    }

    findOne(id :number) : Song[]{
        return this.songs.filter((song) => song.id == id)
    }

    delete(id: number){
        this.songs = this.songs.filter((song) => song.id != id);
    }

    updateOne(id: number, createSondDTO : CreateSongDto){
        this.songs.forEach((song) =>{
            if(song.id == id){
                song.artist = createSondDTO.artist;
                song.title = createSondDTO.title;
            }
        });
    }
}
