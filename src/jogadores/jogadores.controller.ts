import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { Jogador } from './interfaces/jogador.interface';
import { JogadoresService } from './jogadores.service';

@Controller('api/v1/jogadores')
export class JogadoresController {

    constructor(private readonly jogadoresService: JogadoresService) {

    }

    @Get()
    async consultarJogadores(@Query('email') email: string): Promise<Jogador[] | Jogador>{
        if (email) {
            return this.jogadoresService.consultarJogadoresPeloEmail(email);
        } else{
            return await this.jogadoresService.consultarTodosJogadores();
        }
    }

    @Post()
    async criarAtualizarJogador(@Body() criaJogadorDto: CriarJogadorDto){
        await this.jogadoresService.criarAtualizarJogador(criaJogadorDto);
    }

    @Delete()
    async deletarJogador(@Query('email') email: string):Promise<void> {
        this.jogadoresService.deletarJogador(email);
    }

}
