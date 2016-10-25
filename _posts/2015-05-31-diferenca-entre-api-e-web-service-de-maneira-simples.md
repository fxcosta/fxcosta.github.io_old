---
layout: post
title: Diferença entre API e Web Service de maneira simples
date: 2015-05-31 00:00:24.000000000 -03:00
type: post
published: true
status: publish
categories: []
tags:
- api
- desenvolvimento web
- rest
- web
- webservices
meta:
  _edit_last: '59574466'
  geo_public: '0'
  _publicize_job_id: '11177027137'
author:
    name: "Felix Costa"
    mail: "fx3costa@gmail.com"
    github: "fxcosta"
    blog: "https://fxcosta.github.io"
    twitter: "@fxcosta"
    facebook: "fx3costa"
---
Confesso que essa era uma pergunta que me intrigava. Eu via o conceito dos dois, conversas sobre os dois, mas ainda não tinha entendido qual a diferença entre eles e quando se referenciar a um ou a outro.
Pois bem, basicamente é o seguinte:

__API (Application Programming Interface)__ - É como uma interface entre dois programas diferentes de modo que eles possam se comunicar um com o outro. Ou seja, uma API é a forma que terceiros disponibilizam uma interface de modo que possamos consumir um determinado serviço deles sem nos preocuparmos com a implementação do mesmo. As API podem usar qualquer meio de comunicação para iniciar a interação entre as aplicações. Por exemplo, as chamadas de sistema (System Calls) são invocados usando interrupções da API do kernel Linux.

__Web Services__ -  é uma interface projetada para se comunicar via rede. É uma API que usa obrigatoriamente a rede. Tipicamente, HTTP é o protocolo mais comumente usado para a comunicação. Web Services também usam SOAP, REST e XML-RPC como meio de comunicação. Ou seja, quando uma API precisa enviar dados através de rede, estamos falando de Web Services.

Só que é preciso estar atento a alguns detalhes. Uma API geralmente envolve chamar funções de dentro de um programa. Por exemplo, as aplicações de desktop, como planilhas e documentos de texto usam VBA e APIs baseados em COM que não envolvem a Web e mesmo aplicações de servidor como o Joomla podem usar uma API PHP presente no próprio servidor sem necessidade da rede.
Ou seja, resumindo de maneira bem simples:

* Todos os Web Services são API. Mas nem todas as API são Web Service.
* Web Services podem não executar todas as tarefas que uma API normalmente realiza (ou pode realizar).
* Um serviço Web utiliza apenas três estilos de comunicação: SOAP, REST e XML-RPC enquanto que a API pode usar qualquer estilo de comunicação.
* Um Web Service sempre precisa de uma rede para o seu funcionamento enquanto uma API não precisa.
* Uma API facilita a interface direta com um aplicativo enquanto que um Web Service é uma aplicação.

__Referências__

1. [Wikipedia](http://pt.wikipedia.org/wiki/Web_service)
2. [Difference Between](http://www.differencebetween.net/technology/internet/difference-between-api-and-web-service)
3. [StackOverflow](http://pt.stackoverflow.com/questions/17501/qual-%C3%A9-a-diferen%C3%A7a-de-api-biblioteca-e-framework">StackOverflow)
