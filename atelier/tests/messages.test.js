import { test } from 'node:test';
import assert from 'node:assert/strict';
import { estMessage } from '../public/js/brain.js';

test('estMessage accepte un vrai message', () => {
  assert.equal(estMessage({ role: 'user', text: 'salut' }), true);
});

test('estMessage refuse null', () => {
  assert.equal(estMessage(null), false);
});

test('estMessage refuse un rôle inconnu', () => {
  assert.equal(estMessage({ role: 'pirate', text: 'salut' }), false);
});

test('estMessage refuse un texte qui est un nombre', () => {
  assert.equal(estMessage({ role: 'user', text: 42 }), false);
});
