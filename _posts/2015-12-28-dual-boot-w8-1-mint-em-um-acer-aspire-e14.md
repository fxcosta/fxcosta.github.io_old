---
layout: post
title: Dual Boot (W8.1 + Mint) em um Acer Aspire E14
date: 2015-12-28 03:17:00.000000000 -03:00
type: post
published: true
status: publish
comments: true
categories:
    - linux
tags:
    - dualboot
    - linux
    - refind
    - uefi
    - windows
author:
    name: "Felix Costa"
    mail: "fx3costa@gmail.com"
    github: "fxcosta"
    blog: "https://fxcosta.github.io"
    twitter: "@fxcosta"
    facebook: "fx3costa"
---
<p>Esse post é mais como uma dica porque encontrei algumas dificuldades para montar um ambiente com Windows 8.1 e Linux Mint 17.2.</p>
<p>Nunca tinha trabalhado com um notebook mais recente que já tivesse vindo com o W8 de fábrica e com UEFI, por isso, tive um certo trabalho para encontrar uma solução, uma vez que, se você chegou até aqui, sabe que é de fato trabalhoso, ainda mais quando não se está tão acostumado com um ambiente Linux.<!--more--></p>
<p>O motivo de ter um Dual Boot é simples: Linux para trabalhar (programar, pesquisar, etc) e Win32 para jogar. Simples. Por incrível que pareça, ficou mais fácil jogar algo, já que eu sempre ficava na promessa de testar um novo jogo.</p>
<p>Enfim, o modelo do notebook onde foi testado foi o Acer Aspire E14 (E5-471) com Windows 8.1 de fábrica. O método usado foi exatamente o mesmo que é encontrado em alguns artigos: primeiro dimensionar o HD para termos um espaço livre para nossa distro Linux, usar um LiveCD ou USB bootável, instalar a sua distro (que no meu caso foi o Mint 17.2) no espaço livre e... e aí, dependendo do seu notebook, como eu pude perceber, pode haver diversas situações.</p>
<p>A minha situação foi: não havia um GRUB no momento de boot do notebook. Ou seja, ou iniciava direto pra um sistema ou por outro. O que definia qual sistema seria iniciado era a opção de boot escolhida. Se fosse UEFI iniciava o Windows, se não fosse, iniciava direto no Mint.</p>
<p>A solução, a única que funcionou de todas as demais que testei, e que não foram poucas, foi a apresenta nesse vídeo:</p>
<p>http://www.youtube.com/watch?v=3QOfYC4LJRo</p>
<p>Que é basicamente desativar o UEFI, entrar no Linux, instalar e rodar um script chamado <a href="http://www.rodsbooks.com/refind/" target="_blank">rEFInd</a>, voltar a opção de boot para UEFI e pronto, no próximo boot teremos uma tela de escolha de qual sistema você deseja dar partida.</p>
<p>Sem mais delongas é isso, fica apenas como uma dica para quem tem esse problemas - e pude perceber que não são poucas - e, caso tenha dado certo ou dado errado comenta para descobrir se de fato é a melhor alternativa.</p>
