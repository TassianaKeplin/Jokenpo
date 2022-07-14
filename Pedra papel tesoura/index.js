let jogador1 = prompt("Jogador 1, digite pedra, papel, tesoura ou pistola.")
            let jogador2 = Math.floor (Math.random()*4)


            //PEDRA 0
            //PAPEL 1
            //TESOURA 2
            //PISTOLA 3

    if(jogador2==0){
        alert("O cumputador escolheu pedra!")
    } else if(jogador2==1){
        alert("O computador escolheu papel!")
    } else if(jogador2==2){
        alert("O computador escolheu tesoura!")
    } else{
        alert("O computador escolheu pistola!")
    }
            if (jogador1 == "pedra"){
                if (jogador2 == 0){
                    alert("empate")
                }
                else if(jogador2 == 1){
                    alert("Jogador 2 vence! Papel cobre a pedra")
                }
                else if(jogador2 == 2){
                    alert("Jogador 1 ganha! Pedra quebra a tesoura")
                }
                else if(jogador2 == 3){
                    alert("Jogador 2 ganha! pistola atira no jogador 1")
                }
            }

            if (jogador1 == "papel"){
                if (jogador2 == 0){
                    alert("Jogador 1 vence! Papel cobre a pedra")
                }
                else if(jogador2 == 1){
                    alert("empate")
                }
                else if(jogador2 == 2){
                    alert("Jogador 2 ganha! Tesoura corta o papel")
                }
                else if(jogador2 == 3){
                    alert("Jogador 2 ganha! pistola atira no jogador 1")
                }
            }

            if (jogador1 == "tesoura"){
                if (jogador2 == 0){
                    alert("Jogador 2 vence! pedra quebra tesoura")
                }
                else if(jogador2 == 1){
                    alert("Jogador 1 ganha! Tesoura corta o papel")
                }
                else if(jogador2 == 2){
                    alert("empate")
                }
                else if(jogador2 == 3){
                    alert("Jogador 2 ganha! pistola atira no jogador 1")
                }
            }


            if (jogador1 == "pistola"){
                if (jogador2 == 0){
                    alert("Jogador 1 atira no computador. Jogador 1 vence!")
                }
                else if(jogador2 == 1){
                    alert("Jogador 1 atira no computador. Jogador 1 vence!")
                }
                else if(jogador2 == 2){
                    alert("Jogador 1 atira no computador. Jogador 1 vence!")
                }
                else if(jogador2 == 3){
                    alert("Jogador 1 e computador sacam suas pistolas, efetuam o disparo, as balas se batem no ar e ninguem se machuca. Ninguém perdeu hoje!")
                }
            }


