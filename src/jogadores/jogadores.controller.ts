import { Body, Controller, Post } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';

@Controller('api/v1/jogadores')
export class JogadoresController {

    @Post()
    async criarAtualizarJogador(@Body() criaJogadorDto: CriarJogadorDto){
        const { email } = criaJogadorDto;
        console.log(criaJogadorDto);
        return JSON.stringify(`{
            "nome": ${email}
        }`);
    }

}