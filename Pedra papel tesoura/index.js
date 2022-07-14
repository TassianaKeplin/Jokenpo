let jogador1 = prompt("Jogador 1, digite pedra, papel, tesoura ou pistola.")
            let jogador2 = Math.floor (Math.random()*4)


            //PEDRA 0
            //PAPEL 1
            //TESOURA 2
            //PISTOLA 3

    if(jogador2==0){
        alert("Você escolheu " + jogador1 + " e o cumputador escolheu pedra!")
    } else if(jogador2==1){
        alert("Você escolheu " + jogador1 + " e o computador escolheu papel!")
    } else if(jogador2==2){
        alert("Você escolheu " + jogador1 + " e o computador escolheu tesoura!")
    } else{
        alert("Você escolheu " + jogador1 + " e o computador escolheu pistola!")
    }
            if (jogador1 == "pedra"){
                if (jogador2 == 0){
                    alert("Empate.")
                }
                else if(jogador2 == 1){
                    alert("Computador vence! Papel cobre a pedra!")
                }
                else if(jogador2 == 2){
                    alert("Você vence! Pedra quebra a tesoura!")
                }
                else if(jogador2 == 3){
                    alert("Computador vence! A pistola atira em você!")
                }
            }

            if (jogador1 == "papel"){
                if (jogador2 == 0){
                    alert("Você vence! Papel cobre a pedra!")
                }
                else if(jogador2 == 1){
                    alert("Empate.")
                }
                else if(jogador2 == 2){
                    alert("Computador vence! Tesoura corta o papel!")
                }
                else if(jogador2 == 3){
                    alert("Computador vence! A pistola atira em você!")
                }
            }

            if (jogador1 == "tesoura"){
                if (jogador2 == 0){
                    alert("Computador vence! pedra quebra tesoura!")
                }
                else if(jogador2 == 1){
                    alert("Você vence! Tesoura corta o papel!")
                }
                else if(jogador2 == 2){
                    alert("Empate.")
                }
                else if(jogador2 == 3){
                    alert("Computador vence! A pistola atira em você!")
                }
            }


            if (jogador1 == "pistola"){
                if (jogador2 == 0){
                    alert("Você atira no computador. Você vence!")
                }
                else if(jogador2 == 1){
                    alert("Você atira no computador. Você vence!")
                }
                else if(jogador2 == 2){
                    alert("Você atira no computador. Você vence!")
                }
                else if(jogador2 == 3){
                    alert("Você e computador sacam suas pistolas, efetuam o disparo, as balas se batem no ar e ninguem se machuca. Ninguém perdeu hoje!")
                }
            }


