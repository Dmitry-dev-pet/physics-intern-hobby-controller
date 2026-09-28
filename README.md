# PhysicsIntern Hobby Controller

Minimal public Vercel controller for the private
`Dmitry-dev-pet/rubik-physics-intern` research workspace.

This repository intentionally contains **no research material and no secrets**.
Its only job is to create/resume a persistent Vercel Sandbox for the Codex
research stages and authorize requests coming from the exact GitHub Actions
workflow in the private research repository. Google Antigravity second-opinion
stages run directly on GitHub-hosted runners and do not use this controller.

## Deploy on Vercel Hobby

Use the public-repository import:

https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FDmitry-dev-pet%2Fphysics-intern-hobby-controller&project-name=physics-intern-hobby-controller

No OpenAI API key and no GitHub PAT are required in Vercel.

The controller uses:

- GitHub Actions OIDC to authenticate incoming control requests;
- Vercel project OIDC for Sandbox access;
- a short-lived GitHub Actions `GITHUB_TOKEN` only while a research stage is
  running;
- persistent Vercel Sandbox snapshots for the Codex ChatGPT device-login state.

## Hobby profile

- persistent named Sandbox;
- 2 vCPU / 4 GiB;
- 40-minute Sandbox session;
- research stages are bounded by the private repository workflow;
- no `autoresearch` on Hobby.

## Security boundary

The controller accepts only GitHub OIDC tokens whose claims match:

```text
repository = Dmitry-dev-pet/rubik-physics-intern
actor      = Dmitry-dev-pet
workflow   = .github/workflows/physics-intern-hobby.yml@refs/heads/main
audience   = vercel-physics-intern-hobby
```

The research repository stays private. ChatGPT authentication is stored only
inside the persistent Sandbox filesystem.

## Production

This repository is connected directly to the Vercel project `physics-intern-hobby-controller`.

Stable production alias:

```text
https://physics-intern-hobby-controller.vercel.app
```

The private `rubik-physics-intern` Hobby workflow uses this canonical alias directly; no controller URL secret or repository variable is required.

A lightweight **smoke** mode validates both the health endpoint and the exact GitHub OIDC trust boundary without starting a Vercel Sandbox. After smoke passes, use **login** only when the persistent Codex session must be established or refreshed, then use the research stages normally.
