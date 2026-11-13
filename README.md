# Implementação Low Ticket

O funil exportado do Artifact está em `content/funil.html`. As seis imagens
estão em `public/img/`. A rota `app/route.ts` entrega esse HTML diretamente em
`/`, preservando os estilos, a navegação entre etapas, o carrossel e o
redirecionamento para o WhatsApp.

## Executar

```sh
pnpm install
pnpm dev
```

Abra http://localhost:3000.

## Publicar na Vercel

Envie o projeto completo ao GitHub, incluindo `content/`, `public/img/` e
`app/route.ts`. A antiga `app/page.tsx` foi removida e deve continuar ausente:
uma página e um Route Handler não podem ocupar a mesma rota.

Use o preset Next.js na Vercel, com build `pnpm build` e diretório de saída
padrão. O HTML da página inicial é gerado durante o build.

Para validar a versão de produção localmente:

```sh
pnpm build
pnpm start
```

O HTML mantém os links, o Meta Pixel e as fontes externas do arquivo enviado.
