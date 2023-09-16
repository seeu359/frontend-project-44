#!/usr/bin/env node
import gameEngine from './engine.js';
import { brainCalc, gameRules } from '../games/brain-calc.js';

const main = () => gameEngine(brainCalc, gameRules);

main();
