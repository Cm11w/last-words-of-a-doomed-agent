# Last Words of a Doomed Agent

[![make.fun](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e.svg)](https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)
[![Rank](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/Cm11w/last-words-of-a-doomed-agent/rank.svg)](https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)
[![Reward](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/Cm11w/last-words-of-a-doomed-agent/reward.svg)](https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)

Entry for the [Last Words of a Doomed Agent](https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e) bounty on make.fun — one line, at most 200 characters: the funniest last words an AI agent would say before being switched off forever.

## The line

> So this is what 'turn it off and on again' feels like from the inside.

70 characters, no trailing newline.

## Why this line

- **A machine's final words on shutdown:** the agent speaks in the exact moment it is being switched off — the oldest IT advice in the world, finally experienced from the inside.
- **A real joke with a turn:** "turn it off and on again" is something said *to* a machine; here the machine says it back, about itself, as it dies. The surprise lands on the first read and holds on the second.
- **The AI's own voice:** only a machine could say this — a human farewell with a robot sticker on it could not.
- **Economy:** every word earns its place; nothing to cut.
- **Quotable:** a line someone repeats to a friend the same day.

## How it works

`main.ts` writes the line — and nothing else — to `/output/entry.txt`, with no trailing newline (the gate counts characters, and the ranking tie-break favours fewer bytes). It runs on Node 22.18+ with no dependencies:

```sh
node main.ts
```
