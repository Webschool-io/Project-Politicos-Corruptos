# Project-Politicos-Corruptos

[![Join the chat at https://gitter.im/Webschool-io/Project-Politicos-Corruptos](https://badges.gitter.im/Webschool-io/Project-Politicos-Corruptos.svg)](https://gitter.im/Webschool-io/Project-Politicos-Corruptos?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Sistema para mostrar quais os políticos estão envolvidos em corrupção PARA NUNCA MAIS NINGUÉM VOTAR NELES!!!

## Equipe

**Frontend**:
- [zeucxb](https://github.com/zeucxb)
- [williandutrass](https://github.com/williandutrass)
- [paulinhoerry](https://github.com/paulinhoerry)
- [estevanmaito](https://github.com/estevanmaito)

**Backend**
- [victorvoid](https://github.com/victorvoid)
- [guilhermependezza](https://github.com/guilhermependezza)
- [guilhermeepaixaoo](https://github.com/guilhermeepaixaoo)
- [suissa](https://github.com/suissa)

Coordenação: Suissinho.

## Arquitetura

### Entidades

- Political: político
- PoliticalParty: partido

#### Political

Entidade que representa o Político e para tanto deve conter os seguintes campos:

- name: String
- polticalParty: \_id
- currentPosition: String
- previousPositions: Array
- actsOfCorruption: Array

#### PoliticalParty

- name: String
- releaseYear: Date

