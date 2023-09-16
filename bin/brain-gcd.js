#!/usr/bin/env node
import { gameRules, brainGcd } from '../games/brain-gcd.js';
import engine from './engine.js';

const main = () => engine(brainGcd, gameRules);

main();
