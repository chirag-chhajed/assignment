import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import { PlayersService } from './players.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';

@Controller('players')
export class PlayersController {
    constructor(private readonly playersService: PlayersService) {}

    @Post()
    @UsePipes(new ValidationPipe())
    create(@Body() createPlayerDto: CreatePlayerDto) {
        return this.playersService.create(createPlayerDto);
    }

    @Get()
    findAll() {
        return this.playersService.findAll();
    }

    @Get('random')
    random() {
        return this.playersService.getRandomPlayer();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.playersService.findOne(id);
    }

    @Get('rank/:val')
    findRank(@Param('val') val: string) {
        return this.playersService.findRank(+val);
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe())
    update(@Param('id') id: string, @Body() updatePlayerDto: UpdatePlayerDto) {
        return this.playersService.update(id, updatePlayerDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.playersService.remove(id);
    }
}
