import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {
    @Get()
    findAll() {
        return'Find all';
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return 'Find one';
    }
    
    @Put(':id')
    update(@Param('id') id: number) {
        return 'Update one';
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return 'Delete one';
    }

    @Post()
    create() {
        return 'Create';
    }
}
