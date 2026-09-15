.PHONY: help setup dev build test lint typecheck check format clean

help:
	@echo "Next.js 16 Starter Command Cheatsheet:"
	@echo "  make setup     - Install dependencies"
	@echo "  make dev       - Run Next.js Turbopack dev server"
	@echo "  make check     - Run all checks (lint + typecheck + tests)"
	@echo "  make test      - Run Vitest component tests"
	@echo "  make typecheck - Run TypeScript type checking"
	@echo "  make lint      - Run ESLint"
	@echo "  make build     - Build optimized production app"
	@echo "  make format    - Auto-format code with Prettier"
	@echo "  make clean     - Remove .next and build caches"

setup:
	npm install

dev:
	npm run dev

check:
	npm run check

test:
	npm run test

typecheck:
	npm run typecheck

lint:
	npm run lint

build:
	npm run build

format:
	npm run format

clean:
	rm -rf .next node_modules/.cache .vitest
