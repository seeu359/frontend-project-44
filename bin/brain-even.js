#!/usr/bin/env node
import { brainEven, gameRules } from '../games/brain-even.js';
import gameEngine from './engine.js';

const main = () => gameEngine(brainEven, gameRules);

main();
