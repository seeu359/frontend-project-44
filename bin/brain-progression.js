#!/usr/bin/env node
import { brainProgression, gameRules } from '../games/brain-progression.js';
import engine from './engine.js';

const main = () => engine(brainProgression, gameRules);

main();
