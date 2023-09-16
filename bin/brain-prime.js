#!/usr/bin/env node
import engine from './engine.js';
import { brainPrime, gameRules } from '../games/brain-prime.js';

const main = () => engine(brainPrime, gameRules);

main();
