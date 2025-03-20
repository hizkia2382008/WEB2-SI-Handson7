import { Body, Controller, Delete, Get, Param, Post, Put, UseInterceptors, ValidationPipe } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './create-song.dto';
import { ExecutionTimeInterceptors } from 'src/ExecutionTime.interceptors';

@Controller('songs')
export class SongsController {

    constructor (private songService: SongsService){

    }

    @Post()
    @UseInterceptors(ExecutionTimeInterceptors)
    create(@Body(new ValidationPipe()) createSongDTO : CreateSongDto){
        return this.songService.create(createSongDTO);
    }

    @Get()
    findAll(){
        return this.songService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id : number){
        return this.songService.findOne(id);
    }

    @Put (':id')
    update(@Param('id') id: number, @Body() createSongDTO : CreateSongDto ){
        return this.songService.updateOne(id,createSongDTO);
    }

    @Delete(':id')
    delete(@Param('id') id: number){
        return this.songService.delete(id);
    }
}
