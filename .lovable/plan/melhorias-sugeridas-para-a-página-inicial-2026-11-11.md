# Melhorias sugeridas para a página inicial

## 1. Corrigir o WhatsApp dos cursos (urgente)
Os botões "Saiba mais" de cada categoria de curso e o botão de consultoria abrem um número falso (+55 11 99999-9999). Hoje esses contatos se perdem. Trocar pelo número oficial, igual ao resto do site.

## 2. Dar destaque às páginas de venda
Os cursos de Própolis e Hidromel só aparecem dentro dos cards de cursos. Proposta:
- Uma faixa logo após o topo com os dois cursos à venda (foto, preço, botão "Ver curso").
- Links "Curso Própolis", "Curso Hidromel" e "Calculadora" no menu do computador (hoje a calculadora só aparece no menu do celular).

## 3. Textos em inglês
Os cards de destaque do Hidromel e o link da calculadora estão só em português, mesmo com o site em inglês. Traduzir.

## 4. Visual mais consistente
Os cards de categoria usam cores variadas (verde, azul, roxo, rosa) que fogem da identidade mel/âmbar. Unificar em tons de mel.

## 5. Velocidade
Carregar imagens da galeria e vídeos de depoimentos só quando o visitante rolar até eles, deixando a abertura do site mais rápida no celular.

## Detalhes técnicos
- `CoursesSection.tsx`: número `5511999999999` → `555599562754`; cores das categorias para tokens honey/amber; textos do card Hidromel no `LanguageContext`.
- `Navigation.tsx`: adicionar links de rota no desktop.
- Nova seção `FeaturedCoursesSection` em `BrabelhasLanding` após o Hero.
- `loading="lazy"` / `preload="none"` em galeria e depoimentos.

Posso fazer tudo ou só os itens que você escolher.
