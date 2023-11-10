import { Injectable, NotFoundException } from '@nestjs/common';
import { randomBytes } from 'crypto';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';

@Injectable()
export class PlayersService {
    private readonly players = new Map<string, CreatePlayerDto>();

    create(createPlayerDto: CreatePlayerDto) {
        const player = {
            ...createPlayerDto,
            id: randomBytes(16).toString('hex'),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };
        this.players.set(player.id, player);
        return player;
    }

    findAll() {
        const playersArray = Array.from(this.players.values());

        // Sort players based on updatedAt in descending order
        const sortedPlayers = playersArray.sort(
            (a, b) =>
                new Date(b.updatedAt).getTime() -
                new Date(a.updatedAt).getTime(),
        );

        return sortedPlayers;
    }

    private findPlayer(id: string): CreatePlayerDto {
        const player = this.players.get(id);
        if (!player) {
            throw new NotFoundException('Player not found');
        }
        return player;
    }

    findOne(id: string) {
        return this.findPlayer(id);
    }

    update(id: string, updatePlayerDto: UpdatePlayerDto) {
        const existingPlayer = this.findPlayer(id);

        const updatedPlayer = {
            name: updatePlayerDto.name ?? existingPlayer.name,
            score: updatePlayerDto.score ?? existingPlayer.score,
            country: existingPlayer.country,
            id: existingPlayer.id,
            createdAt: existingPlayer.createdAt,
            updatedAt: new Date().toISOString(),
        };

        this.players.set(id, updatedPlayer);
        return updatedPlayer;
    }

    remove(id: string) {
        const playerToRemove = this.findPlayer(id);
        this.players.delete(id);
        return playerToRemove;
    }

    getRandomPlayer() {
        if (this.players.size === 0) {
            throw new NotFoundException('No players found');
        }
        const keysArray = Array.from(this.players.keys());
        const randomIndex = Math.floor(Math.random() * keysArray.length);
        const randomKey = keysArray[randomIndex];

        return this.players.get(randomKey);
    }

    findRank(val: number) {
        if (this.players.size === 0) {
            throw new NotFoundException('No players found');
        }

        const players = Array.from(this.players.values()).filter(
            (player) => player.score === val,
        );

        if (players.length === 0) {
            throw new NotFoundException(`No players found with score ${val}`);
        }
        return players;
    }
}
