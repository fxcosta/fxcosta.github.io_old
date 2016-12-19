---
layout: post
title: Por que devemos preferir composição ao invés de herança?
date: 2015-09-06 05:47:17.000000000 -03:00
type: post
published: true
status: publish
comments: true
categories: 
  - Orientação a Objetos
tags:
  - orientação a objetos
  - herança
  - composição
  - solid
author:
    name: "Felix Costa"
    mail: "fx3costa@gmail.com"
    github: "fxcosta"
    blog: "https://fxcosta.github.io/"
    twitter: "@fxcosta"
    facebook: "fx3costa"
---

<p>Logo quando estamos começando nossa longa caminhada sobre os vales escuros da orientação a objetos - e digo escuro por que cada dia que passa se aprende mais - aprendemos o uso e importância da herança. Se você está lendo esse artigo suponho que ao menos já tenha visto uma situação onde você viu ou implementou herança.</p>
<p>Mas, será que minha classe realmente É-UM outra classe? Será que eu realmente tenho que adotar tais comportamentos e até mesmo sobrescreve-los? Será que a classe filha realmente precisa de todos esses métodos e não somente de um ou dois? Se a herança é ferramenta básica de extensão e reuso de funcionalidade por que seu uso é extremamente desencorajado? Bem, vamos começar por partes.<!--more--></p>
<p>Vamos ser diretos e listar os problemas da herança - levando em consideração que o leitor tenha noção da herança, seu objetivo e motivação. Primeiro ponto, inquestionável é: herança quebra o encapsulamento. Mas hein?</p>
<p>Para essa afirmação vamos usar um exemplo claro, sem códigos ainda: Temos uma super classe chamada Dispositivo. Atualmente há duas classes derivadas de Dispositivo chamadas DispositivoA e DispositivoB e, logicamente, ambas herdam todos os métodos de Dispositivo mas vamos pegar um para exemplo que é chamado de conectarEntrada que é responsável pela lógica de como os dipositivos são conectados. Em nossa abstração - e ingenuidade - definimos o corpo desse método em Dispositivo e nas classes derivadas apenas nos referenciamos a ele, afinal, é o mesmo comportamento, não é? Porém, requisitos mudam e agora passamos a ter um novo tipo de dispositivo, o DispositivoC onde seu modo de entrada será diferente. A primeira coisa que pensamos é: ok, irei sobrescrever o método conectarEntrada, fazendo apenas os ajustes necessários. Obviamente o que você precisa? Conhecer como a super classe implementa esse método, daí você abre a classe, observa o que tem e comete a quebra do encapsulamento. Acabou encapsulamento, você violou um dos pilares da OO. Você tem conhecimento especifico demais.</p>
<p>E isso fica pior quando DispositivoC não usa metade dos métodos de Dispositivo mas mesmo assim continuamos a trabalhar com a herança afinal alguns métodos ainda são aproveitáveis. Comodismo?</p>
<p>Resumindo, o encapsulamento entre Dispositivos e DispositivoA, B e C é fraco, e o acoplamento é forte. Assim, toda vez que Dispositivo for alterado todas as subclasses serão afetadas. A nossa estrutura está presa, acoplada, e não pode sofrer alterações graves. Mas requisitos mudam, e nossos clientes não estão nenhum pouco preocupados com isso.</p>
<p>E isso não é novidade, vide o artigo de Alan Snyder, <a href="http://citeseer.ist.psu.edu/513482.html">Encapsulation and Inheritance in Object-Oriented Programming Languages</a>, de 1986! Não convencido? Olha o que a <a href="https://en.wikipedia.org/wiki/Design_Patterns">Gang of Four</a> diz: "Porque herança expõe para uma subclasse detalhes da implementação do seu pai, por isso muitas vezes é dito que "herança é quebra de encapsulamento".</p>
<p>Beleza, então se você tá falando que esse lance de herança deve ser analisada com muito, mas muito cuidado, que solução usar? Joshua Bloch em seu livro Effective Java nos diz: prefira composição em vez de herança. Vamos ver isso melhor!</p>
<p>Quando utilizamos composição, instanciamos a classe que desejamos dentro de nosso código, ex: DispositivoC não herda mais de Dispositivo, ele não É-UM Dispositivo, ele TEM um Dispositivo. Dessa forma, estamos estendendo as responsabilidades pela delegação de trabalho a outros objetos, ou seja, DispositivoA tem um comportamento parecido com Dispositivo? Beleza, simplesmente use o comportamento de Dispositivo ao invés de ter essa responsabilidade em DispositivoA. Ou seja, é um modo mais geral de estender uma classe, onde um objeto, em vez de realizar uma de suas tarefas, delega tal tarefa a um objeto auxiliar associado, que no caso você usaria como classe pai.</p>
<p>Ao utilizar a composição, teremos muito mais flexibilidade, além de ser mais comum em muitos padrões de projetos. Dessa forma temos projeto mais flexível a mudanças, respeitando os princípios de responsabilidade única, substituição de Liskov e tornando nosso código desacoplado. Qualquer alteração feita em Dispositivo não quebrará nossos clientes diretamente e podemos usar somente métodos que sejam realmente necessários.</p>
<p>Hum, não entendi muito bem ainda, mas já que você está falando vou usar somente composição! Não, aí é que entra o erro. A herança é sim útil, mas somente caso faça sentido o relacionamento É-UM. Meu exemplo pode ser citado como um mal exemplo por que da mesma forma como ele serve para ilustrar uma desvantagem no uso de herança ele pode ser exatamente a solução. Tudo depende do seu projeto e é por isso que vou listar quais benefícios e desvantagens de cada um deles:</p>
<p><strong>Benefícios da herança:</strong></p>
<ul>
<li>Reusa tudo o que é comum nas classes relacionadas e isola o que for diferente.</li>
<li>A herança é vista diretamente no código</li>
<li>Desenvolvimento mais rápido em comparação com composição caso os problemas da herança não sejam um problema para sua aplicação.</li>
</ul>
<p><strong>Problemas da herança:</strong></p>
<ul>
<li>O encapsulamento entre classes e subclasses é fraco (o acoplamento é forte). Ou seja, mudar da superclasse pode afetar todas as subclasses além de violar um dos princípios da OO que é manter um fraco acoplamento.</li>
<li>Às vezes um objeto precisa ser de uma classe diferente em momentos diferentes e com herança isso não é possível. Imagine que usamos herança no caso do DispositivoC. Mas puts, agora faz mais sentido que ele se comporte como DispositivosPaiTipoC. Como alterar isso se estamos parafusados já com a herança? Vamos ter que quebrar todos os clientes e refatorar tudo.</li>
<li>Relacionamento estático.</li>
</ul>
<p><strong>Benefícios da composição:</strong></p>
<ul>
<li>O comportamento pode ser escolhido em tempo de execução em vez de estar amarrado em tempo de compilação.</li>
<li>Melhorarmos nossa abstração trabalhando com interfaces.</li>
<li>Detalhes internos dos objetos instanciados não são visíveis.</li>
<li>Respeitamos o princípio da responsabilidade única, uma vez que uma determinada ação é responsabilidade da classe pai e não necessariamente preciso impor essa responsabilidade em suas classes derivadas.</li>
<li>Respeito ao princípio da substituição de Liskov, uma vez que é muito fácil eu quebrar esse princípio com um override que seja mais forte que o método padrão da classe pai.</li>
</ul>
<p><strong>Problemas da composição:</strong></p>
<ul>
<li>Não diria que o software fica mais complexo, mas você deverá estar mais atento ao design da sua aplicação e isso irá requerer um melhor planejamento das classes que terão dependências de outras classes e etc.</li>
<li>Caso não seja o caso necessário, terá complexidade desnecessária a aplicação e isso acarretará a maior prazo de entrega do mesmo se for o caso.</li>
</ul>
<p>Resumindo se o objeto "é um tipo especial de" e não "um papel assumido por, se o objeto nunca tem que mudar para outra classe futuramente e/o a subclasse estende a superclasse mas não faz override ou anulação de variáveis e/ou métodos, use herança, do contrário, fuga desse problema!</p>
<p>Qualquer feedback, sugestão, erros (e isso é bem possível), críticas ou qualquer coisa do tipo, deixe seu comentário ou manda um e-mail!</p>
<p><strong>Referências e fontes de estudo</strong>:</p>
<p>http://blog.berniesumption.com/software/inheritance-is-evil-and-must-be-destroyed/</p>
<p>http://www.dsc.ufcg.edu.br/~jacques/cursos/map/html/pat/herancavscomposicao.htm</p>
<p>http://blog.caelum.com.br/como-nao-aprender-orientacao-a-objetos-heranca/</p>
<p>http://imasters.com.br/artigo/20380/java/heranca-x-composicao/</p>
<p>https://en.wikipedia.org/wiki/Design_Patterns</p>
<p>http://groselhas.maurogeorge.com.br/prefira-composicao-ao-inves-de-heranca-um-simples-exemplo-em-ruby.html#sthash.IXxGlACd.dpbs</p>
<p>http://marcionorberto.blogspot.com.br/2013/04/heranca-e-delegacao.html</p>
<p>http://www.devmedia.com.br/heranca-versus-composicao-qual-utilizar/26145</p>
